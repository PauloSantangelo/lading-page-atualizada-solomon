'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowRightCircle } from 'react-icons/fi';
import { slideIn } from '../styles/animations';

const prints = [
  { src: '/print1.webp' },
  { src: '/print2.webp' },
  { src: '/print3.webp' },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMobileButton, setShowMobileButton] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % prints.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scroll para mostrar botão flutuante apenas após a primeira dobra
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setShowMobileButton(true);
      } else {
        setShowMobileButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden text-white bg-black">
      {/* 🎞️ Vídeo de fundo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* 🤖 Robô no fundo (desktop apenas) */}
      <Image
        src="/robo-solomon.webp"
        alt="Solomon bot"
        width={800}
        height={800}
        className="hidden md:block absolute bottom-0 right-[-80px] md:right-10 w-[35%] z-0 opacity-80 pointer-events-none select-none"
        priority
      />

      {/* Conteúdo principal */}
      <div className="relative z-10 w-full max-w-7xl px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Texto */}
        <motion.div
          className="flex-1 text-center md:text-left"
          variants={slideIn('left', 'tween', 0.2, 1.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="text-sm bg-white/10 text-white px-3 py-1 rounded-lg inline-block mb-3">
            Seu <strong>Agente de Investimentos</strong> no WhatsApp
          </p>

          <h1 className="text-[2rem] sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Informação de mercado de forma simples e direta.
          </h1>

          <p className="text-sm md:text-base text-white/90 mb-8 max-w-md mx-auto md:mx-0">
            Solomon envia análises, cotações e oportunidades direto no seu WhatsApp. Sem distrações, sem ruído.
          </p>

          <a
            href="https://pay.solomonchat.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 transition-all shadow-lg text-white font-semibold"
          >
            Assine e ganhe 7 dias grátis
            <FiArrowRightCircle className="text-xl" />
          </a>
        </motion.div>

        {/* Print */}
        <motion.div
          className="flex-1 relative flex justify-center items-center mt-10 md:mt-0"
          variants={slideIn('right', 'tween', 0.2, 1.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="relative z-10 w-[300px] sm:w-[320px] md:w-[360px] h-[520px] sm:h-[560px] md:h-[600px]">
            {prints.map((print, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: currentIndex === index ? 1 : 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={print.src}
                  alt={`print-${index}`}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 320px, 360px"
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 📱 Botão flutuante com animação, só aparece após scroll no mobile */}
      {showMobileButton && (
        <a
          href="https://pay.solomonchat.com"
          className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 shadow-md w-[85vw] max-w-[300px] text-center text-white text-sm font-medium animate-pulse"
        >
          Assine e Ganhe 7 dias grátis
        </a>
      )}
    </section>
  );
};

export default Hero;
