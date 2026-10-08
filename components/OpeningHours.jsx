"use client";

import { useEffect, useState } from "react";
import { openingHours } from "@/data/siteData";

const toMinutes = (time) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

// "08:00" vira "8h"; "10:30" vira "10h30".
const formatTime = (time) => {
  const [hours, minutes] = time.split(":").map(Number);
  return `${hours}h${minutes ? String(minutes).padStart(2, "0") : ""}`;
};

const formatRange = (hours) => (hours ? `${formatTime(hours[0])} às ${formatTime(hours[1])}` : "Fechado");

// Dia da semana e minutos de agora no fuso da barbearia, não no do visitante.
function nowInSaoPaulo() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (type) => parts.find((part) => part.type === type).value;
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { day, minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

function getStatus({ day, minutes }) {
  const byDay = (target) => openingHours.find((entry) => entry.day === target);
  const today = byDay(day);

  if (today.hours) {
    const [open, close] = today.hours.map(toMinutes);
    if (minutes >= open && minutes < close) {
      return { open: true, text: `Aberto agora · fecha às ${formatTime(today.hours[1])}` };
    }
    if (minutes < open) {
      return { open: false, text: `Fechado agora · abre hoje às ${formatTime(today.hours[0])}` };
    }
  }

  // Procura o próximo dia aberto.
  for (let offset = 1; offset <= 7; offset++) {
    const next = byDay((day + offset) % 7);
    if (next.hours) {
      const when = offset === 1 ? "amanhã" : next.label.toLowerCase();
      return { open: false, text: `Fechado agora · abre ${when} às ${formatTime(next.hours[0])}` };
    }
  }
  return { open: false, text: "Fechado agora" };
}

export default function OpeningHours() {
  const [now, setNow] = useState(null);

  useEffect(() => {
    const update = () => setNow(nowInSaoPaulo());
    update();
    const timer = setInterval(update, 60_000);
    return () => clearInterval(timer);
  }, []);

  const status = now && getStatus(now);

  return (
    <div className="hours">
      <h3 className="list-title">Horário de funcionamento</h3>
      <p className={`hours__status${status?.open ? " is-open" : ""}`}>{status?.text}</p>
      <dl className="hours__list">
        {openingHours.map((entry) => (
          <div className={`hours__row${now?.day === entry.day ? " is-today" : ""}`} key={entry.day}>
            <dt>{entry.label}</dt>
            <dd>{formatRange(entry.hours)}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
