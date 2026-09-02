import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { servicos } from "@/content/servicos";

export default function ServicosPreview() {
  return (
    <section className="bg-paper-alt px-4 py-20 sm:px-10 sm:py-24 dark:bg-ink-soft">
      <div className="mx-auto max-w-295">
        <div className="mb-10 flex flex-col items-start gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="eyebrow mb-4">O que fazemos</div>

            <h2 className="max-w-[16ch] text-[28px] font-normal text-ink sm:text-[38px] dark:text-white">
              Serviços pra cada etapa da sua obra
            </h2>
          </div>

          <Link
            href="/servicos"
            className="
              inline-flex
              items-center
              gap-2
              text-xs
              font-bold
              uppercase
              tracking-[0.14em]
              text-ink
              transition-colors
              hover:text-brand-red
              dark:text-white
            "
          >
            Ver todos os serviços
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div
          className="
            grid
            gap-px
            overflow-hidden
            border
            border-line
            bg-line
            sm:grid-cols-2
            lg:grid-cols-3
            dark:border-white/10
            dark:bg-white/10
          "
        >
          {servicos.map((servico, index) => (
            <div
              key={servico.slug}
              className="
                group
                relative
                flex
                min-h-62.5
                flex-col
                justify-between
                bg-paper
                p-8
                transition-colors
                duration-300
                hover:bg-ink
                dark:bg-[#242424]
                dark:hover:bg-[#303030]
              "
            >
              <div>
                <span
                  className="
                    text-xs
                    font-bold
                    tracking-[0.12em]
                    text-brand-red
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3
                  className="
                    mt-5
                    font-display
                    text-xl
                    text-ink
                    transition-colors
                    duration-300
                    group-hover:text-white
                    dark:text-white
                  "
                >
                  {servico.titulo}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    font-light
                    leading-relaxed
                    text-ink-soft
                    transition-colors
                    duration-300
                    group-hover:text-white/65
                    dark:text-white/65
                  "
                >
                  {servico.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
