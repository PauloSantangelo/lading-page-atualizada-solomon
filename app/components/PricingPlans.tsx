'use client';

import Image from 'next/image';
import logo from '../../public/logo.webp';

const PricingPlans = () => {
  // FUNÇÃO PARA RASTREAR O CLIQUE DO PIXEL
  // Agora a função aceita o nome do plano e o valor como parâmetros
  const handleAssinarClick = (plano: string, valor: number) => {
    if (typeof window.fbq === 'function') {
      // Disparamos o evento 'Purchase' com dados mais detalhados
      window.fbq('track', 'Purchase', { 
        currency: 'BRL',
        value: valor,
        content_name: `Assinatura ${plano}`,
      });
    }
  };

  return (
    <section
      id="planos"
      className="relative py-20 px-6 md:px-16 bg-[#0f172a] text-white overflow-hidden"
    >
      {/* Fundo animado sutil */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-[pulseGrid_20s_linear_infinite] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-blue-800/10 to-transparent blur-2xl" />

      {/* Logo fixo no canto inferior */}
      <div className="absolute bottom-5 right-5 z-10 opacity-70 hover:opacity-70 transition-opacity duration-300">
        <Image src={logo} alt="Logo Solomon" width={200} height={52} priority />
      </div>

      <div className="max-w-7xl mx-auto text-center mb-14 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Assine o Solomon e invista com inteligência
        </h2>
        <p className="text-dimWhite max-w-2xl mx-auto text-base md:text-lg">
          Teste grátis por 7 dias e descubra porque o Solomon é o assistente de investimentos mais completo do Brasil. Tire dúvidas, receba análises em tempo real, filtre notícias e invista com mais segurança.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto relative z-10">
        {/* Plano Semestral (Chamado de Mensal) */}
        <article className="bg-[#1e293b] rounded-xl p-8 shadow-lg flex flex-col items-start hover:scale-105 transition-transform duration-300 border-2 border-cyan-500 relative overflow-hidden">
          <div className="absolute inset-0 rounded-xl border-2 border-cyan-400 opacity-10 blur-md animate-spin-slow" />
          <h3 className="text-xl font-semibold mb-2 z-10">Plano Mensal</h3>
          <p className="text-3xl font-bold mb-1 z-10">R$ 39,90/mês</p>
          <p className="text-sm italic text-cyan-400 mb-4 z-10">
            Ideal para quem quer constância sem abrir mão da economia
          </p>
          <ul className="text-sm text-dimWhite mb-6 space-y-2 z-10">
            <li>✅ Economia de 33%</li>
            <li>✅ Acesso completo por 6 meses</li>
            <li>✅ Insights e análises exclusivas</li>
          </ul>
          <a
            href="https://pay.solomonchat.com?plano=mensal"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleAssinarClick('Mensal', 39.90)} // <-- Passando os parâmetros
            className="bg-[#00f6ff] hover:bg-[#00e0e0] transition px-5 py-2 rounded-md font-medium w-full text-center text-[#0f172a] z-10"
          >
            Escolher Mensal
          </a>
        </article>

        {/* Plano Anual */}
        <article className="bg-[#1e293b] rounded-xl p-8 shadow-lg flex flex-col items-start hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-2">Plano Anual</h3>
          <p className="text-3xl font-bold mb-1">R$ 29,90/mês</p>
          <p className="text-sm italic text-green-400 mb-4">
            Melhor custo-benefício garantido
          </p>
          <ul className="text-sm text-dimWhite mb-6 space-y-2">
            <li>✅ Economia total de 50%</li>
            <li>✅ Acesso contínuo por 1 ano</li>
            <li>✅ Assistente 100% personalizado</li>
          </ul>
          <a
            href="https://pay.solomonchat.com?plano=anual"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleAssinarClick('Anual', 29.90)} // <-- Passando os parâmetros
            className="bg-[#00f6ff] hover:bg-[#00e0e0] transition px-5 py-2 rounded-md font-medium w-full text-center text-[#0f172a]"
          >
            Escolher Anual
          </a>
        </article>
      </div>
    </section>
  );
};

export default PricingPlans;