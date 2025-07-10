import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Solomon",
  description: "Seu Agente de Investimentos com Inteligência Artificial",
  authors: [{ name: "VIBE", url: "https://vibe.digital" }],
  applicationName: "Solomon",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#000000",
  colorScheme: "dark",
};

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
