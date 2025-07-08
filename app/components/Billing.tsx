"use client";
import { bill } from "../../public";
import { slideIn } from "../styles/animations";
import Image from "next/image";
import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";

const Billing = () => (
  <section id="Produto" className="sectionReverse">
    <motion.div
      className="sectionImgReverse"
      variants={slideIn("left", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="relative w-full h-full z-[5]">
        <Image
          src={bill}
          alt="billing"
          fill
          className="object-contain"
          quality={70}
          priority={false}
        />
      </div>

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </motion.div>

    <motion.div
      className="sectionInfo"
      variants={slideIn("right", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="font-poppins font-bold text-white text-[22px] sm:text-[32px] md:text-[40px] leading-tight md:leading-[56px]">
        Um Agente inteligente de investimentos. <br className="sm:block hidden" /> No WhatsApp, no seu ritmo.
      </h2>

      <p className="text-sm md:text-base leading-tight md:leading-[26px] text-white/90 mt-5 max-w-[95%] md:max-w-[470px]">
        O Solomon te envia alertas, explicações e notícias filtradas com base no que realmente importa para você. Tudo direto no WhatsApp — rápido, claro e sem perder tempo.
      </p>

      <div className="mt-8">
        <a
          href="https://wa.me/SEUNUMERO"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-[#0f172a] text-sm md:text-lg font-semibold bg-[#00f6ff] hover:bg-[#00e0e0] transition px-6 py-3 md:px-8 md:py-4 rounded-xl shadow-xl"
        >
          <BrainCircuit className="w-5 h-5 md:w-6 md:h-6" />
          Quero testar agora
        </a>
      </div>
    </motion.div>
  </section>
);

export default Billing;
