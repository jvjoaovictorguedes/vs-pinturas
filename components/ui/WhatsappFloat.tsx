import Link from "next/link";
import { whatsappLink } from "@/content/site";

export default function WhatsappFloat() {
  return (
    <Link
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      title="Falar no WhatsApp"
      className="
        fixed
        bottom-6
        right-4
        z-30
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-[0_8px_30px_rgba(0,0,0,0.25)]
        transition-all
        duration-300
        hover:scale-110
        sm:bottom-8
        sm:right-8
        sm:h-16
        sm:w-16
      "
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 sm:h-8 sm:w-8"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          d="M16.02 3.2c-7.05 0-12.78 5.72-12.78 12.77
          0 2.25.59 4.36 1.62 6.19L3.2 28.8l6.83-1.61
          a12.7 12.7 0 0 0 5.99 1.49h.01
          c7.05 0 12.77-5.73 12.77-12.78
          C28.8 8.92 23.07 3.2 16.02 3.2Zm0 23.34
          c-1.88 0-3.72-.5-5.33-1.44l-.38-.22-4.05.95
          1-3.95-.24-.4a10.58 10.58 0 1 1 9 5.06Z"
        />
        <path
          d="M22.16 18.54c-.33-.16-1.96-.97-2.27-1.08
          -.31-.12-.54-.16-.77.16-.23.33-.88 1.08-1.08 1.3
          -.2.23-.4.25-.73.08-.33-.16-1.38-.51-2.63-1.63
          -.97-.87-1.63-1.94-1.82-2.27-.19-.33-.02-.51.14-.67
          .15-.15.33-.4.49-.6.16-.2.21-.33.31-.55
          .1-.23.05-.43-.03-.6-.08-.16-.77-1.85-1.06-2.53
          -.28-.66-.57-.57-.77-.58h-.65
          c-.23 0-.6.08-.91.43-.31.33-1.19 1.16-1.19 2.83
          0 1.67 1.21 3.27 1.38 3.49.16.23 2.38 3.64 5.76 5.1
          .81.35 1.45.55 1.94.71.82.26 1.56.22 2.15.14
          .66-.1 1.96-.8 2.24-1.57.28-.77.28-1.43.2-1.57
          -.08-.14-.3-.22-.63-.38Z"
          fill="#fff"
        />
      </svg>
    </Link>
  );
}
