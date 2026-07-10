import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { establishments, getEstablishment } from "@/data/establishments";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return establishments.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getEstablishment(slug);
  if (!item) return { title: "Estabelecimento" };
  return { title: item.name, description: item.shortDescription };
}

export default async function EstablishmentPage({ params }: Props) {
  const { slug } = await params;
  const item = getEstablishment(slug);
  if (!item) notFound();

  const isVip = item.plan === "vip";

  return (
    <div className="pt-16">
      <div className="relative h-[48vh] min-h-[280px] w-full overflow-hidden sm:h-[56vh]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 via-graphite/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 pb-8 sm:px-6">
          <Link href="/catalogo" className="text-sm font-medium text-white/80 hover:text-white">
            ← Voltar ao catálogo
          </Link>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            {item.name}
          </h1>
          <p className="mt-2 text-white/85">{item.address}</p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <p className="text-base leading-relaxed text-graphite-muted sm:text-lg">
            {item.description}
          </p>

          {isVip && item.amenities.length > 0 && (
            <div className="mt-8">
              <h2 className="font-display text-xl font-bold">Comodidades</h2>
              <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {item.amenities.map((amenity) => (
                  <li
                    key={amenity}
                    className="rounded-xl bg-white px-3 py-3 text-sm font-medium text-graphite ring-1 ring-emerald/10"
                  >
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {isVip && item.gallery.length > 1 && (
            <div className="mt-10">
              <h2 className="font-display text-xl font-bold">Galeria</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {item.gallery.map((photo) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={photo}
                    src={photo}
                    alt=""
                    className="aspect-[4/3] w-full rounded-xl object-cover"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="h-fit rounded-2xl bg-white p-5 shadow-sm ring-1 ring-emerald/10 sm:p-6">
          {isVip ? (
            <>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-vip">
                Parceiro VIP
              </p>
              <p className="mt-2 text-sm text-graphite-muted">
                Avaliação {item.rating.toFixed(1)} · Reserva direta
              </p>
              <a
                href={`https://wa.me/${item.whatsapp}?text=${encodeURIComponent(`Olá! Vi o ${item.name} no Paranã Turismo e gostaria de reservar.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex h-12 items-center justify-center rounded-xl bg-emerald text-sm font-semibold text-white hover:bg-emerald-dark"
              >
                Reservar via WhatsApp
              </a>
              <div className="mt-6 overflow-hidden rounded-xl bg-ice-deep">
                <iframe
                  title={`Mapa de ${item.name}`}
                  className="h-48 w-full border-0 grayscale-[20%]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(item.address)}&z=14&output=embed`}
                />
              </div>
            </>
          ) : (
            <>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-graphite-muted">
                Plano Presença
              </p>
              <p className="mt-3 text-sm leading-relaxed text-graphite-muted">
                Este estabelecimento aparece apenas com nome e endereço. Assine o
                Plano Parceiro VIP para galeria, WhatsApp e destaque na Sônia.
              </p>
              <Link
                href="/painel"
                className="mt-5 flex h-12 items-center justify-center rounded-xl bg-graphite text-sm font-semibold text-white"
              >
                Quero ser VIP
              </Link>
            </>
          )}
        </aside>
      </div>
    </div>
  );
}
