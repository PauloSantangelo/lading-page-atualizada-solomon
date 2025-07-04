'use client';

import { motion } from 'framer-motion';
import { zoomIn } from '../styles/animations';
import { quotes } from '../../public';
import Image from 'next/image';

interface feedbackCardPropTypes {
  content: string;
  name: string;
  title: string;
  highlight?: boolean; // ✅ Adicionado aqui
}

const FeedbackCard = ({
  content,
  name,
  title,
  highlight = false, // ✅ valor padrão
}: feedbackCardPropTypes) => (
  <motion.div
    className={`
      group flex flex-col justify-between px-6 py-6 rounded-[20px] w-full max-w-[370px]
      transition-colors duration-300 border border-transparent
      ${highlight ? 'bg-[#1f2937] border-cyan-500 scale-[1.03]' : 'bg-[#111827] hover:border-cyan-500'}
    `}
    variants={zoomIn}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    <Image
      src={quotes}
      alt="quotes"
      width={28}
      height={18}
      className="object-contain mb-4"
      loading="lazy"
    />
    <p className="font-poppins font-normal text-base leading-relaxed text-white mb-6">
      {content}
    </p>
    <div className="mt-auto">
      <h1 className="font-poppins font-semibold text-lg leading-snug text-white">
        {name}
      </h1>
      <p className="font-poppins font-normal text-sm leading-[20px] text-dimWhite">
        {title}
      </p>
    </div>
  </motion.div>
);

export default FeedbackCard;
