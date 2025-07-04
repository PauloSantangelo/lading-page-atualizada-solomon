'use client';

import Image from 'next/image';
import { useState } from 'react';
import { BrainCircuit } from 'lucide-react';

const prints = [
  '/solomon-whats1.webp',
  '/solomon-whats2.webp',
  '/solomon-whats3.webp',
  '/solomon-whats4.webp',
  '/solomon-whats5.webp',
  '/solomon-whats6.webp',
  '/solomon-whats7.webp',
];

const PrintGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="prints"
      className="relative w-full py-20 px-4 md:px-20 bg-[#0f172a] bg-[url('/fundo-prints.png')] bg-no-repeat bg-cover bg-center"
    >
      {/* Sobreposição escura para contraste */}
      <div className="absolute inset-0 bg-[#0f172a]/90 z-0" />

      <div className="relative z-10">
        <h2 className="text-white text-[26px] md:text-[36px] font-bold mb-10 text-center">
          Veja como o <span className="text-gradient">Solomon responde</span> na prática
        </h2>

        {/* Galeria de prints */}
        <div className="relative flex justify-center items-center h-[460px] md:h-[500px] overflow-visible mb-12">
          {prints.map((src, index) => {
            const isActive = index === activeIndex;
            const offset = index - activeIndex;

            return (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`absolute transition-all duration-500 ease-in-out rounded-2xl overflow-hidden
                  border border-white/10 hover:border-cyan-400
                  ${isActive ? 'z-30 scale-100 shadow-2xl border-cyan-500' : 'scale-75 opacity-40 z-10'}
                `}
                style={{
                  transform: `translateX(${offset * 140}px) scale(${isActive ? 1 : 0.85})`,
                  width: isActive ? 200 : 120,
                  height: isActive ? 360 : 200,
                  top: isActive ? '20%' : '30%',
                }}
              >
                <Image
                  src={src}
                  alt={`print-${index + 1}`}
                  width={200}
                  height={360}
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>

        {/* Botão de CTA responsivo */}
        <div className="flex justify-center">
          <a
            href="https://wa.me/SEUNUMERO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 md:gap-3 text-[#0f172a] text-base md:text-lg font-semibold bg-[#00f6ff] hover:bg-[#00e0e0] transition px-5 py-3 md:px-8 md:py-4 rounded-xl shadow-xl"
          >
            <BrainCircuit className="w-5 h-5 md:w-6 md:h-6" />
            Comece a investir com IA
          </a>
        </div>
      </div>
    </section>
  );
};

export default PrintGallery;
