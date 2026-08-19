import Link from "next/link";
import Image from "next/image";
import { Instagram, MessageCircle, MapPin } from "lucide-react";
import { site, whatsappLink } from "@/content/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="mx-auto grid w-full max-w-[1180px] gap-12 px-5 py-16 sm:px-10 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Logo VS Pinturas"
              width={44}
              height={44}
              className="h-11 w-11 rounded-lg object-cover"
            />
            <span className="font-display text-lg">{site.nome}</span>
          </div>
          <p className="mt-5 max-w-[32ch] text-sm font-light text-white/60">
            Reformas, pinturas e manutenções com acabamento de quem entende
            que a primeira impressão é sempre visual.
          </p>
        </div>

        <div>
          <div className="eyebrow on-dark mb-5 !text-brand-red">Contato</div>
          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <Link
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-brand-red"
              >
                <MessageCircle size={15} /> WhatsApp
              </Link>
            </li>
            <li>
              <Link
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-brand-red"
              >
                <Instagram size={15} /> Instagram
              </Link>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin size={15} /> {site.cidade}
            </li>
          </ul>
        </div>

        <div>
          <div className="eyebrow on-dark mb-5 !text-brand-red">Navegação</div>
          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <Link href="/" className="transition-colors hover:text-brand-red">
                Início
              </Link>
            </li>
            <li>
              <Link
                href="/servicos"
                className="transition-colors hover:text-brand-red"
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                href="/sobre"
                className="transition-colors hover:text-brand-red"
              >
                Sobre
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-6 text-center text-[11px] uppercase tracking-[0.16em] text-white/40 sm:px-10">
        © {new Date().getFullYear()} {site.nome} · Reformas · Pinturas ·
        Manutenções
      </div>
    </footer>
  );
}
