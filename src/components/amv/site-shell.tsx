import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, ChevronRight, MapPin, Menu, MessageCircle, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/amv-logo.png.asset.json";

export const institutionalPages = [
  { label: "Quem Somos", to: "/quem-somos" },
  { label: "Missão", to: "/missao" },
  { label: "Visão", to: "/visao" },
  { label: "Valores", to: "/valores" },
  { label: "Projeto Integrador", to: "/projeto-integrador" },
] as const;

const homeSections = [["Início", "inicio"], ["Serviços", "servicos"], ["Diferenciais", "diferenciais"], ["Contato", "contato"]] as const;

export function WhatsAppLink({ children, className }: { children: ReactNode; className?: string }) {
  return <a href="https://wa.me/5598984833670" target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => {
    let preferred = window.matchMedia("(prefers-color-scheme: dark)").matches;
    try {
      const saved = localStorage.getItem("amv-theme");
      if (saved === "dark" || saved === "light") preferred = saved === "dark";
    } catch { /* Theme remains usable if storage is blocked. */ }
    setDark(preferred);
    document.documentElement.classList.toggle("dark", preferred);
  }, []);
  useEffect(() => { setMenuOpen(false); }, [pathname]);
  const toggleTheme = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      try { localStorage.setItem("amv-theme", next ? "dark" : "light"); } catch { /* Optional persistence. */ }
      return next;
    });
  };
  const sectionHref = (id: string) => pathname === "/" ? `#${id}` : `/#${id}`;
  return <>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-3 px-5 lg:px-8">
        <Link to="/" aria-label="AMV Conectar — início" className="shrink-0"><img src={logoAsset.url} alt="AMV — Conectando Marketing e Vendas com o Sucesso" width={1774} height={887} className="h-[72px] w-36 rounded-sm bg-logo-surface object-contain" /></Link>
        <nav aria-label="Navegação principal" className="ml-auto hidden items-center gap-4 xl:flex">
          <a href={sectionHref("inicio")} className="text-sm font-semibold text-ink/70 hover:text-brand">Início</a>
          {institutionalPages.map(({ label, to }) => <Link key={to} to={to} activeProps={{ className: "text-brand-orange" }} className="text-sm font-semibold text-ink/70 hover:text-brand">{label}</Link>)}
          {homeSections.slice(1).map(([label, id]) => <a key={id} href={sectionHref(id)} className="text-sm font-semibold text-ink/70 hover:text-brand">{label}</a>)}
        </nav>
        <div className="ml-auto flex shrink-0 items-center gap-2 xl:ml-2">
          <Button type="button" variant="outline" size="icon" className="size-11 touch-manipulation select-none" title={dark ? "Ativar modo claro" : "Ativar modo escuro"} aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"} aria-pressed={dark} onClick={toggleTheme}>{dark ? <Sun className="size-5" /> : <Moon className="size-5" />}</Button>
          <Button asChild variant="amv" className="hidden md:inline-flex"><WhatsAppLink>Fale conosco <MessageCircle /></WhatsAppLink></Button>
          <Button variant="ghost" size="icon" className="xl:hidden" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} aria-controls="amv-mobile-menu" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
      </div>
      {menuOpen && <nav id="amv-mobile-menu" aria-label="Navegação móvel" className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-border bg-background px-5 py-3 xl:hidden">
        <a href={sectionHref("inicio")} onClick={() => setMenuOpen(false)} className="flex min-h-11 items-center border-b border-border text-sm font-bold text-brand-deep">Início<ChevronRight className="ml-auto size-4 text-brand" /></a>
        {institutionalPages.map(({ label, to }) => <Link key={to} to={to} onClick={() => setMenuOpen(false)} activeProps={{ className: "text-brand-orange" }} className="flex min-h-11 items-center border-b border-border text-sm font-bold text-brand-deep">{label}<ChevronRight className="ml-auto size-4 text-brand" /></Link>)}
        {homeSections.slice(1).map(([label, id]) => <a key={id} href={sectionHref(id)} onClick={() => setMenuOpen(false)} className="flex min-h-11 items-center border-b border-border text-sm font-bold text-brand-deep">{label}<ChevronRight className="ml-auto size-4 text-brand" /></a>)}
        <button type="button" onClick={toggleTheme} aria-pressed={dark} className="flex min-h-11 w-full items-center border-b border-border text-sm font-bold text-brand-deep">{dark ? "Ativar modo claro" : "Ativar modo escuro"}{dark ? <Sun className="ml-auto size-4 text-brand" /> : <Moon className="ml-auto size-4 text-brand" />}</button>
        <Button asChild variant="amv" size="lg" className="my-3 w-full"><WhatsAppLink>Fale conosco <MessageCircle /></WhatsAppLink></Button>
      </nav>}
    </header>
    {children}
    <footer className="bg-brand-panel py-12">
      <div className="mx-auto grid max-w-7xl gap-9 px-5 md:grid-cols-[1fr_1fr] lg:px-8">
        <div><Link to="/" aria-label="AMV Conectar — início"><img src={logoAsset.url} alt="AMV — Conectando Marketing e Vendas com o Sucesso" width={1774} height={887} loading="lazy" className="h-32 w-64 max-w-full rounded-sm bg-logo-surface object-contain" /></Link><p className="mt-1 text-sm text-on-panel/70">Conectar com sucesso</p><Button asChild variant="amvLight" className="mt-6"><WhatsAppLink><MessageCircle /> WhatsApp <ArrowRight /></WhatsAppLink></Button></div>
        <address className="flex gap-3 text-sm not-italic leading-7 text-on-panel/80"><MapPin className="mt-1 size-5 shrink-0 text-brand-orange" /><span>Rua Edvaldo Moraes, nº 934<br />(ou Travessa João Mariano, s/n)<br />Bairro Antigo Aeroporto<br />Pinheiro - MA<br />CEP 65200-000</span></address>
        <nav aria-label="Navegação do rodapé" className="flex flex-wrap gap-x-6 gap-y-3 md:col-span-2">
          {homeSections.map(([label, id]) => <a key={id} href={sectionHref(id)} className="text-sm font-semibold text-on-panel/75 hover:text-on-panel">{label}</a>)}
          {institutionalPages.map(({ label, to }) => <Link key={to} to={to} className="text-sm font-semibold text-on-panel/75 hover:text-on-panel">{label}</Link>)}
        </nav>
        <div className="border-t border-on-panel/15 pt-7 text-xs text-on-panel/60 md:col-span-2"><p>© 2026 AMV Conectar. Todos os direitos reservados.</p><p className="mt-5 text-right text-[10px] text-on-panel/40">Vizza®</p></div>
      </div>
    </footer>
  </>;
}