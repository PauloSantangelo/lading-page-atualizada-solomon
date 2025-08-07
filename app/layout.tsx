import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: [
    "100", "200", "300", "400", "500", "600", "700", "800", "900"
  ],
  variable: "--poppins",
});

// ✅ Metadados principais
export const metadata: Metadata = {
  title: "Solomon",
  description: "Seu Agente de Investimentos com Inteligência Artificial",
  authors: [{ name: "VIBE", url: "https://vibe.digital" }],
  applicationName: "Solomon",
};

// ✅ Viewport separado (obrigatório agora)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

// ✅ ThemeColor separado
export const themeColor = "#000000";

// ✅ Color scheme separado
export const colorScheme = "dark";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${poppins.variable} font-serif bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
