import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Briefcase, Compass, GraduationCap, Handshake, Target } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { InstitutionalNav, institutionalHead } from "@/components/amv/institutional-page";
import { WhatsAppLink } from "@/components/amv/site-shell";

export const Route = createFileRoute("/projeto-integrador")({
  head: () => institutionalHead("Projeto Integrador", "AMV CONECTAR — Conectando Marketing e Vendas com o Sucesso: Projeto Integrador do curso de Assistente de Marketing e Vendas do SENAC Pinheiro - MA."),
  component: ProjetoIntegrador,
});

const activities = ["Pesquisa de mercado", "Planejamento estratégico", "Comunicação", "Marketing digital", "Atendimento", "Relacionamento com clientes", "Processos comerciais"];
const competencies = ["Protagonismo", "Colaboração", "Criatividade", "Visão crítica", "Ética", "Atitude empreendedora"];

const blocks = [
  {
    icon: Compass,
    kicker: "O projeto",
    title: "Agência experimental de caráter pedagógico",
    text: "A AMV CONECTAR: Agência de Marketing e Vendas é uma agência experimental de caráter pedagógico, desenvolvida pelos alunos do curso de Assistente de Marketing e Vendas do SENAC, em Pinheiro - MA, como parte do Projeto Integrador (PI).",
    chips: [] as string[],
  },
  {
    icon: Target,
    kicker: "Finalidade",
    title: "Integrar teoria e prática",
    text: "A iniciativa tem como finalidade integrar teoria e prática, desenvolver competências profissionais e proporcionar aos alunos experiências próximas à realidade do mercado de trabalho.",
    chips: [] as string[],
  },
  {
    icon: Briefcase,
    kicker: "Na prática",
    title: "Funções e responsabilidades profissionais",
    text: "Por meio da agência, os estudantes assumem funções e responsabilidades profissionais, desenvolvendo atividades de pesquisa de mercado, planejamento estratégico, comunicação, marketing digital, atendimento, relacionamento com clientes e processos comerciais.",
    chips: activities,
  },
  {
    icon: Handshake,
    kicker: "Mercado local",
    title: "Aproximação com empresas e organizações",
    text: "O projeto prevê a aproximação com empresas e organizações locais, possibilitando a identificação de necessidades reais e a elaboração de soluções criativas e estratégias de Marketing e Vendas, sempre com orientação pedagógica.",
    chips: [] as string[],
  },
  {
    icon: GraduationCap,
    kicker: "Modelo Pedagógico Senac",
    title: "Protagonismo, ética e atitude empreendedora",
    text: "Alinhada ao Modelo Pedagógico Senac, a AMV CONECTAR estimula o protagonismo dos alunos, a colaboração, a criatividade, a visão crítica, a ética e a atitude empreendedora.",
    chips: competencies,
  },
];

function ProjetoIntegrador() {
  return <main className="overflow-hidden bg-background pb-20 pt-32 text-foreground sm:pb-28 sm:pt-40">
    <section className="relative border-b border-border">
      <div className="pointer-events-none absolute inset-0 hidden opacity-70 sm:block" aria-hidden="true"><svg className="h-full w-full" viewBox="0 0 1440 460" fill="none" preserveAspectRatio="none"><path d="M-60 400C200 396 300 300 520 292C740 284 820 366 1010 274C1180 192 1250 86 1500 54" stroke="currentColor" className="route-draw text-brand-soft" strokeWidth="2" /><circle cx="520" cy="292" r="5" className="fill-brand" /><circle cx="1010" cy="274" r="5" className="fill-brand" /></svg></div>
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Button asChild variant="ghost" className="mb-9 -ml-3 text-muted-foreground"><Link to="/"><ArrowLeft /> Início</Link></Button>
        <div className="rise-in grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <p className="flex items-center gap-3 text-xs font-extrabold uppercase text-brand"><span className="h-px w-9 bg-brand-orange" />Projeto Integrador</p>
            <h1 className="mt-5 max-w-4xl text-3xl font-extrabold uppercase leading-[1.1] text-brand-deep sm:text-4xl lg:text-5xl"><span className="block text-brand">AMV CONECTAR</span><span className="mt-3 block">Conectando Marketing e Vendas com o Sucesso</span></h1>
            <p className="mt-6 text-base font-bold text-brand-orange sm:text-lg">Projeto Integrador | SENAC Pinheiro - MA</p>
          </div>
          <svg className="route-float hidden h-40 w-full text-brand-soft lg:block" viewBox="0 0 420 170" fill="none" aria-hidden="true"><path d="M12 150C112 150 180 121 245 69L343 21" stroke="currentColor" strokeWidth="10" strokeLinecap="round" /><path d="M315 14L362 12L345 57" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
      </div>
    </section>

    <div className="mx-auto max-w-7xl px-5 pt-14 lg:px-8">
      <div className="relative mx-auto max-w-5xl">
        <span className="absolute bottom-6 left-[21px] top-6 w-0.5 bg-brand-soft" aria-hidden="true" />
        <div className="space-y-12 sm:space-y-16">
          {blocks.map(({ icon: Icon, kicker, title, text, chips }) => <article key={title} className="relative pl-16 sm:pl-20">
            <span className="absolute left-0 top-0 grid size-11 place-items-center rounded-full border-4 border-background bg-brand-soft text-brand-deep"><Icon className="size-5" /></span>
            <p className="text-xs font-extrabold uppercase text-brand">{kicker}</p>
            <h2 className="mt-3 text-xl font-extrabold text-brand-deep sm:text-2xl">{title}</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">{text}</p>
            {chips.length > 0 && <ul className="mt-6 flex max-w-3xl flex-wrap gap-2">{chips.map((chip) => <li key={chip} className="rounded-full border border-border bg-surface-blue px-4 py-2 text-sm font-semibold text-brand-deep">{chip}</li>)}</ul>}
          </article>)}
        </div>
      </div>
    </div>

    <section className="mt-20 px-5 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-lg bg-brand-panel px-6 py-14 sm:px-12 sm:py-16">
        <svg className="absolute right-0 top-0 h-full w-2/5 text-brand/30" viewBox="0 0 400 300" fill="none" aria-hidden="true"><path d="M-30 290C99 270 170 202 308 70" stroke="currentColor" strokeWidth="4" /><path d="M269 62L324 54L316 109" stroke="currentColor" strokeWidth="4" /></svg>
        <div className="relative max-w-3xl">
          <p className="text-xs font-extrabold uppercase text-brand-soft">Aprendizagem e desenvolvimento</p>
          <h2 className="mt-3 text-2xl font-extrabold text-on-panel sm:text-4xl">Mais do que uma agência</h2>
          <p className="mt-5 text-base leading-8 text-on-panel/75 sm:text-lg sm:leading-9">Mais do que uma agência, a AMV CONECTAR é um ambiente de aprendizagem, inovação e desenvolvimento profissional, conectando o conhecimento adquirido em sala de aula aos desafios reais do mercado.</p>
          <p className="mt-7 border-l-2 border-brand-orange pl-5 text-lg font-extrabold leading-8 text-on-panel sm:text-xl">AMV CONECTAR - Da sala de aula para o mercado. Conexão com o Sucesso!</p>
          <Button asChild variant="amvLight" size="lg" className="mt-8"><WhatsAppLink>Fale com a AMV Conectar <ArrowRight /></WhatsAppLink></Button>
        </div>
      </div>
    </section>

    <div className="mx-auto max-w-7xl px-5 lg:px-8"><InstitutionalNav /></div>
  </main>;
}
