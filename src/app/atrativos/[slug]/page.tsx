import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { attractions, getAttraction } from "@/data/attractions";

type Props = { params: Promise<{ slug: string }> };

const difficultyLabel = {
  leve: "Leve",
  moderada: "Moderada",
  dificil: "Difícil",
} as const;

export async function generateStaticParams() {
  return attractions.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getAttraction(slug);
  if (!item) return { title: "Atrativo" };
  return { title: item.name, description: item.shortDescription };
}

export default async function AttractionPage({ params }: Props) {
  const { slug } = await params;
  const item = getAttraction(slug);
  if (!item) notFound();

  return (
    <div className="pt-16">
      <div className="relative h-[48vh] min-h-[280px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite/75 via-graphite/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 pb-8 sm:px-6">
          <Link href="/atrativos" className="text-sm font-medium text-white/80 hover:text-white">
            ← Voltar aos atrativos
          </Link>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            {item.name}
          </h1>
          <p className="mt-2 max-w-2xl text-white/85">{item.shortDescription}</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="text-lg leading-relaxed text-graphite-muted">{item.description}</p>

        {(item.difficulty || item.distance) && (
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {item.difficulty && (
              <div className="rounded-2xl bg-white p-5 ring-1 ring-emerald/10">
                <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">
                  Dificuldade
                </p>
                <p className="mt-2 font-display text-xl font-bold">
                  {difficultyLabel[item.difficulty]}
                </p>
              </div>
            )}
            {item.distance && (
              <div className="rounded-2xl bg-white p-5 ring-1 ring-emerald/10">
                <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">
                  Distância
                </p>
                <p className="mt-2 font-display text-xl font-bold">{item.distance}</p>
              </div>
            )}
          </div>
        )}

        {item.whatToBring && item.whatToBring.length > 0 && (
          <div className="mt-8">
            <h2 className="font-display text-2xl font-bold">O que levar</h2>
            <ul className="mt-4 space-y-2">
              {item.whatToBring.map((thing) => (
                <li
                  key={thing}
                  className="rounded-xl bg-emerald-soft px-4 py-3 text-sm font-medium text-graphite"
                >
                  {thing}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
