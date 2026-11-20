import type { Metadata } from "next";
import { Anton, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsappFloat from "@/components/ui/WhatsappFloat";
import { themeInitScript } from "@/lib/theme-script";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const title = "VS Pinturas | Reformas, Pinturas e Manutenções";
const description =
  "Reformas, pinturas e manutenções com acabamento profissional. Solicite seu orçamento pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "https://vs-pinturas.vercel.app"),
  title,
  description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "VS Pinturas",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${anton.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <WhatsappFloat />
        <Footer />
      </body>
    </html>
  );
}
