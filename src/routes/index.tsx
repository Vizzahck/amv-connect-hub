import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  BarChart3,
  ChevronRight,
  Lightbulb,
  Mail,
  Menu,
  Megaphone,
  MessageCircle,
  PenTool,
  Share2,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/amv-conectar-logo.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AMV Conectar | Marketing que conecta" },
      { name: "description", content: "Estratégia, criatividade e comunicação para transformar conexões em oportunidades." },
      { property: "og:title", content: "AMV Conectar | Marketing que conecta" },
      { property: "og:description", content: "Conectamos marcas a pessoas e ideias a resultados." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = [
  ["Início", "inicio"], ["Sobre nós", "sobre"], ["Serviços", "servicos"],
  ["Diferenciais", "diferenciais"], ["Contato", "contato"],
] as const;

const services = [
  { icon: Target, title: "Estratégia de Marketing", text: "Planejamento e direcionamento para fortalecer a presença da marca." },
  { icon: BarChart3, title: "Marketing Digital", text: "Estratégias para ampliar presença, alcance e relacionamento no ambiente digital." },
  { icon: MessageCircle, title: "Conteúdo e Comunicação", text: "Criação de conteúdos que aproximam marcas e públicos." },
  { icon: PenTool, title: "Branding", text: "Construção de identidade e posicionamento de marca." },
  { icon: Share2, title: "Redes Sociais", text: "Planejamento e estratégias para presença consistente nas redes." },
  { icon: Megaphone, title: "Campanhas", text: "Desenvolvimento de campanhas focadas em comunicação e resultados." },
];

const pillars = [
  { icon: Target, title: "Estratégia", text: "Decisões orientadas por objetivos." },
  { icon: Lightbulb, title: "Criatividade", text: "Ideias que tornam marcas memoráveis." },
  { icon: Users, title: "Conexão", text: "Comunicação que aproxima marcas e pessoas." },
  { icon: BarChart3, title: "Resultados", text: "Ações pensadas para gerar valor." },
];

const steps = [
  ["01", "Entender", "Conhecer o negócio, público e objetivos."],
  ["02", "Planejar", "Definir estratégias e direcionamentos."],
  ["03", "Criar", "Transformar estratégias em ideias e campanhas."],
  ["04", "Conectar", "Levar a comunicação até o público certo."],
  ["05", "Evoluir", "Analisar resultados e aprimorar as estratégias."],
];

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#inicio" aria-label="AMV Conectar — início" className="block shrink-0">
      <img src={logoAsset.url} alt="AMV Conectar — Conectar com sucesso" className={compact ? "h-11 w-auto" : "h-14 w-auto sm:h-16"} />
    </a>
  );
}

