import type { Metadata } from "next";
import { ArrowDown } from "lucide-react";
import { servicos } from "@/content/servicos";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Serviços | VS Pinturas",
  description:
    "Conheça todos os serviços de pintura, manutenção, limpeza, reforma, acabamentos e impermeabilização da VS Pinturas.",
};

export default function ServicosPage() {
  return (
    <>
      <header className="relative flex min-h-[50svh] flex-col justify-end overflow-hidden bg-ink px-4 pb-16 pt-32 text-white sm:px-10 dark:text-paper dark:bg-ink-soft">
        <div className="mx-auto w-full max-w-295">
          <div className="eyebrow mb-6">Serviços</div>

          <h1 className="max-w-[18ch] text-[34px] font-normal leading-[1.08] sm:text-[48px]">
            Tudo que sua obra precisa, em um lugar só
          </h1>
        </div>
      </header>

      <section className="bg-paper px-5 py-20 sm:px-10 dark:bg-[#181818]">
        <div className="mx-auto max-w-295">
          {/* Intro */}
          <div className="mb-10 flex flex-col justify-between gap-4 border-b border-line pb-8 sm:mb-14 sm:flex-row sm:items-end sm:gap-6 sm:pb-10 dark:border-white/10">
            <div className="max-w-155">
              <div className="eyebrow mb-4">Nossas soluções</div>

              <p className="text-sm font-light leading-relaxed text-ink-soft dark:text-white/60 sm:text-base">
                Da preparação ao acabamento, reunimos serviços para pintura,
                manutenção, limpeza, recuperação e proteção de diferentes tipos
                de imóveis e superfícies.
              </p>
            </div>

            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-soft dark:text-white/35">
              {servicos.length} áreas de atuação
            </span>
          </div>

          {/* Serviços */}
          <div className="space-y-3">
            {servicos.map((servico, index) => (
              <details
                key={servico.slug}
                id={servico.slug}
                className="
                  group
                  overflow-hidden
                  border
                  border-line
                  bg-paper
                  transition-all
                  duration-300
                  open:border-ink/20
                  open:bg-paper-alt
                  dark:border-white/10
                  dark:bg-[#202020]
                  dark:open:border-white/15
                  dark:open:bg-[#242424]
                "
              >
                <summary
                  className="
                    relative
                    flex
                    cursor-pointer
                    list-none
                    items-center
                    justify-between
                    gap-6
                    px-5
                    py-6
                    transition-colors
                    duration-300
                    hover:bg-paper-alt
                    sm:px-7
                    sm:py-7
                    dark:hover:bg-[#282828]
                    [&::-webkit-details-marker]:hidden
                  "
                >
                  {/* Indicador lateral */}
                  <span
                    className="
                      absolute
                      inset-y-0
                      left-0
                      w-0.75
                      origin-bottom
                      scale-y-0
                      bg-brand-red
                      transition-transform
                      duration-300
                      group-open:scale-y-100
                    "
                  />

                  <div className="flex min-w-0 items-start gap-5 sm:gap-7">
                    {/* Número */}
                    <span
                      className="
                        pt-1
                        text-[11px]
                        font-bold
                        tracking-[0.12em]
                        text-brand-red
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Conteúdo */}
                    <div className="min-w-0">
                      <h2
                        className="
                          font-display
                          text-xl
                          text-ink
                          transition-colors
                          duration-300
                          group-open:text-ink
                          sm:text-2xl
                          dark:text-white
                        "
                      >
                        {servico.titulo}
                      </h2>

                      <p
                        className="
                          mt-2
                          max-w-170
                          text-sm
                          font-light
                          leading-relaxed
                          text-ink-soft
                          dark:text-white/50
                        "
                      >
                        {servico.descricao}
                      </p>
                    </div>
                  </div>

                  {/* Botão */}
                  <span
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      border
                      border-line
                      text-ink
                      transition-all
                      duration-300
                      group-hover:border-ink/30
                      group-open:border-ink
                      group-open:bg-ink
                      group-open:text-white
                      dark:border-white/10
                      dark:text-white/70
                      dark:group-hover:border-white/20
                      dark:group-open:border-white/20
                      dark:group-open:bg-white
                      dark:group-open:text-ink
                    "
                  >
                    <ArrowDown
                      size={15}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-open:rotate-180"
                    />
                  </span>
                </summary>

                {/* Conteúdo expandido */}
                <div
                  className="
                    border-t
                    border-line
                    dark:border-white/10
                  "
                >
                  <div className="px-5 pb-7 pt-6 sm:px-7 sm:pb-8 sm:pl-19">
                    <div className="grid gap-8 lg:grid-cols-[180px_1fr]">
                      {/* Label */}
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-soft dark:text-white/35">
                          Serviços realizados
                        </p>
                      </div>

                      {/* Lista */}
                      <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                        {servico.itens.map((item) => (
                          <li
                            key={item.titulo}
                            className="
                              flex
                              items-start
                              gap-3
                              border-b
                              border-line
                              pb-3
                              text-sm
                              text-ink
                              dark:border-white/10
                              dark:text-white/75
                            "
                          >
                            <span className="mt-1.75 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />

                            <span>{item.titulo}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
