import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  ["Início", "/"], ["Destaques", "/destaques"], ["Descobrir", "/descobrir"], ["Melhores do Ano", "/melhores-do-ano"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="shell grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:h-18 lg:grid-cols-[auto_1fr_auto]">
        <Link to="/" className="flex min-w-0 items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-award text-award-foreground">✦</span>
          <span className="truncate font-display text-xl font-bold">Melhores Jampa</span>
        </Link>
        <nav className="hidden items-center justify-center gap-7 lg:flex" aria-label="Navegação principal">
          {nav.map(([label, to]) => <Link key={to} to={to} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>{label}</Link>)}
        </nav>
        <Button asChild className="hidden lg:inline-flex"><Link to="/empresa">Para empresas</Link></Button>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <div className="border-t border-border bg-background px-4 py-5 lg:hidden"><nav className="grid gap-1">{nav.map(([label, to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 font-semibold hover:bg-muted">{label}</Link>)}<Button asChild className="mt-3"><Link to="/empresa" onClick={() => setOpen(false)}>Para empresas</Link></Button></nav></div>}
    </header>
  );
}

export function SiteFooter() {
  return <footer className="border-t border-border bg-primary text-primary-foreground"><div className="shell grid gap-8 py-10 md:grid-cols-[1fr_auto] md:items-end"><div><div className="font-display text-2xl font-bold">Melhores Jampa</div><p className="mt-2 max-w-md text-sm text-primary-foreground/70">Descubra os lugares, negócios e experiências em destaque em João Pessoa.</p></div><div className="flex flex-col gap-3 text-sm md:items-end"><span className="w-fit rounded-full border border-primary-foreground/20 px-3 py-1">Protótipo — conceito inicial</span><span className="text-primary-foreground/60">Todos os negócios e reconhecimentos são fictícios.</span></div></div></footer>;
}