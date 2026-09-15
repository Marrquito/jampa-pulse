import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import coastImg from "@/assets/jampa-coast.jpg";
import { BusinessCard, CategoryCard, SearchBar, SectionTitle } from "@/components/platform";
import { Button } from "@/components/ui/button";
import { businesses, categories, neighborhoods } from "@/lib/mock-data";

export const Route = createFileRoute("/descobrir")({ head: () => ({ meta: [
  { title: "Descobrir lugares em João Pessoa — Melhores Jampa" }, { name: "description", content: "Encontre restaurantes, bares, academias, beleza, lojas e serviços em João Pessoa." },
  { property: "og:title", content: "Descobrir lugares em João Pessoa" }, { property: "og:description", content: "Seu guia para descobrir experiências na cidade." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: DescobrirPage });

function DescobrirPage() {
  const [category,setCategory] = useState("Todos"); const [bairro,setBairro] = useState("Toda João Pessoa");
  return <><section className="relative overflow-hidden bg-primary py-16 text-primary-foreground sm:py-24"><img src={coastImg} alt="Litoral de João Pessoa" width={1600} height={912} className="absolute inset-0 h-full w-full object-cover opacity-30" /><div className="absolute inset-0 bg-primary/65"/><div className="shell relative"><h1 className="text-5xl font-bold sm:text-6xl">Descobrir</h1><p className="mt-4 text-lg text-primary-foreground/75">Encontre lugares, negócios e serviços em João Pessoa.</p><div className="mt-8 max-w-3xl"><SearchBar dark /></div></div></section>
  <section className="border-b border-border bg-card py-4"><div className="shell flex gap-2 overflow-x-auto"><Button variant="outline"><SlidersHorizontal /> Filtros</Button>{["Categoria","Bairro","Faixa de preço","Aberto agora"].map(x => <Button key={x} variant="outline">{x}</Button>)}</div></section>
  <section className="section-space"><div className="shell"><SectionTitle eyebrow="Atalhos" title="Mais procurados" /><div className="flex gap-3 overflow-x-auto pb-3">{categories.slice(0,8).map(([label,icon]) => <CategoryCard key={label} label={label} icon={icon} selected={category === label} onClick={() => setCategory(label)} />)}</div></div></section>
  <section className="section-space bg-secondary"><div className="shell"><SectionTitle eyebrow={`${category} · ${bairro}`} title="Em alta" copy="Seleções demonstrativas que mudam visualmente conforme seus filtros." /><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{businesses.slice(0,4).map(b => <BusinessCard key={b.name} business={b} compact />)}</div></div></section>
  <section className="section-space"><div className="shell"><SectionTitle eyebrow="De bairro em bairro" title="Explore por bairro" /><div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{neighborhoods.map((n) => <Button key={n} variant={bairro === n ? "default" : "outline"} onClick={() => setBairro(n)} className="h-24 justify-start p-5 text-left"><span>{n}</span></Button>)}</div></div></section></>;
}