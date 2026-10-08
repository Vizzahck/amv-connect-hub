import { createFileRoute } from "@tanstack/react-router";
import { InstitutionalPage, institutionalHead } from "@/components/amv/institutional-page";

export const Route = createFileRoute("/quem-somos")({
  head: () => institutionalHead("Quem Somos", "Conheça a AMV, agência experimental de aprendizagem criada por alunos do SENAC em Pinheiro, Maranhão."),
  component: QuemSomos,
});

function QuemSomos() {
  return <InstitutionalPage title="QUEM SOMOS">
    <h2 className="text-2xl font-extrabold text-brand-deep sm:text-3xl">AMV - Agência de Marketing e Vendas</h2>
    <p className="mt-4 text-xl font-semibold text-brand-orange">Da sala de aula para o mercado.</p>
    <div className="mt-8 max-w-3xl space-y-6 text-base leading-8 text-muted-foreground sm:text-lg">
      <p>A AMV - Agência de Marketing e Vendas é uma agência experimental de aprendizagem, criada por alunos do curso de Assistente de Marketing e Vendas do SENAC, em Pinheiro, Maranhão.</p>
      <p>Nascemos com um propósito: transformar conhecimento em experiência, ideias em estratégias e desafios em oportunidades de crescimento.</p>
      <p>Nossa proposta é conectar a formação profissional às necessidades reais do mercado, desenvolvendo projetos que integram pesquisa, planejamento estratégico, comunicação, marketing digital, relacionamento com clientes e processos comerciais.</p>
      <p>Na AMV, os alunos assumem funções profissionais, trabalham em equipe e participam de todas as etapas de construção de soluções de Marketing e Vendas, desde o diagnóstico das necessidades de uma organização até o desenvolvimento de estratégias, campanhas e propostas de melhoria.</p>
      <p>Mais do que aprender Marketing e Vendas, queremos vivenciar o mercado, desenvolver talentos e formar profissionais preparados para fazer a diferença.</p>
      <p>Valorizamos a criatividade, a inovação, a ética, a colaboração, o empreendedorismo e o compromisso com resultados.</p>
      <p>Somos uma agência em formação, movida pelo conhecimento, pela prática e pela vontade de crescer.</p>
      <p className="border-l-2 border-brand-orange pl-5 font-bold text-brand-deep">AMV - Conectando Marketing e Vendas com o Sucesso!</p>
    </div>
  </InstitutionalPage>;
}