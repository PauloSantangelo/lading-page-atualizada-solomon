'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// --- Perguntas Frequentes ---
const faqData = [
  {
    question: 'O que o Solomon faz?',
    answer:
      'Ele traz informações atualizadas do mercado e de notícias, filtra seu interesse e atua como um agente de investimentos para te auxiliar na jornada de construção de patrimônio.',
  },
  {
    question: 'Como eu utilizo?',
    answer:
      'O Solomon é uma IA integrada ao WhatsApp com foco em Investimentos. É só iniciar a conversa e tirar suas dúvidas ou solicitar informações atualizadas, de forma simples e direta.',
  },
  {
    question: 'Quem está começando a investir também pode usar?',
    answer:
      'Sim! O Solomon foi pensado para todos. Ele auxilia quem já investe a aprofundar análises e ajuda quem está iniciando, tirando dúvidas básicas e orientando de forma clara e adequada.',
  },
  {
    question: 'O Solomon vai me indicar carteiras?',
    answer:
      'Não. O foco do Solomon é orientar e informar. Ele pode buscar informações atualizadas de carteiras públicas de grandes instituições para fins de estudo, mas ele não faz recomendações diretas de compra ou venda.',
  },
  {
    question: 'Meus dados e conversas estão seguros?',
    answer:
      'Totalmente. Toda a interação acontece no WhatsApp e é protegida pela criptografia de ponta a ponta do próprio aplicativo. O Solomon nunca solicitará senhas, tokens ou dados de acesso da sua corretora.',
  },
];

// --- Imagens dinâmicas para o mockup ---
const imagesForCycle = [
  {
    src: '/solomon-whats1.webp',
    alt: 'Screenshot do Solomon mostrando o fechamento do mercado.',
  },
  {
    src: '/solomon-whats2.webp',
    alt: 'Screenshot do Solomon analisando um ativo específico.',
  },
  {
    src: '/solomon-whats3.webp',
    alt: 'Screenshot do Solomon respondendo sobre notícias.',
  },
  {
    src: '/teste.webp',
    alt: 'Ilustração do robô Solomon.',
  },
];

// --- Item do acordeão ---
const AccordionItem = ({
  faq,
  isOpen,
  onClick,
}: {
  faq: typeof faqData[0];
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.question}`}
      >
        <span
          className={`text-lg font-medium transition-colors ${
            isOpen ? 'text-cyan-400' : 'text-white'
          }`}
        >
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown
            className={`w-6 h-6 transition-colors ${
              isOpen ? 'text-cyan-400' : 'text-white/50'
            }`}
          />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-answer-${faq.question}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-neutral-300">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Componente Principal ---
const Duvidas = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesForCycle.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full bg-[#04091a] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300">
            Dúvidas Frequentes
          </h2>
          <p className="mt-4 text-lg text-neutral-400 max-w-3xl mx-auto">
            Tudo o que você precisa saber sobre o Solomon antes de começar a transformar seus investimentos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Coluna Esquerda */}
          <div className="flex flex-col">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                faq={faq}
                isOpen={expandedIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>

          {/* Coluna Direita: Imagem dinâmica */}
          <div className="hidden lg:flex sticky top-28 h-[600px] w-full items-center justify-center">
            <div className="relative w-[280px] h-[560px] bg-gray-900/50 border-4 border-gray-700 rounded-[40px] shadow-2xl shadow-cyan-500/10 p-2.5">
              <div className="w-full h-full bg-black rounded-[30px] overflow-hidden">
                <div className="relative w-full h-full">
                  <AnimatePresence>
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={imagesForCycle[currentImageIndex].src}
                        alt={imagesForCycle[currentImageIndex].alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 280px"
                        loading="lazy"
                        priority={false}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Duvidas;
