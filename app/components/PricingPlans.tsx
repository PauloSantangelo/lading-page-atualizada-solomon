"use client";

const PricingPlans = () => {
  return (
    <section
      id="planos"
      className="relative py-20 px-6 md:px-16 bg-[#0f172a] text-white overflow-hidden"
    >
      {/* Fundo animado sutil */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-[pulseGrid_20s_linear_infinite] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-blue-800/10 to-transparent blur-2xl" />

      <div className="max-w-7xl mx-auto text-center mb-14 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Assine o Solomon e invista com inteligência
        </h2>
        <p className="text-dimWhite max-w-2xl mx-auto text-base md:text-lg">
          Teste grátis por 7 dias e descubra porque o Solomon é o assistente de investimentos mais completo do Brasil. Tire dúvidas, receba análises em tempo real, filtre notícias e invista com mais segurança.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
        {/* Plano Mensal */}
        <article className="bg-[#1e293b] rounded-xl p-8 shadow-lg flex flex-col items-start hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-2">Plano Mensal</h3>
          <p className="text-3xl font-bold mb-4">R$ 59,90</p>
          <ul className="text-sm text-dimWhite mb-6 space-y-2">
            <li>✅ Benefícios completos</li>
            <li>✅ Sem compromisso</li>
            <li>✅ Pague apenas quando usar</li>
          </ul>
          <button className="bg-[#00f6ff] hover:bg-[#00e0e0] transition px-5 py-2 rounded-md font-medium w-full text-center text-[#0f172a]">
            Escolher Mensal
          </button>
        </article>

        {/* Plano Semestral */}
        <article className="relative bg-[#1e293b] border-2 border-cyan-500 rounded-xl p-8 shadow-lg flex flex-col items-start overflow-hidden hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 rounded-xl border-2 border-cyan-400 opacity-10 blur-md animate-spin-slow" />
          <h3 className="text-xl font-semibold mb-2 z-10">Plano Semestral</h3>
          <p className="text-3xl font-bold mb-1 z-10">R$ 39,90/mês</p>
          <p className="text-sm italic text-cyan-400 mb-4 z-10">
            Ideal para quem quer constância sem abrir mão da economia
          </p>
          <ul className="text-sm text-dimWhite mb-6 space-y-2 z-10">
            <li>✅ Economia de 33%</li>
            <li>✅ Acesso completo por 6 meses</li>
            <li>✅ Insights e análises exclusivas</li>
          </ul>
          <button className="bg-[#00f6ff] hover:bg-[#00e0e0] transition px-5 py-2 rounded-md font-medium w-full text-center text-[#0f172a] z-10">
            Escolher Semestral
          </button>
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
          <button className="bg-[#00f6ff] hover:bg-[#00e0e0] transition px-5 py-2 rounded-md font-medium w-full text-center text-[#0f172a]">
            Escolher Anual
          </button>
        </article>
      </div>
    </section>
  );
};

export default PricingPlans;
