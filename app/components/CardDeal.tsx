"use client";
import { motion } from "framer-motion";
import { slideIn } from "../styles/animations";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BrainCircuit } from "lucide-react";

import teste3 from "../../public/teste3.webp";
import print1 from "../../public/print1.webp";
import print2 from "../../public/print2.webp";
import print3 from "../../public/print3.webp";

const CardDeal = () => {
  const prints = [print1, print2, print3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % prints.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section relative">
      {/* Texto lateral esquerdo */}
      <motion.div
        className="sectionInfo"
        variants={slideIn("left", "tween", 0.2, 1.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="font-poppins font-bold text-white text-[24px] sm:text-[36px] md:text-[42px] leading-tight md:leading-[56px]">
          O Solomon potencializa seus <br className="sm:block hidden" /> resultados em investimentos
        </h2>

        <p className="text-sm md:text-base leading-tight md:leading-[26px] text-white/90 mt-5 max-w-[95%] md:max-w-[470px]">
          Solomon é mais que um assistente: ele entende seu perfil, acompanha seus investimentos e entrega dados
          atualizados do mercado — incluindo ativos em alta, oportunidades e análises. Com inteligência artificial,
          ele filtra notícias relevantes, explica o que importa e orienta até quem está começando. Tudo em uma
          plataforma prática, acessível e segura.
        </p>

        <div className="mt-10">
          <a
            href="https://wa.me/SEUNUMERO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[#0f172a] text-sm md:text-lg font-semibold bg-[#00f6ff] hover:bg-[#00e0e0] transition px-6 py-3 md:px-8 md:py-4 rounded-xl shadow-xl"
          >
            <BrainCircuit className="w-5 h-5 md:w-6 md:h-6" />
            Comece a investir com IA
          </a>
        </div>
      </motion.div>

      {/* Imagem + print animado */}
      <motion.div
        className="sectionImg relative"
        variants={slideIn("right", "tween", 0.2, 1.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Image
          src={teste3}
          alt="ilustração Solomon"
          width={0}
          height={0}
          className="w-full h-full"
          priority
        />

        <motion.div
          key={current}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-[16%] right-[6%] rounded-xl overflow-hidden border border-white shadow-lg w-[160px] sm:w-[220px] md:w-[300px] h-auto"
        >
          <Image
            src={prints[current]}
            alt={`print-${current + 1}`}
            className="object-cover rounded-xl w-full h-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CardDeal;
