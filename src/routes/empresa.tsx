import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Award, Eye, Flame, MapPinned, Send, Store } from "lucide-react";
import coastImg from "@/assets/jampa-coast.jpg";
import { SectionTitle } from "@/components/platform";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/empresa")({ head: () => ({ meta: [
  { title: "Para Empresas — Melhores Jampa" }, { name: "description", content: "Apresente seu negócio a pessoas que procuram produtos, serviços e experiências em João Pessoa." },
  { property: "og:title", content: "Seu negócio merece ser descoberto" }, { property: "og:description", content: "Conheça a proposta da Melhores Jampa para negócios locais." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: EmpresaPage });

const benefits = [
  [Flame, "Mais visibilidade", "Coloque sua empresa em posições de destaque dentro da plataforma."],
  [Eye, "Mais pessoas descobrindo", "Seja encontrado por consumidores que já estão procurando produtos e serviços."],
  [MapPinned, "Presença local", "Tenha uma página própria para apresentar seu negócio."],
  [Award, "Reconhecimento", "Faça parte do ecossistema do Melhores do Ano João Pessoa."],
] as const;

function InterestDialog({ trigger }: { trigger: React.ReactNode }) {
  const [sent,setSent] = useState(false);
  return <Dialog><DialogTrigger asChild>{trigger}</DialogTrigger><DialogContent className="max-w-md rounded-lg"><DialogHeader><DialogTitle className="font-display text-3xl">Vamos conversar?</DialogTitle><DialogDescription>Deixe seus dados para simular o fluxo de interesse comercial.</DialogDescription></DialogHeader>{sent ? <div className="rounded-lg bg-secondary p-6 text-center"><span className="mx-auto grid size-12 place-items-center rounded-full bg-sea text-sea-foreground"><Send /></span><h3 className="mt-4 text-xl font-bold">Interesse registrado</h3><p className="mt-2 text-sm text-muted-foreground">Demonstração concluída. Nenhum dado foi enviado.</p></div> : <form className="mt-2 grid gap-4" onSubmit={(e) => {e.preventDefault(); setSent(true)}}><Input required placeholder="Nome" aria-label="Nome" className="h-11"/><Input required placeholder="Empresa" aria-label="Empresa" className="h-11"/><Input required placeholder="WhatsApp" aria-label="WhatsApp" className="h-11"/><Input required type="email" placeholder="E-mail" aria-label="E-mail" className="h-11"/><Button size="lg" type="submit">Enviar interesse <ArrowRight /></Button><p className="text-center text-xs text-muted-foreground">Formulário fictício. Nenhum dado será armazenado.</p></form>}</DialogContent></Dialog>;
}

function EmpresaPage() {
  return <><section className="relative min-h-[78svh] overflow-hidden bg-primary text-primary-foreground"><img src={coastImg} alt="Orla de João Pessoa" width={1600} height={912} className="absolute inset-0 h-full w-full object-cover opacity-35"/><div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/20"/><div className="shell relative flex min-h-[78svh] items-center py-16"><div className="max-w-3xl"><span className="inline-flex items-center gap-2 rounded-full bg-highlight px-3 py-1.5 text-xs font-bold text-highlight-foreground"><Store className="size-3.5"/> Para negócios de João Pessoa</span><h1 className="mt-6 text-5xl font-bold leading-tight sm:text-7xl">Seu negócio merece ser descoberto.</h1><p className="mt-5 max-w-2xl text-lg text-primary-foreground/75">Conecte sua empresa a pessoas que estão procurando exatamente o que você oferece.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><InterestDialog trigger={<Button size="lg" variant="secondary">Quero colocar meu negócio em destaque <ArrowRight /></Button>} /><Button asChild size="lg" variant="outline" className="border-primary-foreground/25 bg-primary/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><Link to="/descobrir">Conhecer a plataforma</Link></Button></div></div></div></section>
  <section className="section-space"><div className="shell"><SectionTitle eyebrow="Uma vitrine ativa o ano inteiro" title="Por que participar?" /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{benefits.map(([Icon,title,copy]) => <article key={title} className="rounded-lg border border-border bg-card p-6 shadow-sm"><span className="grid size-11 place-items-center rounded-full bg-secondary text-highlight"><Icon /></span><h2 className="mt-5 text-2xl font-bold">{title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p></article>)}</div></div></section>
  <section className="section-space bg-secondary"><div className="shell"><SectionTitle eyebrow="Simples e direto" title="Como funciona" /><ol className="grid gap-px overflow-hidden rounded-lg bg-border md:grid-cols-4">{["Cadastre seu negócio","Escolha onde quer aparecer","Ganhe visibilidade","Conecte-se com novos clientes"].map((step,i) => <li key={step} className="bg-card p-7"><span className="font-display text-4xl font-bold text-highlight">{String(i+1).padStart(2,"0")}</span><h2 className="mt-7 text-xl font-bold">{step}</h2></li>)}</ol><div className="mt-10 text-center"><InterestDialog trigger={<Button size="lg">Tenho interesse <ArrowRight /></Button>} /><p className="mt-3 text-xs text-muted-foreground">Sem checkout ou contratação real neste protótipo.</p></div></div></section></>;
}