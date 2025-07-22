'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowRightCircle } from 'react-icons/fi';
import { slideIn } from '../styles/animations';
import teste from '../../public/teste.webp';

const prints = [
  { src: '/print1.webp', delay: 0 },
  { src: '/print2.webp', delay: 0.2 },
  { src: '/print3.webp', delay: 0.4 },
];

const Hero = () => {
  return (
    <section id="home" className="relative w-full flex md:flex-row flex-col md:gap-6 paddingY overflow-hidden">
      {/* Prints desktop */}
      <div className="hidden md:block absolute w-full h-full z-0 pointer-events-none">
        {prints.map((print, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 0.3, scale: 1, y: [0, -6, 0] }}
            transition={{ delay: print.delay, duration: 6, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
            className="absolute rounded-xl overflow-hidden border border-white"
            style={{
              top: `${10 + index * 20}%`,
              left: `${55 + index * 5}%`,
              width: 'clamp(150px, 25vw, 230px)',
              height: 'clamp(150px, 25vw, 230px)',
              zIndex: 1,
            }}
          >
            <Image
              src={print.src}
              alt={`print-${index}`}
              fill
              className="object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        ))}
      </div>

      {/* Texto principal */}
      <motion.div
        className="flex-1 z-30 flexStart flex-col xl:px-0 paddingX"
        variants={slideIn('left', 'tween', 0.2, 1.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <p className="paragraph ml-2 text-[10px] md:text-base leading-tight">
            <span className="text-white font-semibold">Informação</span> simples, para <span className="text-white font-semibold">investir com clareza.</span>
          </p>
        </div>

        <h1 className="font-poppins font-bold text-[20px] ss:text-[28px] md:text-[44px] text-white leading-tight md:leading-[56px] max-w-[95%]">
          Ficar por dentro do mercado ficou mais fácil.
        </h1>

        <p className="font-poppins font-semibold text-[22px] ss:text-[26px] md:text-[34px] text-gradient mt-4 max-w-[95%] md:max-w-[600px] leading-snug">
          Receba tudo do seu agente de investimentos, no WhatsApp.
        </p>

        <p className="paragraph text-white/90 mt-4 text-sm md:text-base leading-tight md:leading-[24px] max-w-[95%] md:max-w-[480px]">
          Solomon é um agente com IA que conversa com você no WhatsApp. Ele te atualiza, responde dúvidas e te guia nas decisões de investimento — do seu jeito.
        </p>

        <div className="hidden md:inline-block mt-10">
          <a
            href="https://pay.solomonchat.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/60"
          >
            <span className="flex items-center gap-2 font-poppins font-semibold text-white text-sm md:text-base z-10">
              🚀 Falar com o Solomon
              <FiArrowRightCircle className="text-white text-xl group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>
      </motion.div>

      {/* Robô com prints mobile */}
      <motion.div
        className="flex-1 flexCenter md:my-0 my-10 relative z-20 w-full"
        variants={slideIn('right', 'tween', 0.2, 1.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 md:hidden z-0 pointer-events-none">
          {prints.map((print, index) => {
            const positions = [
              { top: '15%', left: '10%' },
              { top: '35%', right: '5%' },
              { bottom: '10%', left: '20%' },
            ];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 0.3, scale: 1, y: [0, -4, 0] }}
                transition={{ delay: print.delay, duration: 5, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
                className="absolute w-[130px] h-[130px] rounded-xl overflow-hidden border border-white"
                style={positions[index]}
              >
                <Image
                  src={print.src}
                  alt={`print-${index}`}
                  fill
                  className="object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            );
          })}
        </div>

        <Image
          src={teste}
          alt="robo"
          width={500}
          height={500}
          className="relative z-[5] w-full sm:w-[100%] h-auto"
          priority
          quality={90}
        />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </motion.div>

      {/* Botão flutuante mobile */}
      <a
        href="https://pay.solomonchat.com"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-5 right-5 z-50 animate-wiggle group inline-flex items-center justify-center px-5 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 shadow-md"
      >
        <span className="flex items-center gap-2 font-poppins font-semibold text-white text-sm z-10">
          🚀 Falar com o Solomon
          <FiArrowRightCircle className="text-white text-lg group-hover:translate-x-1 transition-transform" />
        </span>
      </a>
    </section>
  );
};

export default Hero;
