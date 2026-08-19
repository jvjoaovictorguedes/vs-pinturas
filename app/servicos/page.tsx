import type { Metadata } from "next";
import { servicos } from "@/content/servicos";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Serviços | VS Pinturas",
  description:
    "Conheça os serviços de pintura, reforma e manutenção da VS Pinturas.",
};

export default function ServicosPage() {
  return (
    <>
      <header className="relative flex min-h-[50svh] flex-col justify-end overflow-hidden bg-ink px-5 pb-16 pt-32 text-white sm:px-10">
        <div className="mx-auto w-full max-w-[1180px]">
          <div className="eyebrow mb-6">Serviços</div>
          <h1 className="max-w-[18ch] text-[34px] font-normal sm:text-[48px]">
            Tudo que sua obra precisa, em um lugar só
          </h1>
        </div>
      </header>

      <section className="bg-paper px-5 py-20 sm:px-10">
        <div className="mx-auto grid max-w-[1180px] gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
          {servicos.map((servico) => (
            <div key={servico.slug} className="bg-paper p-10">
              <h2 className="font-display text-2xl text-ink">
                {servico.titulo}
              </h2>
              <p className="mt-4 text-sm font-light leading-relaxed text-ink-soft">
                {servico.descricao}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
