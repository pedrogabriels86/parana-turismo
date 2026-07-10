import Link from "next/link";
import type { Establishment } from "@/data/establishments";

const categoryLabel = {
  pousada: "Pousada",
  hotel: "Hotel",
  restaurante: "Restaurante",
} as const;

export function EstablishmentCard({ item }: { item: Establishment }) {
  const isVip = item.plan === "vip";

  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(42,46,44,0.06)] ring-1 ring-emerald/5 transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(42,46,44,0.1)]">
      <Link href={`/catalogo/${item.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute left-3 top-3 flex gap-2">
            <span className="rounded-md bg-white/95 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-graphite">
              {categoryLabel[item.category]}
            </span>
            {isVip && (
              <span className="rounded-md bg-vip px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-graphite">
                VIP
              </span>
            )}
          </div>
        </div>
      </Link>

      <div className="space-y-3 p-4 sm:p-5">
        <div>
          <Link href={`/catalogo/${item.slug}`}>
            <h3 className="font-display text-xl font-bold text-graphite transition group-hover:text-emerald">
              {item.name}
            </h3>
          </Link>
          <p className="mt-1 text-sm leading-relaxed text-graphite-muted">
            {isVip ? item.shortDescription : item.address}
          </p>
        </div>

        {isVip ? (
          <a
            href={`https://wa.me/${item.whatsapp}?text=${encodeURIComponent(`Olá! Vi o ${item.name} no Paranã Turismo e gostaria de reservar.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-full items-center justify-center rounded-xl bg-emerald text-sm font-semibold text-white transition hover:bg-emerald-dark"
          >
            Reservar via WhatsApp
          </a>
        ) : (
          <p className="rounded-xl bg-ice px-3 py-3 text-center text-xs text-graphite-muted">
            Plano Presença — nome e endereço. Torne-se VIP para galeria e WhatsApp.
          </p>
        )}
      </div>
    </article>
  );
}
