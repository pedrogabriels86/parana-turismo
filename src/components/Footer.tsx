import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-emerald/10 bg-graphite text-ice">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-bold tracking-tight">Paranã Turismo</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ice/70">
            O portal oficial de experiências, hospedagem e oportunidades nas
            Serras Gerais do Tocantins.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sand">
            Explorar
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ice/80">
            <li>
              <Link href="/catalogo" className="hover:text-white">
                Catálogo turístico
              </Link>
            </li>
            <li>
              <Link href="/classificados" className="hover:text-white">
                Classificados
              </Link>
            </li>
            <li>
              <Link href="/atrativos" className="hover:text-white">
                Atrativos e roteiros
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sand">
            Parceiros
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ice/80">
            <li>
              <Link href="/painel" className="hover:text-white">
                Painel do lojista
              </Link>
            </li>
            <li>
              <a href="mailto:contato@paranaturismo.com.br" className="hover:text-white">
                contato@paranaturismo.com.br
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-5 sm:flex-row sm:px-6">
          <p className="text-xs text-ice/50">
            © {new Date().getFullYear()} Paranã Turismo — Tocantins
          </p>

          <a
            href="https://www.spavdigital.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl px-2 py-1.5 transition hover:bg-white/5"
            aria-label="Desenvolvido por SPAV Digital — www.spavdigital.com.br"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-ice/55 group-hover:text-ice/80">
              Desenvolvido por
            </span>
            <Image
              src="/brand/spav-digital.png"
              alt="SPAV Digital"
              width={140}
              height={48}
              className="h-9 w-auto rounded-md object-contain sm:h-10"
            />
            <span className="hidden text-xs text-ice/60 group-hover:text-ice/90 sm:inline">
              www.spavdigital.com.br
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
