import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--poppins",
});

export const metadata: Metadata = {
  title: "Solomon",
  description: "Seu Assessor de Investimentos com Inteligência Artificial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-serif`}>{children}</body>
    </html>
  );
}
