import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Info } from "lucide-react";
import { RankingItem, SectionTitle } from "@/components/platform";
import { Button } from "@/components/ui/button";
import { businesses } from "@/lib/mock-data";

export const Route = createFileRoute("/destaques")({ head: () => ({ meta: [
  { title: "Destaques em João Pessoa — Melhores Jampa" }, { name: "description", content: "Conheça negócios com visibilidade em destaque nesta semana em João Pessoa." },
  { property: "og:title", content: "Destaques em João Pessoa" }, { property: "og:description", content: "Negócios ganhando visibilidade na cidade." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: DestaquesPage });

const filters = ["Todos", "Restaurantes", "Bares", "Cafés", "Beleza", "Academias", "Lojas", "Serviços"];
function DestaquesPage() {
  const [period, setPeriod] = useState("Esta semana"); const [filter, setFilter] = useState("Todos");
  return <><section className="bg-primary py-16 text-primary-foreground sm:py-24"><div className="shell"><p className="text-sm font-bold text-award">Visibilidade comercial</p><h1 className="mt-3 text-5xl font-bold sm:text-6xl">Destaques</h1><p className="mt-4 max-w-2xl text-lg text-primary-foreground/70">Os negócios que estão ganhando visibilidade esta semana em João Pessoa.</p></div></section>
  <section className="section-space"><div className="shell"><div className="mb-8 flex flex-col gap-5 border-b border-border pb-8 lg:flex-row lg:items-center lg:justify-between"><div className="flex w-fit rounded-md bg-secondary p-1">{["Esta semana","Este mês"].map(p => <Button key={p} size="sm" variant={period === p ? "default" : "ghost"} onClick={() => setPeriod(p)}>{p}</Button>)}</div><div className="flex gap-2 overflow-x-auto pb-2">{filters.map(f => <Button key={f} size="sm" variant={filter === f ? "default" : "outline"} onClick={() => setFilter(f)}>{f}</Button>)}</div></div><SectionTitle eyebrow={period} title="Ranking de visibilidade" copy={`Exibindo ${filter.toLowerCase()} com presença em destaque no período selecionado.`} />{businesses.slice(0,5).map((b,i) => <RankingItem key={b.name} business={b} rank={i+1} />)}<div className="mt-12 grid gap-6 rounded-lg bg-secondary p-6 md:grid-cols-[auto_minmax(0,1fr)]"><Info className="size-6 text-sea" /><div><h2 className="text-xl font-bold">Visibilidade não é premiação</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Os destaques são uma forma de aumentar a visibilidade de negócios dentro da plataforma. Estar em destaque não significa necessariamente ser o vencedor de uma premiação.</p></div></div></div></section>
  <section className="border-t border-border bg-card"><div className="shell flex flex-col gap-5 py-14 sm:flex-row sm:items-center sm:justify-between"><h2 className="text-3xl font-bold">Quer colocar seu negócio em destaque?</h2><Button asChild size="lg"><Link to="/empresa">Conheça as opções para empresas <ArrowRight /></Link></Button></div></section></>;
}