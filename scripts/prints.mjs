// Tira prints do site no celular e no computador usando o Chrome instalado,
// sem dependências extras. Uso (com o site rodando):
//   npm run prints                       -> http://localhost:3000, telas inteiras
//   npm run prints -- http://localhost:3000 390:844:1 1440:900:0
// Formato do tamanho: largura:altura:celular(1/0). Os arquivos vão para prints/.
// Variáveis opcionais: CHROME_PATH (caminho do Chrome), FULL=0 (só a primeira tela).
// Precisa do Node 22 ou mais novo (usa o WebSocket nativo).
import { spawn } from "node:child_process";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const [url = "http://localhost:3000", ...sizes] = process.argv.slice(2);
const viewports = (sizes.length ? sizes : ["390:844:1", "768:1024:1", "1440:900:0"]).map((size) => {
  const [width, height, mobile] = size.split(":").map(Number);
  return { width, height, mobile: Boolean(mobile) };
});
const fullPage = process.env.FULL !== "0";
const chromePath = process.env.CHROME_PATH || "C:/Program Files/Google/Chrome/Application/chrome.exe";
const outDir = "prints";
const port = 9300 + Math.floor(Math.random() * 600);

if (typeof WebSocket === "undefined") {
  console.error("npm run prints precisa do Node 22 ou mais novo.");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
const chrome = spawn(chromePath, [
  "--headless=new",
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${mkdtempSync(join(tmpdir(), "prints-"))}`,
  "--no-first-run",
  "--hide-scrollbars",
  "about:blank",
], { stdio: "ignore" });

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function pageSocket() {
  for (let attempt = 0; attempt < 50; attempt++) {
    try {
      const targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
      const page = targets.find((target) => target.type === "page");
      if (page) return page.webSocketDebuggerUrl;
    } catch {}
    await sleep(200);
  }
  throw new Error("O Chrome não respondeu. Confira o CHROME_PATH.");
}

async function run() {
  const socket = new WebSocket(await pageSocket());
  await new Promise((resolve) => socket.addEventListener("open", resolve, { once: true }));

  let sequence = 0;
  const pending = new Map();
  const problems = new Set();
  socket.addEventListener("message", ({ data }) => {
    const message = JSON.parse(data);
    if (message.id && pending.has(message.id)) {
      pending.get(message.id)(message);
      pending.delete(message.id);
    }
    if (message.method === "Runtime.exceptionThrown") problems.add(message.params.exceptionDetails.text);
    if (message.method === "Log.entryAdded" && message.params.entry.level === "error") {
      problems.add(`${message.params.entry.text} ${message.params.entry.url ?? ""}`);
    }
  });

  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const id = ++sequence;
      pending.set(id, (message) => (message.error ? reject(new Error(message.error.message)) : resolve(message.result)));
      socket.send(JSON.stringify({ id, method, params }));
    });

  await send("Page.enable");
  await send("Runtime.enable");
  await send("Log.enable");

  for (const viewport of viewports) {
    await send("Emulation.setDeviceMetricsOverride", { ...viewport, deviceScaleFactor: 1 });
    await send("Emulation.setTouchEmulationEnabled", { enabled: viewport.mobile });
    await send("Page.navigate", { url });
    await sleep(2500);
    // Rola até o fim para carregar as imagens sob demanda e volta ao topo.
    await send("Runtime.evaluate", {
      awaitPromise: true,
      expression: `(async () => {
        for (let y = 0; y < document.documentElement.scrollHeight; y += 500) { scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); }
        scrollTo(0, 0); await new Promise(r => setTimeout(r, 1200));
      })()`,
    });
    const { data } = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: fullPage });
    const file = join(outDir, `site-${viewport.width}.png`);
    writeFileSync(file, Buffer.from(data, "base64"));
    console.log("Salvo:", file);
  }

  if (problems.size) console.log("\nErros no console:\n" + [...problems].join("\n"));
  socket.close();
}

// O Chrome é fechado mesmo se algo falhar no meio do caminho.
try {
  await run();
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
} finally {
  chrome.kill();
}
