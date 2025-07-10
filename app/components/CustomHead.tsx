// app/components/CustomHead.tsx

'use client';

import Head from 'next/head';

const CustomHead = () => {
  return (
    <Head>
      {/* SEO básico */}
      <title>Solomon | Seu Agente de Investimentos com IA</title>
      <meta
        name="description"
        content="O Solomon é sua inteligência artificial de investimentos no WhatsApp. Receba alertas, notícias filtradas e dados personalizados direto no seu celular."
      />
      <meta
        name="keywords"
        content="investimentos, IA, inteligência artificial, agente financeiro, whatsapp, mercado financeiro, ações, renda fixa, Solomon"
      />
      <meta name="robots" content="index, follow" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:title" content="Solomon | Agente de Investimentos com IA" />
      <meta
        property="og:description"
        content="Receba informações personalizadas sobre o mercado direto no WhatsApp com o Solomon, seu assistente de investimentos inteligente."
      />
      <meta property="og:image" content="/og-image.webp" />
      <meta property="og:url" content="https://solomon.com.br" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Solomon | Agente de Investimentos com IA" />
      <meta
        name="twitter:description"
        content="Seu novo jeito de investir com clareza, dados e praticidade direto no WhatsApp."
      />
      <meta name="twitter:image" content="/og-image.webp" />

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Solomon",
            operatingSystem: "WhatsApp",
            applicationCategory: "FinanceApplication",
            offers: {
              "@type": "Offer",
              price: "29.90",
              priceCurrency: "BRL",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "130",
            },
            description:
              "O Solomon é uma IA de investimentos que envia alertas, dados e notícias filtradas diretamente no seu WhatsApp.",
            url: "https://solomon.com.br",
          }),
        }}
      />
    </Head>
  );
};

export default CustomHead;
