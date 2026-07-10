"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Início" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/classificados", label: "Classificados" },
  { href: "/atrativos", label: "Atrativos" },
  { href: "/painel", label: "Painel" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = !isHome || scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-emerald/10 bg-ice/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold tracking-tight transition ${
              solid
                ? "bg-emerald text-white"
                : "bg-white/15 text-white ring-1 ring-white/30 backdrop-blur"
            }`}
          >
            Pã
          </span>
          <span className="leading-tight">
            <span
              className={`block font-display text-base font-bold tracking-tight sm:text-lg ${
                solid ? "text-graphite" : "text-white"
              }`}
            >
              Paranã
            </span>
            <span
              className={`block text-[11px] font-medium uppercase tracking-[0.14em] ${
                solid ? "text-terracotta" : "text-white/75"
              }`}
            >
              Turismo
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  solid
                    ? active
                      ? "bg-emerald-soft text-emerald"
                      : "text-graphite-muted hover:bg-ice-deep hover:text-graphite"
                    : active
                      ? "bg-white/15 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className={`flex h-10 w-10 items-center justify-center rounded-lg md:hidden ${
            solid ? "text-graphite" : "text-white"
          }`}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full rounded transition ${solid ? "bg-graphite" : "bg-white"} ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-full rounded transition ${solid ? "bg-graphite" : "bg-white"} ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-full rounded transition ${solid ? "bg-graphite" : "bg-white"} ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="animate-float-in border-t border-emerald/10 bg-ice px-4 py-3 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-lg px-3 py-3 text-base font-medium text-graphite hover:bg-emerald-soft hover:text-emerald"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
