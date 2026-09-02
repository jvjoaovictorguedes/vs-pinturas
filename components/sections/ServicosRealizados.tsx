"use client";

import { useState } from "react";

export default function ServicosRealizados() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <section className="bg-paper px-5 py-24 sm:px-10">
      <div className="mx-auto max-w-295">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="eyebrow mb-4 text-brand-red!">
              Serviços realizados
            </div>
            <h2 className="max-w-[18ch] text-[28px] font-normal text-ink sm:text-[38px]">
              Transformações que fazem a diferença
            </h2>
          </div>
          <p className="max-w-136 text-sm font-light leading-relaxed text-ink-soft sm:text-base">
            Alguns dos projetos em pintura, reforma de ambientes e acabamento
            que entregamos com atenção ao detalhe e respeito ao seu espaço.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              titulo: "Casa residencial",
              antes: "/casa-antes.jpeg",
              depois: "/casa-depois.jpeg",
            },
            {
              titulo: "Revestimento e acabamento",
              antes: "/parede-antes.jpeg",
              depois: "/parede-depois.jpeg",
            },
            {
              titulo: "Pavimento e área externa",
              antes: "/chao-antes.jpeg",
              depois: "/chao-depois.jpeg",
            },
          ].map((item) => (
            <article
              key={item.titulo}
              className="group overflow-hidden rounded-[28px] border border-line bg-paper shadow-[0_18px_50px_rgba(17,17,17,0.06)] transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-[#1f1f1f]"
            >
              <div className="grid grid-cols-2 gap-0">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedImage({
                      src: item.antes,
                      alt: `${item.titulo} antes`,
                    })
                  }
                  className="relative cursor-zoom-in overflow-hidden"
                  aria-label={`${item.titulo} antes`}
                >
                  <img
                    src={item.antes}
                    alt={`${item.titulo} antes`}
                    className="h-85 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-ink/75 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                    Antes
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedImage({
                      src: item.depois,
                      alt: `${item.titulo} depois`,
                    })
                  }
                  className="relative cursor-zoom-in overflow-hidden"
                  aria-label={`${item.titulo} depois`}
                >
                  <img
                    src={item.depois}
                    alt={`${item.titulo} depois`}
                    className="h-85 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-brand-red px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                    Depois
                  </span>
                </button>
              </div>

              <div className="border-t border-line bg-paper px-5 py-4 dark:border-white/10 dark:bg-[#1f1f1f]">
                <h3 className="font-display text-xl text-ink dark:text-white">
                  {item.titulo}
                </h3>
              </div>
            </article>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-5 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative max-h-[90vh] max-w-[90vw] rounded-3xl border border-white/10 bg-paper p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-ink/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white"
              >
                Fechar
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[80vh] w-auto max-w-full rounded-[18px] object-contain"
              />
            </div>
          </div>
        )}

        <div className="mt-8 overflow-hidden rounded-[28px] border border-line bg-paper shadow-[0_18px_50px_rgba(17,17,17,0.06)] dark:border-white/10 dark:bg-[#1f1f1f]">
          <div className="flex items-center justify-between border-b border-line px-5 py-4 dark:border-white/10">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-red">
              Vídeo do serviço
            </span>
          </div>
          <video
            className="h-[520px] w-full object-cover sm:h-[600px]"
            controls
            playsInline
            preload="metadata"
            muted
            loop
            poster="/casa-depois.jpeg"
          >
            <source src="/telhas.mp4" type="video/mp4" />
            Seu navegador não suporta reprodução de vídeo.
          </video>
        </div>
      </div>
    </section>
  );
}
