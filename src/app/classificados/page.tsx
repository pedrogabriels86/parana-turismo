"use client";

import { useMemo, useState } from "react";
import { ClassifiedCard } from "@/components/ClassifiedCard";
import {
  classifieds,
  categoryLabels,
  type ClassifiedCategory,
} from "@/data/classifieds";

const filters: Array<"todos" | ClassifiedCategory> = [
  "todos",
  "aluguel",
  "equipamentos",
  "servicos",
  "terceiros",
];

export default function ClassificadosPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("todos");

  const items = useMemo(() => {
    const list =
      filter === "todos"
        ? classifieds
        : classifieds.filter((item) => item.category === filter);
    return [...list].sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return a.publishedHoursAgo - b.publishedHoursAgo;
    });
  }, [filter]);

  return (
    <div className="texture-noise pt-24">
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">
          Dinâmico & mão na massa
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-graphite sm:text-5xl">
          Classificados
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-graphite-muted sm:text-lg">
          Anúncios de moradores e autônomos: aluguel de temporada, equipamentos,
          serviços rápidos e terceiros (guias, barqueiros, motoristas 4x4).
        </p>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {filters.map((key) => {
            const label = key === "todos" ? "Todos" : categoryLabels[key];
            const active = filter === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                  active
                    ? "bg-emerald text-white"
                    : "bg-white text-graphite-muted ring-1 ring-emerald/10 hover:text-graphite"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-dashed border-terracotta/30 bg-terracotta-soft/40 px-4 py-4 text-sm text-graphite-muted">
          Quer subir na lista? Use o <strong className="text-terracotta">Destaque / Bump</strong> via
          Pix por 3, 7 ou 15 dias — ideal para feriados prolongados.
        </div>

        <div className="mt-6 space-y-3">
          {items.map((item) => (
            <ClassifiedCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
