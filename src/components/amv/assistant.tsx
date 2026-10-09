import { useEffect, useRef, useState } from "react";
import { MessageCircle, Minus, RotateCcw, X } from "lucide-react";
import { WhatsAppLink } from "@/components/amv/site-shell";

type Faq = { q: string; a: string; whatsapp?: boolean };

const faqs: Faq[] = [
  { q: "O que é a AMV Conectar?", a: "A AMV - Agência de Marketing e Vendas é uma agência experimental de aprendizagem desenvolvida pelos alunos do curso de Assistente de Marketing e Vendas do SENAC, em Pinheiro - MA." },
  { q: "Qual é o objetivo da AMV?", a: "Transformar conhecimento em experiência prática, desenvolver competências profissionais e conectar a formação em Marketing e Vendas às necessidades do mercado." },
  { q: "O que é o Projeto Integrador?", a: "É uma iniciativa pedagógica que integra teoria e prática, permitindo aos alunos vivenciar atividades profissionais relacionadas a pesquisa de mercado, planejamento, comunicação, marketing digital e processos comerciais." },
  { q: "Qual é a missão da AMV?", a: "Conectar marcas e pessoas por meio de soluções inovadoras e estratégias criativas de Marketing e Vendas, fortalecendo relacionamentos e contribuindo para o crescimento dos negócios." },
  { q: "Qual é a visão da AMV?", a: "Ser reconhecida como uma agência de referência em Marketing e Vendas na Baixada Maranhense, destacando-se pela excelência, inovação e acessibilidade." },
  { q: "Quais são os valores da AMV?", a: "Respeito, honestidade, transparência, pontualidade, excelência, colaboração, ética, inovação e criatividade." },
  { q: "Quais serviços a AMV oferece?", a: "Estratégia de Marketing, Marketing Digital, Conteúdo e Comunicação, Branding, Redes Sociais e Campanhas." },
  { q: "Onde fica a AMV?", a: "Rua Edvaldo Moraes, nº 934 (ou Travessa João Mariano, s/n), bairro Antigo Aeroporto, Pinheiro - MA, CEP 65200-000." },
  { q: "Como entrar em contato com a AMV?", a: "Fale com a AMV pelo WhatsApp:", whatsapp: true },
  { q: "O que significa AMV?", a: "AMV significa Agência de Marketing e Vendas." },
];

type Msg = { from: "bot" | "user"; text: string; whatsapp?: boolean };
const welcome: Msg = { from: "bot", text: "Olá! Eu sou o Assistente AMV. Escolha uma pergunta abaixo:" };

export function AmvAssistant() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([welcome]);
  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" }); }, [msgs, open]);

  const ask = (f: Faq) => setMsgs((m) => [...m, { from: "user", text: f.q }, { from: "bot", text: f.a, whatsapp: f.whatsapp }]);
  const reset = () => setMsgs([welcome]);
  const close = () => { setOpen(false); reset(); };

  return <div className="fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
    {open && <section role="dialog" aria-label="Assistente AMV" className="rise-in flex h-[min(560px,calc(100dvh-7rem))] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-xl border border-border bg-background shadow-2xl">
      <header className="flex items-center gap-3 bg-brand-panel px-4 py-3">
        <span className="grid size-9 place-items-center rounded-full bg-brand-orange text-on-panel"><MessageCircle className="size-4" /></span>
        <div className="mr-auto"><p className="text-sm font-extrabold text-on-panel">Assistente AMV</p><p className="text-xs text-on-panel/70">Respostas rápidas</p></div>
        <button type="button" onClick={() => setOpen(false)} aria-label="Minimizar" className="grid size-9 place-items-center rounded-md text-on-panel/80 hover:bg-on-panel/10"><Minus className="size-4" /></button>
        <button type="button" onClick={close} aria-label="Fechar" className="grid size-9 place-items-center rounded-md text-on-panel/80 hover:bg-on-panel/10"><X className="size-4" /></button>
      </header>
      <div className="flex-1 space-y-3 overflow-y-auto p-4" aria-live="polite">
        {msgs.map((m, i) => <div key={i} className={m.from === "user" ? "ml-auto max-w-[85%] rounded-lg rounded-br-sm bg-primary px-3 py-2 text-sm text-primary-foreground" : "max-w-[90%] text-sm leading-6 text-foreground"}>
          {m.text}
          {m.whatsapp && <WhatsAppLink className="mt-2 inline-flex items-center gap-2 rounded-md bg-brand-orange px-3 py-2 text-sm font-bold text-on-panel"><MessageCircle className="size-4" /> Falar pelo WhatsApp</WhatsAppLink>}
        </div>)}
        <div className="flex flex-col gap-2 pt-1">
          {faqs.map((f) => <button key={f.q} type="button" onClick={() => ask(f)} className="rounded-md border border-border px-3 py-2 text-left text-sm font-semibold text-brand-deep transition hover:border-brand hover:bg-surface-blue">{f.q}</button>)}
          {msgs.length > 1 && <button type="button" onClick={reset} className="inline-flex items-center gap-2 self-start px-1 py-2 text-sm font-bold text-brand-orange"><RotateCcw className="size-4" /> Voltar ao início</button>}
        </div>
        <div ref={endRef} />
      </div>
    </section>}
    <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label="Assistente AMV" className="inline-flex h-14 items-center gap-2 rounded-full bg-primary px-5 font-bold text-primary-foreground shadow-lg ring-2 ring-brand-orange transition hover:-translate-y-0.5">
      <MessageCircle className="size-5" /><span className="hidden sm:inline">Assistente AMV</span>
    </button>
  </div>;
}
