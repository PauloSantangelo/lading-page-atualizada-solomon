import React from "react";

const Button = ({ styles }: { styles: string }) => (
  <a href="https://app.solomonchat.com/" target="_blank" rel="noopener noreferrer">
    <button
      type="button"
      className={`py-5 px-8 font-poppins font-semibold text-[20px] text-primary bg-blue-gradient rounded-[12px] outline-none ${styles}`}
    >
      Teste agora a IA nos seus investimentos!
    </button>
  </a>
);

export default Button;
