import React from "react";

const Button = ({ styles }: { styles: string }) => (
  <a
    href="https://wa.me/5514988130629?text=Ol%C3%A1%2C%20quero%20testar%20o%20Solomon%21"
    target="_blank"
    rel="noopener noreferrer"
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
