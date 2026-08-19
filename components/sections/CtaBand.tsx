"use client";

import { useEffect, useRef } from "react";
import Button from "@/components/ui/Button";
import { whatsappLink } from "@/content/site";

export default function CtaBand() {
  const textureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = textureRef.current;

    if (!element) return;

    let frame = 0;
    let start = performance.now();

    const animate = (time: number) => {
      const elapsed = time - start;

      /*
       * Movimento extremamente lento.
       * A textura parece viva sem chamar mais
       * atenção do que o CTA.
       */
      const progress = (elapsed % 14000) / 14000;

      const x = -20 + progress * 140;

      const y = Math.sin(progress * Math.PI * 2) * 8;

      element.style.transform = `
        translate3d(${x}%, ${y}px, 0)
        rotate(-6deg)
      `;

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-brand-red
        px-5
        py-20
        text-white
        sm:px-10
        sm:py-24
      "
    >
      {/* =========================================
          TEXTURA DE PAREDE / GRAFIATO
          ========================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.16]
        "
        style={{
          backgroundImage: `
            radial-gradient(
              circle at 20% 30%,
              rgba(255,255,255,0.8) 0 1px,
              transparent 1.5px
            ),
            radial-gradient(
              circle at 70% 60%,
              rgba(0,0,0,0.25) 0 1px,
              transparent 1.5px
            )
          `,
          backgroundSize: "18px 18px, 24px 24px",
        }}
      />

      {/* =========================================
          GRANDE ÁREA DE ACABAMENTO
          ========================================= */}

      <div
        ref={textureRef}
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[30%]
          top-[-80%]
          h-[260%]
          w-[42%]
          min-w-[320px]
          rounded-[45%]
          opacity-[0.22]
          blur-[1px]
        "
        style={{
          background: `
            linear-gradient(
              105deg,
              transparent 0%,
              rgba(255,255,255,0.08) 20%,
              rgba(255,255,255,0.32) 48%,
              rgba(255,255,255,0.08) 75%,
              transparent 100%
            )
          `,
          boxShadow: "0 0 80px rgba(255,255,255,0.08)",
        }}
      />

      {/* =========================================
          TEXTURA PROFUNDA
          ========================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.12]
          mix-blend-overlay
        "
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              115deg,
              transparent 0px,
              transparent 7px,
              rgba(255,255,255,0.22) 8px,
              transparent 10px
            )
          `,
          backgroundSize: "22px 22px",
        }}
      />

      {/* =========================================
          ILUMINAÇÃO
          ========================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          -top-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-white/[0.08]
          blur-[100px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-40
          left-[30%]
          h-[360px]
          w-[360px]
          rounded-full
          bg-black/[0.10]
          blur-[100px]
        "
      />

      {/* =========================================
          CONTEÚDO
          ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-[1180px]
          flex-wrap
          items-center
          justify-between
          gap-8
        "
      >
        <div>
          <div
            className="
              mb-4
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.24em]
              text-white/65
            "
          >
            Próximo passo
          </div>

          <h2
            className="
              max-w-[20ch]
              text-[26px]
              font-normal
              leading-[1.1]
              sm:text-[34px]
            "
          >
            Bora colocar sua obra no cronograma?
          </h2>
        </div>

        <Button href={whatsappLink()} variant="light">
          Falar no WhatsApp
        </Button>
      </div>
    </section>
  );
}
