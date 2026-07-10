import type { Metadata } from "next";
import { establishments } from "@/data/establishments";

export const metadata: Metadata = {
  title: "Painel do Lojista",
  description: "Acompanhe visualizações, cliques no WhatsApp e metas do mês.",
};

export default function PainelPage() {
  const shop = establishments.find((item) => item.slug === "pousada-serra-azul")!;
  const clickPct = Math.min(100, Math.round((shop.clicks / shop.clickGoal) * 100));
  const viewPct = Math.min(100, Math.round((shop.views / shop.viewGoal) * 100));

  return (
    <div className="texture-noise pt-24">
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">
          Área restrita
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-graphite sm:text-5xl">
          Painel do Lojista
        </h1>
        <p className="mt-3 max-w-2xl text-base text-graphite-muted sm:text-lg">
          Demonstração do painel VIP — resultados do investimento em{" "}
          <strong className="text-graphite">{shop.name}</strong> neste mês.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 ring-1 ring-emerald/10">
            <p className="text-xs font-semibold uppercase tracking-wide text-graphite-muted">
              Plano
            </p>
            <p className="mt-2 font-display text-2xl font-bold text-emerald">Parceiro VIP</p>
          </div>
          <div className="rounded-2xl bg-white p-5 ring-1 ring-emerald/10">
            <p className="text-xs font-semibold uppercase tracking-wide text-graphite-muted">
              Visualizações
            </p>
            <p className="mt-2 font-display text-2xl font-bold">{shop.views}</p>
          </div>
          <div className="rounded-2xl bg-white p-5 ring-1 ring-emerald/10">
            <p className="text-xs font-semibold uppercase tracking-wide text-graphite-muted">
              Cliques WhatsApp
            </p>
            <p className="mt-2 font-display text-2xl font-bold">{shop.clicks}</p>
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <MetricCard
            title="Meta de cliques no botão de reserva"
            current={shop.clicks}
            goal={shop.clickGoal}
            percent={clickPct}
          />
          <MetricCard
            title="Meta de visualizações do perfil"
            current={shop.views}
            goal={shop.viewGoal}
            percent={viewPct}
          />
        </div>

        <div className="mt-8 rounded-2xl bg-graphite p-6 text-white sm:p-8">
          <h2 className="font-display text-2xl font-bold">Como funciona o VIP</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>A equipe do portal atualiza fotos, textos e comodidades.</li>
            <li>Botão de WhatsApp ativo e destaque nas recomendações da Sônia.</li>
            <li>Você só acompanha os resultados e atende os contatos.</li>
          </ul>
          <p className="mt-6 text-xs text-white/50">
            Em breve: login real com Supabase + cobrança mensal via Mercado Pago.
          </p>
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  title,
  current,
  goal,
  percent,
}: {
  title: string;
  current: number;
  goal: number;
  percent: number;
}) {
  return (
    <div className="rounded-2xl bg-white p-6 ring-1 ring-emerald/10">
      <div className="flex items-start justify-between gap-3">
        <h2 className="font-display text-lg font-bold text-graphite">{title}</h2>
        <span className="rounded-lg bg-emerald-soft px-2.5 py-1 text-sm font-bold text-emerald">
          {percent}%
        </span>
      </div>
      <p className="mt-2 text-sm text-graphite-muted">
        {current} de {goal} neste mês
      </p>
      <div className="mt-5 h-3 overflow-hidden rounded-full bg-ice-deep">
        <div
          className="h-full rounded-full bg-emerald transition-all duration-700"
          style={{ width: `${percent}%` }}
        />
      </div>
      <div className="mt-6 flex h-28 items-end gap-1.5">
        {[42, 55, 48, 70, 63, 80, 74, 88, 82, percent].map((value, index) => (
          <div
            key={index}
            className="flex-1 rounded-t-md bg-emerald/20"
            style={{ height: `${Math.max(18, value)}%` }}
          >
            <div
              className="w-full rounded-t-md bg-emerald"
              style={{ height: `${Math.max(12, value * 0.7)}%`, marginTop: "auto" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
