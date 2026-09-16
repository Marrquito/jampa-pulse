import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, TrendingUp } from "lucide-react";
import coastImg from "@/assets/jampa-coast.jpg";
import { AwardCard, BusinessCard, CategoryCard, CTASection, SearchBar, SectionTitle } from "@/components/platform";
import { Button } from "@/components/ui/button";
import { awardYears, businesses, categories } from "@/lib/mock-data";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Melhores Jampa — Descubra João Pessoa" },
    { name: "description", content: "Descubra restaurantes, bares, serviços e experiências em destaque em João Pessoa." },
    { property: "og:title", content: "Melhores Jampa — Descubra João Pessoa" },
    { property: "og:description", content: "Lugares e negócios para viver João Pessoa o ano inteiro." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: HomePage,
});

function HomePage() {
  return <>
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-primary text-primary-foreground">
      <img src={coastImg} alt="Orla de João Pessoa ao amanhecer" width={1600} height={912} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-primary/10" />
      <div className="shell relative flex min-h-[calc(100svh-4rem)] items-center py-16"><div className="max-w-3xl animate-rise"><span className="inline-flex rounded-full border border-primary-foreground/25 bg-primary/35 px-3 py-1.5 text-xs font-bold backdrop-blur">Viva João Pessoa o ano inteiro</span><h1 className="mt-6 text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">Descubra o que está em alta em João Pessoa.</h1><p className="mt-5 max-w-2xl text-lg text-primary-foreground/80">Restaurantes, bares, lojas, serviços e experiências que estão fazendo sucesso pela cidade.</p><div className="mt-8 max-w-2xl"><SearchBar dark placeholder="Busque por restaurante, bar, academia, salão..." /></div><div className="mt-6 flex items-center gap-2 text-sm text-primary-foreground/70"><MapPin className="size-4" /> Feito para descobrir o melhor da cidade</div></div></div>
    </section>
    <section className="border-b border-border bg-card py-6"><div className="shell flex gap-3 overflow-x-auto pb-2">{categories.map(([label, icon]) => <CategoryCard key={label} label={label} icon={icon} />)}</div></section>
    <section className="section-space"><div className="shell"><SectionTitle eyebrow="Curadoria local" title="Destaques da semana" copy="Negócios com mais visibilidade na plataforma nesta semana." action={<Button asChild variant="outline"><Link to="/destaques">Ver ranking <ArrowRight /></Link></Button>} /><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{businesses.slice(0,4).map((b) => <BusinessCard key={b.name} business={b} />)}</div></div></section>
    <section className="section-space bg-secondary"><div className="shell"><SectionTitle eyebrow="Encontre seu próximo lugar" title="O que você está procurando?" /><div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">{categories.slice(0,5).map(([label, icon]) => <CategoryCard key={label} label={label} icon={icon} />)}</div></div></section>
    <section className="section-space"><div className="shell"><SectionTitle eyebrow="História e reconhecimento" title="Melhores do Ano" copy="Conheça os negócios que já fizeram história nas edições do Melhores do Ano João Pessoa." /><div className="grid grid-cols-2 gap-4 lg:grid-cols-4">{awardYears.map((year, i) => <AwardCard key={year} year={year} image={businesses.at(i)?.image ?? coastImg} />)}</div></div></section>
    <section className="section-space bg-primary text-primary-foreground"><div className="shell"><SectionTitle eyebrow="Agora na cidade" title="Em alta em João Pessoa" copy="Sinais de interesse e atividade recente — diferentes de premiação e visibilidade comercial." /><div className="grid gap-px overflow-hidden rounded-lg bg-primary-foreground/15 md:grid-cols-2">{businesses.slice(1,5).map((b) => <Link key={b.name} to="/negocio/restaurante-exemplo" className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 bg-primary p-5 transition-colors hover:bg-primary-foreground/5"><span className="grid size-10 place-items-center rounded-full bg-sea text-sea-foreground"><TrendingUp /></span><span className="min-w-0"><strong className="block truncate">{b.name}</strong><small className="text-primary-foreground/60">{b.category} · {b.neighborhood}</small></span><ArrowRight /></Link>)}</div></div></section>
    <CTASection />
  </>;
}