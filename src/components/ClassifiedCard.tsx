import type { Classified } from "@/data/classifieds";
import { categoryLabels } from "@/data/classifieds";

export function ClassifiedCard({ item }: { item: Classified }) {
  return (
    <article
      className={`flex gap-3 overflow-hidden rounded-xl bg-white p-3 ring-1 transition sm:gap-4 sm:p-4 ${
        item.featured
          ? "ring-terracotta/40 shadow-[0_0_0_1px_rgba(163,92,58,0.15)]"
          : "ring-emerald/8"
      }`}
    >
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg sm:h-28 sm:w-32">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
        {item.featured && (
          <span className="absolute left-1.5 top-1.5 rounded bg-terracotta px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
            Em Alta
          </span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-terracotta">
            {categoryLabels[item.category]}
          </span>
          <span className="text-[11px] text-graphite-muted">
            Publicado há {item.publishedHoursAgo}h
          </span>
        </div>
        <h3 className="mt-1 font-display text-base font-bold leading-snug text-graphite sm:text-lg">
          {item.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-graphite-muted">{item.description}</p>
        <div className="mt-2 flex items-center justify-between gap-2">
          <p className="text-sm font-semibold text-emerald">{item.price ?? "Sob consulta"}</p>
          <p className="text-xs text-graphite-muted">{item.author}</p>
        </div>
      </div>
    </article>
  );
}
