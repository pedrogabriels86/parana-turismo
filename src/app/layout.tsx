import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Sonia } from "@/components/Sonia";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Paranã Turismo | Serras Gerais do Tocantins",
    template: "%s | Paranã Turismo",
  },
  description:
    "Descubra Paranã: atrativos naturais, catálogo de pousadas e restaurantes, classificados locais e a assistente Sônia.",
  openGraph: {
    title: "Paranã Turismo",
    description: "O portal de experiências das Serras Gerais.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-ice text-graphite">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Sonia />
      </body>
    </html>
  );
}
