'use client';

import { useEffect, useState } from 'react';
import FeedbackCard from './FeedbackCard';
import { feedback } from '../constants';

const FeedbackCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % feedback.length);
    }, 4000); // alterna a cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  const currentFeedback = feedback[currentIndex];

  return (
    <section id="clients" className="w-full py-10 px-4 md:px-20">
      <h2 className="text-white text-[26px] md:text-[36px] font-bold mb-8 text-center">
        O que as <span className="text-gradient">pessoas</span> estão achando?
      </h2>

      <div className="flex justify-center transition-all duration-700 ease-in-out">
        <FeedbackCard
          key={currentFeedback.id}
          content={currentFeedback.content}
          name={currentFeedback.name}
          title={currentFeedback.title}
        />
      </div>
    </section>
  );
};

export default FeedbackCarousel;
