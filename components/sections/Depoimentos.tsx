import { depoimentos } from "@/content/depoimentos";
import { Quote } from "lucide-react";

export default function Depoimentos() {
  return (
    <section className="bg-paper-alt px-5 py-24 sm:px-10">
      <div className="mx-auto max-w-[1180px]">
        <div className="eyebrow mb-4">Quem já contratou</div>
        <h2 className="mb-14 max-w-[20ch] text-[28px] font-normal text-ink sm:text-[38px]">
          O que dizem sobre o nosso trabalho
        </h2>

        <div className="grid gap-8 sm:grid-cols-3">
          {depoimentos.map((depoimento) => (
            <div
              key={depoimento.nome}
              className="border border-line bg-paper p-8"
            >
              <Quote size={22} className="text-brand-red" />
              <p className="mt-5 text-sm font-light leading-relaxed text-ink-soft">
                {depoimento.texto}
              </p>
              <div className="mt-6 border-t border-line-soft pt-4">
                <p className="text-sm font-bold text-ink">{depoimento.nome}</p>
                <p className="text-xs text-ink-soft">{depoimento.contexto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
