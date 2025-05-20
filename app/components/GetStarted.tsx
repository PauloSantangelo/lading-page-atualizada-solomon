import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi"; // ícone moderno

const GetStarted = () => (
  <a
    href="https://wa.me/5511988130629"
    target="_blank"
    rel="noopener noreferrer"
    className="group flexCenter w-[180px] h-[180px] rounded-full bg-blue-gradient p-[4px] cursor-pointer transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-400/70"
  >
    <div className="flexCenter flex-col bg-primary w-full h-full rounded-full">
      <p className="font-poppins font-semibold text-[20px] leading-[26px] text-gradient text-center">
        Fale com um
      </p>
      <div className="flex items-center gap-2">
        <p className="font-poppins font-semibold text-[20px] leading-[26px] text-gradient text-center">
          especialista
        </p>
        <FiArrowUpRight size={22} className="text-cyan-400 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </a>
);

export default GetStarted;
