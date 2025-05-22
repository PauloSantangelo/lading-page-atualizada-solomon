"use client";
import { motion } from "framer-motion";
import { slideIn } from "../styles/animations";
import Button from "./Button";
import Image from "next/image";
import { useEffect, useState } from "react";

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
        <h2 className="heading2">
          O Solomon potencializa seus <br className="sm:block hidden" /> resultados em investimentos
        </h2>
        <p className="paragraph max-w-[470px] mt-5">
          Solomon é mais que um assistente: ele entende seu perfil, acompanha seus investimentos e entrega dados
          atualizados do mercado — incluindo ativos em alta, oportunidades e análises. Com inteligência artificial,
          ele filtra notícias relevantes, explica o que importa e orienta até quem está começando. Tudo em uma
          plataforma prática, acessível e segura.
        </p>
        <Button styles="mt-10" />
      </motion.div>

      {/* Imagem do produto + print com animação */}
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

        {/* Print com animação e responsividade */}
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-[16%] right-[6%] rounded-xl overflow-hidden border border-white shadow-lg
                     w-[160px] sm:w-[300px] h-auto"
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
