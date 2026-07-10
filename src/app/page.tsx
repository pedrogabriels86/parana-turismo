import Link from "next/link";
import { EstablishmentCard } from "@/components/EstablishmentCard";
import { getVipEstablishments } from "@/data/establishments";

const shortcuts = [
  {
    href: "/atrativos",
    title: "Atrativos Naturais",
    description: "Cachoeiras, serras e trilhas",
    tone: "bg-emerald text-white",
  },
  {
    href: "/catalogo",
    title: "Onde Comer e Dormir",
    description: "Catálogo oficial premium",
    tone: "bg-white text-graphite ring-1 ring-emerald/10",
  },
  {
    href: "/classificados",
    title: "Experiências Locais",
    description: "Classificados e autônomos",
    tone: "bg-terracotta text-white",
  },
  {
    href: "/atrativos#historia",
    title: "História e Cultura",
    description: "1904, Calunga e memória",
    tone: "bg-graphite text-white",
  },
];

export default function HomePage() {
  const featured = getVipEstablishments().slice(0, 3);

  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=2000&q=80"
          alt="Paisagem das Serras Gerais em Paranã"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-20 pt-28 sm:px-6">
          <p className="animate-fade-up font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Paranã
          </p>
          <h1 className="animate-fade-up-delay mt-4 max-w-xl font-display text-2xl font-semibold leading-tight text-white/95 sm:text-3xl md:text-4xl">
            Serras Gerais, poços esmeralda e hospitalidade tocantinense.
          </h1>
          <p className="animate-fade-up-delay-2 mt-4 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
            Encontre atrativos, hospedagem, sabores e experiências locais em um
            só lugar.
          </p>

          <form
            action="/catalogo"
            className="animate-fade-up-delay-2 mt-8 w-full max-w-xl"
          >
            <label htmlFor="busca" className="sr-only">
              O que você procura em Paranã hoje?
            </label>
            <div className="flex overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/25 ring-1 ring-black/5">
              <input
                id="busca"
                name="q"
                placeholder="O que você procura em Paranã hoje?"
                className="min-w-0 flex-1 bg-transparent px-4 py-4 text-sm text-graphite outline-none placeholder:text-graphite-muted sm:px-5 sm:text-base"
              />
              <button
                type="submit"
                className="bg-emerald px-5 text-sm font-semibold text-white transition hover:bg-emerald-dark sm:px-6"
              >
                Buscar
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="texture-noise mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {shortcuts.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-2xl p-5 transition hover:-translate-y-0.5 hover:shadow-lg ${item.tone}`}
            >
              <h2 className="font-display text-lg font-bold">{item.title}</h2>
              <p className="mt-1 text-sm opacity-80">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">
              Guia oficial
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-graphite sm:text-4xl">
              Catálogo em destaque
            </h2>
            <p className="mt-2 max-w-xl text-graphite-muted">
              Estabelecimentos Parceiros VIP com reserva direta no WhatsApp.
            </p>
          </div>
          <Link
            href="/catalogo"
            className="hidden text-sm font-semibold text-emerald hover:text-emerald-dark sm:inline"
          >
            Ver catálogo →
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
            <EstablishmentCard key={item.id} item={item} />
          ))}
        </div>

        <Link
          href="/catalogo"
          className="mt-6 flex h-12 items-center justify-center rounded-xl bg-emerald text-sm font-semibold text-white sm:hidden"
        >
          Ver catálogo completo
        </Link>
      </section>
    </>
  );
}
