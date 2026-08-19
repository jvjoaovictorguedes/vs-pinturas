"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "vs-pinturas-theme";

export default function ThemeToggle({ light = false }: { light?: boolean }) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {
      // localStorage indisponível, tema não será persistido
    }
  }

  if (!mounted) {
    // evita mismatch de hidratação; mantém o espaço reservado
    return <span className="block h-9 w-9" aria-hidden="true" />;
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      title={isDark ? "Modo claro" : "Modo escuro"}
      className={`
        flex h-9 w-9 items-center justify-center rounded-full border
        transition-all duration-300 hover:-translate-y-px
        ${
          light
            ? "border-white/25 text-white hover:border-white/60"
            : "border-line text-ink hover:border-brand-red hover:text-brand-red"
        }
      `}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
