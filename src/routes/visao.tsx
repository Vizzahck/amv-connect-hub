import { createFileRoute } from "@tanstack/react-router";
import { InstitutionalPage, institutionalHead } from "@/components/amv/institutional-page";

export const Route = createFileRoute("/visao")({
  head: () => institutionalHead("Visão", "A visão da AMV: ser referência em Marketing e Vendas na Baixada Maranhense, com excelência, inovação e acessibilidade."),
  component: () => <InstitutionalPage title="VISÃO"><p className="max-w-4xl border-l-2 border-brand-orange pl-6 text-xl font-medium leading-9 text-ink sm:pl-9 sm:text-2xl sm:leading-10">Ser reconhecida como uma agência de referência em Marketing e Vendas na região da Baixada Maranhense, destacando-se pela excelência, inovação e acessibilidade de suas soluções, contribuindo para o crescimento das empresas, a conquista de novos clientes e a geração de resultados consistentes e sustentáveis.</p></InstitutionalPage>,
});