"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { getVipEstablishments } from "@/data/establishments";

type Message = {
  role: "sonia" | "user";
  text: string;
};

const starters = [
  "Onde dormir?",
  "Onde comer?",
  "Trilhas e cachoeiras",
  "Aluguel de temporada",
];

function replyFor(input: string): string {
  const q = input.toLowerCase();
  const vip = getVipEstablishments();

  if (q.includes("dorm") || q.includes("pousada") || q.includes("hotel")) {
    const places = vip
      .filter((item) => item.category !== "restaurante")
      .map((item) => item.name)
      .join(", ");
    return `Para hospedagem, recomendo nossos Parceiros VIP: ${places}. Quer que eu te leve ao catálogo?`;
  }

  if (q.includes("comer") || q.includes("restaurante") || q.includes("almo")) {
    return "Para comer bem, o Restaurante Beira Rio é destaque VIP — peixe fresco e vista para o rio. Posso abrir o perfil.";
  }

  if (q.includes("trilha") || q.includes("cachoeira") || q.includes("catoá") || q.includes("catoa")) {
    return "A Cachoeira do Catoá é o cartão-postal: poços esmeralda e trilha moderada. Veja também a Trilha dos Mirantes nos atrativos.";
  }

  if (q.includes("aluguel") || q.includes("chácara") || q.includes("chacara") || q.includes("classificado")) {
    return "Nos classificados tem chácaras, equipamentos e guias locais. Dá para filtrar por Aluguel, Equipamentos ou Terceiros.";
  }

  return "Posso ajudar com hospedagem, restaurantes, trilhas ou classificados. Me diga o que você procura em Paranã hoje.";
}

export function Sonia() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "sonia",
      text: "Olá! Eu sou a Sônia, sua assistente em Paranã. O que você procura hoje?",
    },
  ]);

  const vipHint = useMemo(() => getVipEstablishments()[0], []);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", text: trimmed },
      { role: "sonia", text: replyFor(trimmed) },
    ]);
    setInput("");
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    send(input);
  }

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <div className="animate-float-in flex h-[min(28rem,70vh)] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-emerald/15 bg-white shadow-2xl shadow-graphite/20">
          <div className="bg-emerald px-4 py-3 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-display text-lg font-bold">Sônia</p>
                <p className="text-xs text-white/80">Assistente de Paranã</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-1 text-sm text-white/80 hover:bg-white/10 hover:text-white"
              >
                Fechar
              </button>
            </div>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-3 py-3">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  message.role === "sonia"
                    ? "bg-emerald-soft text-graphite"
                    : "ml-auto bg-graphite text-white"
                }`}
              >
                {message.text}
              </div>
            ))}
            {vipHint && (
              <Link
                href={`/catalogo/${vipHint.slug}`}
                className="block rounded-xl border border-vip/30 bg-[#fff9e8] px-3 py-2 text-xs text-graphite-muted"
              >
                Destaque Sônia: <span className="font-semibold text-graphite">{vipHint.name}</span>
              </Link>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5 border-t border-ice-deep px-3 py-2">
            {starters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => send(item)}
                className="rounded-full bg-ice px-2.5 py-1 text-[11px] font-medium text-graphite-muted hover:bg-emerald-soft hover:text-emerald"
              >
                {item}
              </button>
            ))}
          </div>

          <form onSubmit={onSubmit} className="flex gap-2 border-t border-ice-deep p-3">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Pergunte à Sônia..."
              className="min-w-0 flex-1 rounded-xl border border-ice-deep bg-ice px-3 py-2.5 text-sm outline-none ring-emerald/30 focus:ring-2"
            />
            <button
              type="submit"
              className="rounded-xl bg-emerald px-3 py-2.5 text-sm font-semibold text-white hover:bg-emerald-dark"
            >
              Enviar
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="animate-pulse-soft flex h-14 w-14 items-center justify-center rounded-full bg-emerald text-lg font-bold text-white shadow-lg shadow-emerald/30 hover:bg-emerald-dark"
        aria-label="Abrir assistente Sônia"
      >
        S
      </button>
    </div>
  );
}
