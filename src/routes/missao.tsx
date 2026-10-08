import { createFileRoute } from "@tanstack/react-router";
import { InstitutionalPage, institutionalHead } from "@/components/amv/institutional-page";

export const Route = createFileRoute("/missao")({
  head: () => institutionalHead("Missão", "Conectar marcas e pessoas com soluções inovadoras e estratégias criativas de Marketing e Vendas para o mercado regional."),
  component: () => <InstitutionalPage title="MISSÃO"><p className="max-w-4xl border-l-2 border-brand-orange pl-6 text-xl font-medium leading-9 text-ink sm:pl-9 sm:text-2xl sm:leading-10">Conectar marcas e pessoas por meio de soluções inovadoras e estratégias criativas de Marketing e Vendas, fortalecendo relacionamentos, impulsionando negócios e gerando resultados que contribuam para o crescimento das empresas e o desenvolvimento do mercado regional.</p></InstitutionalPage>,
});