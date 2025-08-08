import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--poppins",
});

export const metadata: Metadata = {
  title: "Solomon",
  description: "Seu Agente de Investimentos com Inteligência Artificial",
  authors: [{ name: "VIBE", url: "https://vibe.digital" }],
  applicationName: "Solomon",
  // themeColor deve ficar aqui (ou no viewport)
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  // Se quiser forçar meta color-scheme (opcional e não obrigatório):
  // other: { "color-scheme": "dark" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  // Você poderia colocar themeColor aqui em vez do metadata, se preferir:
  // themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${poppins.variable} font-serif bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
