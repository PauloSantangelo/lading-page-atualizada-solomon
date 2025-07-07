"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit } from "lucide-react";
import { slideIn } from "../styles/animations"; // Supondo que você mantenha este arquivo de animações

// Componente de fundo que usamos nos outros projetos
function BackgroundAndEffects() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-[#00040f]">
      <div className="absolute left-0 top-[-10rem] -z-10 h-[30rem] w-[30rem] transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div 
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#00c6ff] to-[#0072ff] opacity-20"
            style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}
        />
      </div>
      <div className="absolute bottom-0 right-0 -z-10 h-[30rem] w-[40rem] transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div 
            className="relative left-[calc(50%+10rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/2 rotate-[-20deg] bg-gradient-to-tr from-[#0072ff] to-[#001f44] opacity-25"
            style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}
        />
      </div>
    </div>
  );
}


const CardDeal = () => {
  const prints = ["/print1.webp", "/print2.webp", "/print3.webp"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % prints.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [prints.length]);

  return (
    <section className="relative w-full py-24 sm:py-32">
        <BackgroundAndEffects />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* --- COLUNA DE TEXTO --- */}
        <motion.div
            className="flex flex-col items-start"
            variants={slideIn("left", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >
            <h2 className="font-poppins text-4xl sm:text-5xl font-bold leading-tight sm:leading-[1.2] bg-clip-text text-transparent bg-gradient-to-br from-white to-neutral-400">
                O Solomon potencializa seus <br className="sm:block hidden" /> resultados em investimentos.
            </h2>

            <p className="font-poppins text-base sm:text-lg text-neutral-300 mt-6 max-w-xl">
                Solomon é mais que um assistente: ele entende seu perfil, acompanha seus investimentos e entrega dados
                atualizados do mercado — incluindo ativos em alta, oportunidades e análises. Com inteligência artificial,
                ele filtra notícias relevantes, explica o que importa e orienta até quem está começando.
            </p>

            <motion.a
                href="https://wa.me/SEUNUMERO"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 text-white text-base md:text-lg font-semibold bg-gradient-to-br from-cyan-500 to-blue-600 px-8 py-4 rounded-xl shadow-lg shadow-cyan-500/20 transition-all"
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 200, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
            >
                <BrainCircuit className="w-6 h-6" />
                Comece a investir com IA
            </motion.a>
        </motion.div>

        {/* --- COLUNA DE IMAGEM --- */}
        <motion.div
            className="relative flex items-center justify-center"
            variants={slideIn("right", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >
            <Image
                src="/teste3.webp"
                alt="Ilustração do Solomon"
                width={600}
                height={600}
                className="w-full h-auto"
                priority
            />

            <div className="absolute top-[16%] right-[6%] rounded-xl shadow-lg w-[35%] sm:w-[40%] h-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="overflow-hidden border border-white/20 rounded-xl"
                    >
                        <Image
                            src={prints[current]}
                            alt={`Print da plataforma Solomon ${current + 1}`}
                            width={300}
                            height={600}
                            className="object-cover w-full h-auto"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CardDeal;