function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return (
    <div className="max-w-2xl">
      <p className={light ? "text-xs font-extrabold uppercase text-brand-soft" : "text-xs font-extrabold uppercase text-brand"}>{eyebrow}</p>
      <h2 className={light ? "mt-3 text-3xl font-extrabold text-primary-foreground sm:text-5xl" : "mt-3 text-3xl font-extrabold text-brand-deep sm:text-5xl"}>{title}</h2>
      {text && <p className={light ? "mt-5 max-w-xl text-base leading-8 text-primary-foreground/70" : "mt-5 max-w-xl text-base leading-8 text-muted-foreground"}>{text}</p>}
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) return;
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-md">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:flex lg:px-8">
          <Logo compact />
          <nav aria-label="Navegação principal" className="ml-auto hidden items-center gap-7 lg:flex">
            {navItems.map(([label, id]) => <a key={id} href={`#${id}`} className="text-sm font-semibold text-ink/70 transition-colors hover:text-brand">{label}</a>)}
          </nav>
          <Button asChild variant="amv" className="ml-5 hidden lg:inline-flex"><a href="#contato">Fale conosco <ArrowRight /></a></Button>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav aria-label="Navegação móvel" className="border-t border-border bg-background px-5 py-5 lg:hidden">{navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="flex min-h-12 items-center border-b border-border text-base font-bold text-brand-deep">{label}<ChevronRight className="ml-auto size-4 text-brand" /></a>)}<Button asChild variant="amv" size="lg" className="mt-5 w-full"><a href="#contato" onClick={() => setMenuOpen(false)}>Fale conosco</a></Button></nav>}
      </header>

      <section id="inicio" className="relative flex min-h-[92vh] scroll-mt-20 items-center pt-24">
        <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden="true"><svg className="h-full w-full" viewBox="0 0 1440 820" fill="none"><path d="M-80 650C220 650 257 510 481 524C669 536 703 660 897 567C1066 486 1132 258 1482 192" stroke="currentColor" className="route-draw text-brand-soft" strokeWidth="2"/><circle cx="481" cy="524" r="5" className="fill-brand"/><circle cx="897" cy="567" r="5" className="fill-brand"/></svg></div>
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-14 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:py-20">
          <div className="rise-in max-w-3xl">
            <p className="mb-5 flex items-center gap-2 text-xs font-extrabold uppercase text-brand"><span className="h-px w-9 bg-brand" /> Agência de marketing</p>
            <h1 className="text-5xl font-extrabold leading-[1.02] text-brand-deep sm:text-6xl lg:text-7xl">Conectar<br />com <span className="text-brand">sucesso.</span></h1>
            <p className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-ink sm:text-2xl">Conectamos marcas a pessoas e ideias a resultados.</p>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">Estratégia, criatividade e comunicação para transformar conexões em oportunidades.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button asChild variant="amv" size="lg"><a href="#servicos">Conheça nossos serviços <ArrowRight /></a></Button><Button asChild variant="amvOutline" size="lg"><a href="#contato">Fale com a AMV</a></Button></div>
          </div>
          <div className="relative mx-auto w-full max-w-xl lg:justify-self-end">
            <div className="absolute -inset-5 -z-10 rounded-full border border-brand-soft sm:-inset-10" />
            <img src={logoAsset.url} alt="Logo AMV Conectar" className="relative z-10 w-full object-contain mix-blend-multiply" />
            <svg className="route-float absolute -bottom-8 -right-5 z-20 w-2/3 text-brand sm:-right-14" viewBox="0 0 420 170" fill="none" aria-hidden="true"><path d="M12 150C112 150 180 121 245 69L343 21" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/><path d="M315 14L362 12L345 57" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
      </section>

      <section id="sobre" className="scroll-mt-20 border-y border-border bg-surface-blue py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:px-8">
          <SectionHeading eyebrow="Sobre a AMV" title="Marketing que conecta." />
          <div className="relative border-l-2 border-brand pl-7 sm:pl-10"><p className="text-xl font-medium leading-9 text-ink sm:text-2xl">A AMV Conectar nasce com o propósito de transformar comunicação em conexão e conexão em resultados.</p><p className="mt-5 text-base leading-8 text-muted-foreground">Unimos estratégia, criatividade e visão de mercado para construir experiências que aproximam marcas e pessoas.</p><div className="mt-8 flex items-center gap-3 text-sm font-bold text-brand"><span className="grid size-9 place-items-center rounded-full bg-brand text-primary-foreground"><Sparkles className="size-4" /></span>Conexões que movem marcas</div></div>
        </div>
      </section>

      <section id="servicos" className="scroll-mt-20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading eyebrow="Serviços" title="O que fazemos" text="Soluções integradas para construir presença, relacionamento e valor em cada ponto de contato." />
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">{services.map(({ icon: Icon, title, text }, index) => <article key={title} className="group min-h-64 bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-surface-blue sm:p-9"><div className="flex items-start justify-between"><span className="grid size-11 place-items-center rounded-md bg-brand-soft text-brand-deep"><Icon className="size-5" /></span><span className="text-xs font-extrabold text-muted-foreground/50">0{index + 1}</span></div><h3 className="mt-8 text-xl font-extrabold text-brand-deep">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p></article>)}</div>
        </div>
      </section>

      <section id="diferenciais" className="relative scroll-mt-20 overflow-hidden bg-brand-deep py-24 sm:py-32">
        <svg className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full text-brand/20" viewBox="0 0 1440 420" fill="none" aria-hidden="true"><path d="M-40 390C280 380 460 350 648 258C832 168 985 106 1380 38" stroke="currentColor" strokeWidth="3"/><path d="M1315 15L1395 35L1350 103" stroke="currentColor" strokeWidth="3"/></svg>
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading eyebrow="Nosso diferencial" title="Por que conectar?" text="Uma visão completa transforma cada escolha em parte de uma rota clara para o crescimento." light />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{pillars.map(({ icon: Icon, title, text }, index) => <article key={title} className="border-t border-primary-foreground/25 pt-6"><div className="flex items-center justify-between"><Icon className="size-6 text-brand"/><span className="text-xs font-bold text-primary-foreground/40">0{index + 1}</span></div><h3 className="mt-7 text-xl font-extrabold text-primary-foreground">{title}</h3><p className="mt-3 text-sm leading-7 text-primary-foreground/65">{text}</p></article>)}</div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading eyebrow="Nosso processo" title="Da ideia à evolução." text="Uma jornada estratégica e contínua, com cada etapa conectada à próxima." />
          <div className="relative mt-16 grid gap-0 lg:grid-cols-5"><div className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-brand-soft lg:block" />{steps.map(([number, title, text], index) => <article key={number} className="relative grid grid-cols-[3rem_1fr] gap-5 border-l border-brand-soft pb-10 pl-6 last:pb-0 lg:block lg:border-l-0 lg:px-5 lg:pb-0 lg:text-center"><span className="relative z-10 grid size-12 place-items-center rounded-full border-4 border-background bg-brand text-xs font-extrabold text-primary-foreground lg:mx-auto">{number}</span><div><h3 className="pt-1 text-lg font-extrabold text-brand-deep lg:mt-6 lg:pt-0">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div>{index < steps.length - 1 && <ArrowRight className="absolute right-0 top-4 hidden size-4 text-brand lg:block" />}</article>)}</div>
        </div>
      </section>

      <section className="px-5 pb-24 lg:px-8 lg:pb-32"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-lg bg-brand-deep px-6 py-16 sm:px-14 sm:py-20"><svg className="absolute right-0 top-0 h-full w-2/5 text-brand/30" viewBox="0 0 400 300" fill="none" aria-hidden="true"><path d="M-30 290C99 270 170 202 308 70" stroke="currentColor" strokeWidth="4"/><path d="M269 62L324 54L316 109" stroke="currentColor" strokeWidth="4"/></svg><div className="relative max-w-3xl"><h2 className="text-3xl font-extrabold text-primary-foreground sm:text-5xl">Pronto para transformar conexões em resultados?</h2><p className="mt-5 max-w-2xl text-base leading-8 text-primary-foreground/70">Vamos conversar sobre sua marca, seus objetivos e as possibilidades para o próximo passo.</p><Button asChild variant="amvLight" size="lg" className="mt-8"><a href="#contato">Fale com a AMV Conectar <ArrowRight /></a></Button></div></div></section>

      <section id="contato" className="scroll-mt-20 border-t border-border bg-surface-blue py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.75fr_1.25fr] lg:px-8"><div><SectionHeading eyebrow="Contato" title="Vamos conectar?" text="Conte um pouco sobre sua marca e o que você deseja construir. Esse pode ser o início de uma grande conexão." /><div className="mt-8 flex items-center gap-3 text-sm font-bold text-brand-deep"><span className="grid size-10 place-items-center rounded-full bg-brand-soft"><Mail className="size-4" /></span>Seu próximo passo começa aqui.</div></div>
          <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate={false}>
            <Field label="Nome" name="name" placeholder="Seu nome" autoComplete="name" required maxLength={100} />
            <Field label="E-mail" name="email" placeholder="voce@empresa.com" type="email" autoComplete="email" required maxLength={255} />
            <Field label="Empresa" name="company" placeholder="Nome da empresa" autoComplete="organization" maxLength={120} />
            <Field label="Assunto" name="subject" placeholder="Como podemos ajudar?" required maxLength={150} />
            <label className="sm:col-span-2"><span className="mb-2 block text-sm font-bold text-brand-deep">Mensagem</span><textarea name="message" required maxLength={1200} rows={5} placeholder="Conte sobre seus objetivos" className="w-full resize-none rounded-md border border-input bg-background px-4 py-3 text-base outline-none transition focus:border-brand focus:ring-2 focus:ring-brand-soft" /></label>
            <div className="flex flex-col items-start gap-4 sm:col-span-2 sm:flex-row sm:items-center"><Button type="submit" variant="amv" size="lg">Enviar mensagem <ArrowRight /></Button>{sent && <p role="status" className="text-sm font-semibold text-brand-deep">Mensagem preparada com sucesso. Em breve, conectaremos este formulário ao canal oficial.</p>}</div>
          </form>
        </div>
      </section>

      <footer className="bg-brand-deep py-12"><div className="mx-auto grid max-w-7xl gap-9 px-5 md:grid-cols-[1fr_auto] md:items-center lg:px-8"><div><p className="text-xl font-extrabold text-primary-foreground">AMV Conectar</p><p className="mt-1 text-sm text-primary-foreground/55">Conectar com sucesso</p></div><nav className="flex flex-wrap gap-x-6 gap-y-3">{navItems.filter(([, id]) => id !== "diferenciais").map(([label, id]) => <a key={id} href={`#${id}`} className="text-sm font-semibold text-primary-foreground/65 transition hover:text-primary-foreground">{label}</a>)}</nav><div className="border-t border-primary-foreground/15 pt-7 text-xs text-primary-foreground/45 md:col-span-2 md:flex md:justify-between"><p>© 2026 AMV Conectar. Todos os direitos reservados.</p><p className="mt-3 md:mt-0">Redes sociais e informações de contato em breve.</p></div></div></footer>
    </main>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return <label><span className="mb-2 block text-sm font-bold text-brand-deep">{label}</span><input {...props} className="h-12 w-full rounded-md border border-input bg-background px-4 text-base outline-none transition focus:border-brand focus:ring-2 focus:ring-brand-soft" /></label>;
}