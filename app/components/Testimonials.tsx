import Image from "next/image";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className="w-full py-20 px-6 md:px-16 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] flex flex-col items-center relative"
  >
    {/* Fundo com gradiente suave */}
    <div className="absolute w-[60%] h-[60%] -right-[50%] bottom-40 rounded-full blue__gradient" />

    {/* Logo + Título em uma linha */}
    <div className="w-full flex flex-col md:items-start items-center text-left sm:mb-16 mb-10 relative">
      <Image
        src="/logo.webp"
        alt="Logo Solomon"
        width={120}
        height={40}
        className="mb-4"
      />
      <h2 className="text-white font-poppins font-bold text-[42px] md:text-[52px] leading-tight">
        <span className="text-gradient">O que as pessoas </span>
        <span className="text-white">estão achando?</span>
      </h2>
    </div>

    {/* Cartões */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl relative">
      {feedback.slice(0, 6).map((card, index) => (
        <FeedbackCard key={card.id} {...card} highlight={index === feedback.length - 1} />
      ))}
    </div>
  </section>
);

export default Testimonials;
