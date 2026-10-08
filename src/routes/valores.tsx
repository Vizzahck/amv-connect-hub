import { createFileRoute } from "@tanstack/react-router";
import { Handshake, Heart, Eye, Clock, Award, Users, ShieldCheck, Lightbulb, PenTool } from "lucide-react";
import { InstitutionalPage, institutionalHead } from "@/components/amv/institutional-page";

const values = [
  ["Respeito", Heart], ["Honestidade", Handshake], ["Transparência", Eye],
  ["Pontualidade", Clock], ["Excelência", Award], ["Colaboração", Users],
  ["Ética", ShieldCheck], ["Inovação", Lightbulb], ["Criatividade", PenTool],
] as const;

export const Route = createFileRoute("/valores")({
  head: () => institutionalHead("Valores", "Respeito, honestidade, transparência, pontualidade, excelência, colaboração, ética, inovação e criatividade: os valores da AMV."),
  component: () => <InstitutionalPage title="VALORES"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{values.map(([label, Icon], index) => <article key={label} className="rounded-md border border-border bg-card p-7 transition-colors hover:border-brand-orange"><div className="flex items-center justify-between"><Icon className="size-6 text-brand-orange" /><span className="text-xs font-semibold text-muted-foreground">0{index + 1}</span></div><h2 className="mt-7 text-xl font-extrabold text-brand-deep">{label}</h2></article>)}</div></InstitutionalPage>,
});