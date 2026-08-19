import type { Metadata } from "next";
import CtaBand from "@/components/sections/CtaBand";
import Diferenciais from "@/components/sections/Diferenciais";

export const metadata: Metadata = {
  title: "Sobre | VS Pinturas",
  description: "Conheça a história e os valores da VS Pinturas.",
};

export default function SobrePage() {
  return (
    <>
      <header className="relative flex min-h-[50svh] flex-col justify-end overflow-hidden bg-ink px-5 pb-16 pt-32 text-white sm:px-10">
        <div className="mx-auto w-full max-w-[1180px]">
          <div className="eyebrow mb-6">Sobre a VS Pinturas</div>
          <h1 className="max-w-[20ch] text-[34px] font-normal sm:text-[48px]">
            Pintura e reforma feitas por quem entende de detalhe
          </h1>
        </div>
      </header>

      <section className="bg-paper px-5 py-20 sm:px-10">
        <div className="mx-auto max-w-[760px]">
          {/* TODO: substitua pelo texto real de história/posicionamento da VS Pinturas */}
          <p className="text-lg font-light leading-relaxed text-ink-soft">
            A VS Pinturas nasceu da vontade de fazer o trabalho de reforma e
            pintura do jeito que o cliente merece: com prazo cumprido,
            comunicação clara e um acabamento que realmente impressiona.
          </p>
          <p className="mt-6 text-lg font-light leading-relaxed text-ink-soft">
            Atuamos em residências e comércios, do reparo pontual à reforma
            completa, sempre com a mesma atenção ao detalhe que faz a
            diferença entre um serviço comum e um trabalho bem feito.
          </p>
        </div>
      </section>

      <Diferenciais />
      <CtaBand />
    </>
  );
}
