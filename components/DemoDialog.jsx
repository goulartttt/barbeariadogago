"use client";

import { useEffect, useRef } from "react";

// Abre o aviso de demonstração quando alguém clica num link marcado com
// data-demo. Sem JavaScript, o próprio link leva à página /sobre-este-site.
export default function DemoDialog({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (event) => {
      const link = event.target.closest("a[data-demo]");
      const newTab = event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey;
      if (!link || newTab || !ref.current) return;
      event.preventDefault();
      ref.current.showModal();
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Clicar fora da caixa (no fundo escurecido) também fecha.
  const onBackdropClick = (event) => {
    if (event.target === event.currentTarget) event.currentTarget.close();
  };

  return (
    <dialog ref={ref} className="demo-dialog" aria-labelledby="demo-title" onClick={onBackdropClick}>
      {children}
    </dialog>
  );
}
