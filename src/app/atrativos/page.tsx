import type { Metadata } from "next";
import Link from "next/link";
import { attractions } from "@/data/attractions";

export const metadata: Metadata = {
  title: "Atrativos e Roteiros",
  description: "Cachoeira do Catoá, Serras Gerais, história de 1904 e Povoado Calunga.",
};

const difficultyLabel = {
  leve: "Leve",
  moderada: "Moderada",
  dificil: "Difícil",
} as const;

export default function AtrativosPage() {
  const natureza = attractions.filter((item) => item.type !== "historia");
  const historia = attractions.filter((item) => item.type === "historia");

  return (
    <div className="texture-noise pt-24">
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">
          Encantar
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-graphite sm:text-5xl">
          Atrativos e Roteiros
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-graphite-muted sm:text-lg">
          Natureza, trilhas e memória cultural — sem venda direta, só para você
          se apaixonar por Paranã.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {natureza.map((item) => (
            <Link
              key={item.id}
              href={`/atrativos/${item.slug}`}
              className="group overflow-hidden rounded-2xl bg-white ring-1 ring-emerald/8 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h2 className="font-display text-2xl font-bold text-graphite group-hover:text-emerald">
                  {item.name}
                </h2>
                <p className="mt-2 text-sm text-graphite-muted">{item.shortDescription}</p>
                {item.difficulty && (
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-terracotta">
                    {difficultyLabel[item.difficulty]}
                    {item.distance ? ` · ${item.distance}` : ""}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div id="historia" className="mt-16 scroll-mt-28">
          <h2 className="font-display text-3xl font-bold text-graphite">
            História e Cultura
          </h2>
          <p className="mt-2 max-w-xl text-graphite-muted">
            Das origens de 1904 ao Povoado Calunga — a alma de Paranã.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {historia.map((item) => (
              <Link
                key={item.id}
                href={`/atrativos/${item.slug}`}
                className="overflow-hidden rounded-2xl bg-graphite text-white transition hover:-translate-y-0.5"
              >
                <div className="aspect-[16/9] overflow-hidden opacity-90">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold">{item.name}</h3>
                  <p className="mt-2 text-sm text-white/70">{item.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
