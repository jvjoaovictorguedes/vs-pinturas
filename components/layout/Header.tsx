"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Button from "@/components/ui/Button";
import { whatsappLink } from "@/content/site";

const links = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
];

export default function Header() {
  const pathname = usePathname();
  const hasDarkHero = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!hasDarkHero) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasDarkHero]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const showLight = !hasDarkHero || scrolled || menuOpen;

  return (
    <>
      <header
        className={`
          fixed inset-x-0 top-0 z-50 flex items-center justify-between
          px-5 py-3 transition-all duration-300 sm:px-10
          ${
            showLight
              ? "border-b border-line-soft bg-paper/90 text-ink backdrop-blur-md"
              : "text-white"
          }
        `}
      >
        <Link
          href="/"
          className="relative z-50 flex items-center gap-3"
          aria-label="VS Pinturas - Início"
        >
          <Image
            src="/logo.jpg"
            alt="Logo VS Pinturas"
            width={48}
            height={48}
            className="h-11 w-11 rounded-lg object-cover sm:h-12 sm:w-12"
            priority
          />
          <span className="hidden font-display text-lg leading-none sm:block">
            VS Pinturas
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.12em] lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="opacity-85 transition-opacity duration-300 hover:text-brand-red hover:opacity-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle light={!showLight} />
          <Button href={whatsappLink()} variant="red" className="!px-5 !py-3">
            Orçamento
          </Button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle light={!showLight} />
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative z-50 flex h-10 w-10 items-center justify-center"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <span className="relative flex h-4 w-5 flex-col justify-between">
              <span
                className={`block h-[2px] w-full origin-center bg-current transition-all duration-300 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-full bg-current transition-all duration-300 ${
                  menuOpen ? "scale-x-0 opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-full origin-center bg-current transition-all duration-300 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`
          fixed inset-0 z-40 flex flex-col justify-center bg-paper px-8
          transition-all duration-500 lg:hidden
          ${menuOpen ? "visible opacity-100" : "invisible opacity-0"}
        `}
      >
        <nav className="flex flex-col gap-7">
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-display text-3xl leading-none text-ink transition-all duration-500 ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: menuOpen ? `${index * 60}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-3 h-px w-16 bg-brand-red" />

          <Link
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-1 inline-flex w-fit items-center gap-2 border-2 border-brand-red bg-brand-red px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-500 ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
            style={{
              transitionDelay: menuOpen ? `${links.length * 60 + 60}ms` : "0ms",
            }}
          >
            Falar no WhatsApp
          </Link>
        </nav>
        <div
          className={`absolute bottom-8 left-8 text-[10px] uppercase tracking-[0.2em] text-ink-soft transition-all duration-700 ${
            menuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          VS Pinturas · Reformas, Pinturas e Manutenções
        </div>
      </div>
    </>
  );
}
