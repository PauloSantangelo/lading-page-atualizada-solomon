import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./styles/globals.css";
import Script from "next/script";

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
};

// themeColor foi movido para o viewport
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <Script id="facebook-pixel">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1055694976728500');
          fbq('track', 'PageView');
        `}
      </Script>
      <body className={`${poppins.variable} font-serif bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}