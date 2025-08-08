'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { BrainCircuit, ChevronLeft, ChevronRight } from 'lucide-react';

const prints = [
  '/solomon-whats1.webp',
  '/solomon-whats2.webp',
  '/solomon-whats3.webp',
  '/solomon-whats4.webp',
  '/solomon-whats5.webp',
  '/solomon-whats6.webp',
  '/solomon-whats7.webp',
];

function SectionBackground() {
  return (
    <div
      className="absolute inset-0 w-full h-full bg-[#04091a] bg-[url('/fundo-prints.webp')] bg-no-repeat bg-cover bg-center"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#04091a]/95 via-[#04091a]/80 to-[#04091a]/95 z-0" />
    </div>
  );
}

const InteractiveGallery = () => {
  // FUNÇÃO PARA RASTREAR O CLIQUE DO PIXEL
  const handleAssinarClick = () => {
    // Verificamos se o Pixel está carregado.
    if (typeof window.fbq === 'function') {
      // Disparamos o evento 'Purchase' (Compra) no Pixel.
      window.fbq('track', 'Purchase', { currency: 'BRL', value: 99.90 });
    }
  };

  const [[activeIndex, direction], setActiveIndex] = useState([
    Math.floor(prints.length / 2),
    0,
  ]);

  const handleNext = () => {
    setActiveIndex([(activeIndex + 1) % prints.length, 1]);
  };

  const handlePrev = () => {
    setActiveIndex([(activeIndex - 1 + prints.length) % prints.length, -1]);
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <section
      id="Produto"
      className="relative w-full overflow-hidden py-24 sm:py-32"
    >
      <SectionBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-poppins text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300">
            Veja como o Solomon responde
          </h2>
          <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
            Interaja com exemplos reais e descubra a clareza e a precisão das
            análises que você receberá diretamente no seu WhatsApp.
          </p>
        </div>

        {/* Carrossel 3D Desktop */}
        <div className="hidden md:flex relative mt-16 justify-center items-center h-[600px]">
          <div className="absolute w-full h-full" style={{ perspective: '1000px' }}>
            {prints.map((src, index) => {
              const offset = index - activeIndex;
              return (
                <motion.div
                  key={index}
                  className="absolute top-0 left-0 right-0 bottom-0 m-auto"
                  initial={false}
                  animate={{
                    transform: `translateX(${offset * 25}%) rotateY(${
                      offset * -15
                    }deg) translateZ(${Math.abs(offset) * -200}px)`,
                    opacity: Math.abs(offset) < 3 ? 1 : 0,
                    scale: offset === 0 ? 1 : 0.7,
                    zIndex: prints.length - Math.abs(offset),
                  }}
                  transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                  onClick={() =>
                    setActiveIndex([
                      index,
                      index > activeIndex ? 1 : -1,
                    ])
                  }
                >
                  <div
                    className={`relative w-[250px] h-[540px] transition-all duration-300 rounded-3xl overflow-hidden shadow-2xl cursor-pointer ${
                      offset === 0
                        ? 'border-2 border-cyan-400 shadow-cyan-500/50'
                        : 'border border-white/10'
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`Exemplo ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Slider Mobile */}
        <div className="md:hidden relative mt-12 flex justify-center items-center h-[420px] w-full max-w-[230px] mx-auto overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="absolute w-full h-full"
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-cyan-400">
                <Image
                  src={prints[activeIndex]}
                  alt={`Exemplo ${activeIndex + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navegação */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <div className="flex items-center gap-2">
            {prints.map((_, index) => (
              <div
                key={index}
                onClick={() =>
                  setActiveIndex([
                    index,
                    index > activeIndex ? 1 : -1,
                  ])
                }
                role="button"
                tabIndex={0}
                aria-label={`Selecionar imagem ${index + 1}`}
                aria-current={activeIndex === index ? 'true' : undefined}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === index
                    ? 'w-6 bg-cyan-400'
                    : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Botão CTA */}
        <div className="flex justify-center mt-20">
          <motion.a
            href="https://pay.solomonchat.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleAssinarClick} // <-- Adicionei o evento de clique aqui
            className="inline-flex items-center gap-3 text-white text-base md:text-lg font-semibold bg-gradient-to-br from-cyan-500 to-blue-600 px-8 py-4 rounded-xl shadow-lg shadow-cyan-500/20 transition-all"
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 10px 30px rgba(0, 200, 255, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <BrainCircuit className="w-6 h-6" />
            Comece a Investir com IA
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default InteractiveGallery;