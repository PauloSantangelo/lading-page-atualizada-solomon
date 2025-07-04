'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { feedback } from '../constants';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else {
        setCardsToShow(3);
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        (prev + cardsToShow) % feedback.length
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [cardsToShow]);

  const visibleFeedback =
    currentIndex + cardsToShow <= feedback.length
      ? feedback.slice(currentIndex, currentIndex + cardsToShow)
      : [
          ...feedback.slice(currentIndex),
          ...feedback.slice(0, (currentIndex + cardsToShow) % feedback.length),
        ];

  return (
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

      {/* Cartões com transição automática */}
      <div className="flex gap-6 transition-all duration-700 ease-in-out w-full max-w-7xl">
        {visibleFeedback.map((card, index) => (
          <FeedbackCard
            key={card.id}
            {...card}
            highlight={index === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
