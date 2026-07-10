import type { Metadata } from "next";
import { EstablishmentCard } from "@/components/EstablishmentCard";
import { establishments } from "@/data/establishments";

export const metadata: Metadata = {
  title: "Catálogo Turístico",
  description: "Pousadas, hotéis e restaurantes de Paranã — guia oficial premium.",
};

export default function CatalogoPage() {
  const vip = establishments.filter((item) => item.plan === "vip");
  const free = establishments.filter((item) => item.plan === "free");

  return (
    <div className="texture-noise pt-24">
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">
          Guia oficial
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-graphite sm:text-5xl">
          Catálogo Turístico
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-graphite-muted sm:text-lg">
          Estabelecimentos consolidados de Paranã. Parceiros VIP ganham galeria,
          WhatsApp direto e destaque nas recomendações da Sônia.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {vip.map((item) => (
            <EstablishmentCard key={item.id} item={item} />
          ))}
        </div>

        {free.length > 0 && (
          <div className="mt-14">
            <h2 className="font-display text-2xl font-bold text-graphite">
              Plano Presença
            </h2>
            <p className="mt-2 text-sm text-graphite-muted">
              Listagem gratuita com nome e endereço.
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {free.map((item) => (
                <EstablishmentCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
