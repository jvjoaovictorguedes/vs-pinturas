import { ShieldCheck, Clock, Sparkles, HandCoins } from "lucide-react";

const diferenciais = [
  {
    icon: ShieldCheck,
    titulo: "Serviço garantido",
    descricao: "Garantia sobre o acabamento entregue, por escrito.",
  },
  {
    icon: Clock,
    titulo: "Prazo cumprido",
    descricao: "Cronograma definido no orçamento e respeitado na execução.",
  },
  {
    icon: Sparkles,
    titulo: "Acabamento de detalhe",
    descricao: "Atenção nos cantos, arremates e pontos que ninguém vê primeiro.",
  },
  {
    icon: HandCoins,
    titulo: "Orçamento sem surpresa",
    descricao: "Valor fechado antes de começar, sem custo extra escondido.",
  },
];

export default function Diferenciais() {
  return (
    <section className="relative overflow-hidden bg-ink px-5 py-24 text-white sm:px-10">
      <div className="texture-roller pointer-events-none absolute inset-0 text-white/[0.03]" />
      <div className="relative mx-auto max-w-[1180px]">
        <div className="eyebrow mb-4 !text-brand-red">Por que a VS Pinturas</div>
        <h2 className="mb-14 max-w-[22ch] text-[28px] font-normal sm:text-[38px]">
          O que garante um trabalho bem feito
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {diferenciais.map(({ icon: Icon, titulo, descricao }) => (
            <div key={titulo}>
              <Icon size={26} className="text-brand-red" strokeWidth={1.6} />
              <h3 className="mt-4 font-display text-lg">{titulo}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-white/60">
                {descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
