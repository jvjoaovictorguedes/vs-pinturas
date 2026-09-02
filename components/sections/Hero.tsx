"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { whatsappLink } from "@/content/site";

export default function Hero() {
  const [hideScrollIndicator, setHideScrollIndicator] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideScrollIndicator(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="top"
      className="
        relative
        flex
        min-h-svh
        flex-col
        justify-end
        overflow-hidden
        bg-ink
        text-white
      "
    >
      <img
        src="/home-light.jpeg"
        alt=""
        aria-hidden="true"
        className="
    absolute
    inset-0
    h-full
    w-full
    object-cover
    sm:object-contain
    object-center
    dark:hidden
  "
      />

      <img
        src="/home-dark.jfif"
        alt=""
        aria-hidden="true"
        className="
    absolute
    inset-0
    hidden
    h-full
    w-full
    object-cover
    object-center
    dark:block
  "
      />

      {/* =========================================
          OVERLAY
          ========================================= */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/75
          via-black/40
          to-black/10
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/70
          via-transparent
          to-black/20
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
          w-full
          max-w-[1180px]
          px-5
          pb-24
          sm:px-10
        "
      >
        <div className="eyebrow mb-6">Reformas · Pinturas · Manutenções</div>

        <h1
          className="
            max-w-[16ch]
            overflow-hidden
            text-[38px]
            leading-[1.05]
            font-normal
            sm:text-[56px]
            lg:text-[72px]
          "
        >
          <span className="animate-brush-reveal block">Sua obra com o</span>

          <span
            className="
              animate-brush-reveal
              block
              text-brand-red
            "
            style={{
              animationDelay: "0.25s",
            }}
          >
            acabamento que
          </span>

          <span
            className="animate-brush-reveal block"
            style={{
              animationDelay: "0.5s",
            }}
          >
            você imaginou.
          </span>
        </h1>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-10">
          <p className="max-w-[36ch] text-[15px] font-light text-white/65">
            Pintura, reforma e manutenção com planejamento, prazo cumprido e
            aquele detalhe final que faz toda a diferença.
          </p>

          <Button href={whatsappLink()} variant="red">
            Solicitar orçamento
          </Button>
        </div>
      </div>

      {/* =========================================
          SCROLL INDICATOR
          ========================================= */}
      <div
        className={`
          absolute
          bottom-6
          left-1/2
          z-10
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2.5
          text-[10px]
          uppercase
          tracking-[0.24em]
          text-white/50
          transition-all
          duration-500
          sm:flex
          ${
            hideScrollIndicator
              ? "translate-y-4 opacity-0"
              : "translate-y-0 opacity-100"
          }
        `}
      >
        <span>Role</span>

        <div className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent motion-safe:animate-pulse" />
      </div>
    </header>
  );
}
