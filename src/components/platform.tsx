import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, Coffee, Dumbbell, Flame, Martini, Search, ShoppingBag, Sparkles, Utensils, BedDouble, PartyPopper, Wrench, MapPin, TrendingUp } from "lucide-react";
import { latestAward, type Business } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const icons = { Utensils, Martini, Coffee, Dumbbell, Sparkles, ShoppingBag, BedDouble, PartyPopper, Wrench };

export function SectionTitle({ eyebrow, title, copy, action }: { eyebrow?: string; title: string; copy?: string; action?: React.ReactNode }) {
  return <div className="mb-8 grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end"><div className="min-w-0">{eyebrow && <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.16em] text-highlight">{eyebrow}</p>}<h2 className="text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>{copy && <p className="mt-3 max-w-2xl text-muted-foreground">{copy}</p>}</div>{action}</div>;
}

export function SearchBar({ placeholder = "O que você está procurando?", dark = false }: { placeholder?: string; dark?: boolean }) {
  return <form className={cn("grid grid-cols-[minmax(0,1fr)_auto] items-center rounded-lg p-2 shadow-xl", dark ? "bg-background" : "border border-border bg-card")} onSubmit={(e) => e.preventDefault()}><div className="flex min-w-0 items-center"><Search className="ml-3 size-5 shrink-0 text-muted-foreground" /><Input aria-label="Buscar" placeholder={placeholder} className="h-12 border-0 shadow-none focus-visible:ring-0" /></div><Button size="lg" aria-label="Buscar"><span className="hidden sm:inline">Buscar</span><Search className="sm:hidden" /></Button></form>;
}

export function AppBadge({ type }: { type: string }) {
  const award = type.includes("Melhor") || type.includes("Premiado");
  const trend = type.includes("alta") || type.includes("Subindo") || type.includes("Novo");
  return <span className={cn("inline-flex w-fit items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold", award ? "bg-award text-award-foreground" : trend ? "bg-sea text-sea-foreground" : "bg-highlight text-highlight-foreground")}>{award ? <Award className="size-3" /> : trend ? <TrendingUp className="size-3" /> : <Flame className="size-3" />}{type}</span>;
}

export function BadgeRow({ business, className }: { business: Business; className?: string }) {
  const year = latestAward(business);
  const trend = business.badges.filter((b) => b !== "Em destaque");
  const featured = business.badges.includes("Em destaque");
  return <div className={cn("flex flex-wrap gap-1.5", className)}>
    {year && <AppBadge type={`Melhor do Ano ${year}`} />}
    {trend.map((b) => <AppBadge key={b} type={b} />)}
    {featured && <AppBadge type="Em destaque" />}
  </div>;
}

export function BusinessCard({ business, compact = false, rank }: { business: Business; compact?: boolean; rank?: number }) {
  return <article className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"><div className={cn("relative overflow-hidden", compact ? "aspect-[16/10]" : "aspect-[4/3]")}><img src={business.image} alt={`Ambiente ilustrativo de ${business.name}`} loading="lazy" width={1408} height={1056} className="h-full w-full object-cover image-lift" />{rank && <span className="absolute left-4 top-4 grid size-11 place-items-center rounded-full bg-highlight font-display text-lg font-bold text-highlight-foreground shadow-lg">{String(rank).padStart(2, "0")}</span>}</div><div className="p-5"><BadgeRow business={business} /><h3 className="mt-3 text-2xl font-bold">{business.name}</h3><p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground"><span>{business.category}</span><span>•</span><MapPin className="size-3.5" />{business.neighborhood}</p><Button asChild variant="link" className="mt-4 h-auto p-0"><Link to="/negocio/restaurante-exemplo">Ver negócio <ArrowRight /></Link></Button></div></article>;
}

export function CategoryCard({ label, icon, selected, onClick }: { label: string; icon: keyof typeof icons; selected?: boolean; onClick?: () => void }) {
  const Icon = icons[icon];
  return <Button variant={selected ? "default" : "outline"} onClick={onClick} className="h-auto min-w-32 flex-col items-start gap-4 p-5 text-left shadow-none"><span className={cn("grid size-10 place-items-center rounded-full", selected ? "bg-primary-foreground/10" : "bg-secondary")}><Icon className="size-5" /></span><span>{label}</span></Button>;
}

export function RankingItem({ business, rank }: { business: Business; rank: number }) {
  return <article className="group grid grid-cols-[auto_72px_minmax(0,1fr)] items-center gap-3 border-b border-border py-5 animate-rise sm:grid-cols-[64px_112px_minmax(0,1fr)_auto] sm:gap-6"><span className="font-display text-3xl font-bold text-muted-foreground/50">{String(rank).padStart(2, "0")}</span><img src={business.image} alt="" loading="lazy" width={1408} height={1056} className="aspect-square w-full rounded-md object-cover" /><div className="min-w-0"><h3 className="truncate text-xl font-bold">{business.name}</h3><p className="truncate text-sm text-muted-foreground">{business.category} · {business.neighborhood}</p><BadgeRow business={business} className="mt-2 sm:hidden" /></div><BadgeRow business={business} className="hidden justify-end sm:flex" /></article>;
}

export function AwardCard({ year, image }: { year: number; image: string }) {
  return <Link to="/melhores-do-ano" className="group relative block aspect-[4/3] overflow-hidden rounded-lg"><img src={image} alt={`Edição fictícia de ${year}`} loading="lazy" width={1408} height={1056} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /><span className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/10 to-transparent" /><span className="absolute inset-x-5 bottom-5 text-primary-foreground"><span className="font-display text-4xl font-bold">{year}</span><span className="mt-2 flex items-center gap-2 text-sm font-bold">Ver vencedores <ArrowRight className="size-4" /></span></span></Link>;
}

export function CTASection() {
  return <section className="bg-highlight text-highlight-foreground"><div className="shell grid gap-8 py-16 md:grid-cols-[minmax(0,1fr)_auto] md:items-center"><div><p className="text-xs font-extrabold uppercase tracking-[0.16em] opacity-80">Para negócios locais</p><h2 className="mt-2 text-4xl font-bold">Seu negócio merece ser descoberto.</h2><p className="mt-3 max-w-2xl opacity-80">Coloque sua empresa em destaque e alcance pessoas que estão procurando o que você oferece.</p></div><Button asChild size="lg" variant="secondary"><Link to="/empresa">Quero colocar meu negócio em destaque <ArrowRight /></Link></Button></div></section>;
}