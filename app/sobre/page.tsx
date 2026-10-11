import type { Metadata } from "next";
import CtaBand from "@/components/sections/CtaBand";
import Diferenciais from "@/components/sections/Diferenciais";
import ServicosRealizados from "@/components/sections/ServicosRealizados";

export const metadata: Metadata = {
  title: "Sobre | VS Pinturas",
  description: "Conheça a história e os valores da VS Pinturas.",
};

export default function SobrePage() {
  return (
    <>
      <header className="relative flex min-h-[50svh] flex-col justify-end overflow-hidden bg-ink px-5 pb-16 pt-32 text-white sm:px-10 dark:text-paper dark:bg-ink-soft">
        <div className="mx-auto w-full max-w-295">
          <div className="eyebrow mb-6">Sobre a VS Pinturas</div>
          <h1 className="max-w-[20ch] text-[34px] font-normal sm:text-[48px]">
            Pintura e reforma feitas por quem entende de detalhe
          </h1>
        </div>
      </header>

      <section className="bg-paper px-5 py-20 sm:px-10">
        <div className="mx-auto max-w-190">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <img
              src="/logo.jpg"
              alt="Equipe da VS Pinturas"
              className="h-60 w-60 shrink-0 rounded-lg object-cover"
            />
            <div className="flex-1">
              <p className="text-lg font-light leading-relaxed text-ink-soft">
                Minha história na construção civil começou cedo. Aos 12 anos
                de idade, comecei a trabalhar na área junto com meu pai e meu
                tio. Foi ali que aprendi, na prática, o valor do trabalho, da
                responsabilidade e de fazer um serviço bem feito.
              </p>
              <p className="mt-6 text-lg font-light leading-relaxed text-ink-soft">
                Ao longo dos anos, continuei trabalhando na construção e só
                parei por um período para servir ao Exército. Assim que saí,
                voltei para aquilo que sempre fez parte da minha vida e, em 7
                de julho de 2022, dei mais um passo importante: abri
                oficialmente meu CNPJ e comecei a construir minha própria
                empresa.
              </p>
              <p className="mt-6 text-lg font-light leading-relaxed text-ink-soft">
                Desde então, nunca mais parei. Venho trabalhando todos os
                dias para conquistar novos clientes, mas principalmente para
                manter aqueles que já confiaram no meu trabalho. Para mim, a
                satisfação de um cliente e a qualidade do serviço vêm sempre
                em primeiro lugar.
              </p>
              <p className="mt-6 text-lg font-light leading-relaxed text-ink-soft">
                A V.S. Pinturas nasceu de muitos anos de experiência,
                trabalho e dedicação. E sigo até hoje com o mesmo propósito
                de quando comecei: trabalhar com honestidade, entregar um
                serviço bem feito e conquistar cada vez mais a confiança dos
                meus clientes.
              </p>
              <p className="mt-6 text-lg font-light leading-relaxed text-ink-soft">
                Essa é a nossa história. E ainda estamos só começando.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Diferenciais />

      <ServicosRealizados />
      <CtaBand />
    </>
  );
}
