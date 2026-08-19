import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { servicos } from "@/content/servicos";

export default function ServicosPreview() {
  return (
    <section className="bg-paper-alt px-5 py-24 sm:px-10">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="eyebrow mb-4">O que fazemos</div>
            <h2 className="max-w-[16ch] text-[28px] font-normal text-ink sm:text-[38px]">
              Serviços pra cada etapa da sua obra
            </h2>
          </div>
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:text-brand-red"
          >
            Ver todos os serviços <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((servico) => (
            <div
              key={servico.slug}
              className="group relative bg-paper p-8 transition-colors duration-300 hover:bg-ink"
            >
              <h3 className="font-display text-xl text-ink transition-colors duration-300 group-hover:text-white">
                {servico.titulo}
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-ink-soft transition-colors duration-300 group-hover:text-white/65">
                {servico.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
