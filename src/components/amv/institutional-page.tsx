import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { institutionalPages } from "./site-shell";
import type { ReactNode } from "react";

export function institutionalHead(title: string, description: string) {
  return { meta: [
    { title: `${title} | AMV Conectar` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} | AMV Conectar` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] };
}

export function InstitutionalPage({ title, children }: { title: string; children: ReactNode }) {
  return <main className="overflow-hidden bg-background pb-20 pt-32 text-foreground sm:pb-28 sm:pt-40">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <Button asChild variant="ghost" className="mb-9 -ml-3 text-muted-foreground"><Link to="/"><ArrowLeft /> Início</Link></Button>
      <div className="border-b border-border pb-9"><p className="flex items-center gap-3 text-xs font-extrabold uppercase text-brand"><span className="h-px w-9 bg-brand-orange" />AMV — Agência de Marketing e Vendas</p><h1 className="mt-5 text-4xl font-extrabold text-brand-deep sm:text-6xl">{title}</h1></div>
      <div className="rise-in mt-10 max-w-5xl">{children}</div>
      <nav aria-label="Páginas institucionais" className="mt-16 grid gap-4 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
        {institutionalPages.map(({ label, to }) => <Link key={to} to={to} activeProps={{ className: "border-brand-orange text-brand-orange" }} className="flex min-h-14 items-center justify-between border-b border-border py-4 text-sm font-bold text-brand-deep hover:text-brand">{label}<ArrowUpRight className="size-4" /></Link>)}
      </nav>
    </div>
  </main>;
}