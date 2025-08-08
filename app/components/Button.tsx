"use client"; // <-- Adicionei esta linha para habilitar a interatividade no navegador

import React from "react";

// FUNÇÃO PARA RASTREAR O CLIQUE DO PIXEL NO WHATSAPP
const handleWhatsAppClick = () => {
  // 1. Verificamos se o Pixel está carregado.
  if (typeof window.fbq === 'function') {
    // 2. Disparamos o evento 'Contact'.
    // 'Contact' é um evento padrão da Meta para interação de contato.
    // O parâmetro 'button_name' ajuda a identificar o botão específico.
    window.fbq('track', 'Contact', { button_name: 'WhatsApp_Button' });
  }
};

const Button = ({ styles }: { styles: string }) => (
  <a
    href="https://wa.me/5514988130629?text=Ol%C3%A1%2C%20quero%20testar%20o%20Solomon%21"
    target="_blank"
    rel="noopener noreferrer"
    onClick={handleWhatsAppClick} // <-- Adicionei o evento de clique aqui
  >
    <button
      type="button"
      className={`py-5 px-8 font-poppins bg-blue-gradient rounded-[12px] outline-none text-center text-primary ${styles}`}
    >
      <div className="flex flex-col items-center leading-tight">
        <span className="font-semibold text-[20px]">
          Teste agora a IA nos seus investimentos!
        </span>
        <span className="italic text-[16px] text-[#0f172a] mt-1">
          conversar com especialista
        </span>
      </div>
    </button>
  </a>
);

export default Button;