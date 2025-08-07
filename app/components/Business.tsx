"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../styles/animations";
import { Sobre } from "../constants";
import { BrainCircuit } from "lucide-react";

interface FeatureCardProps {
  icon: string;
  title: string;
  content: string;
  index: number;
}

const FeatureCard = ({ icon, title, content, index }: FeatureCardProps) => (
  <div
    className={`feature-card flex p-5 rounded-2xl ${
      index !== Sobre.length - 1 ? "mb-6" : "mb-0"
    }`}
    role="group"
    aria-labelledby={`feature-title-${index}`}
  >
    <div className="w-[56px] h-[56px] rounded-full flexCenter bg-cyan-500/10">
      <Image
        src={icon}
        alt=""
        width={0}
        height={0}
        className="w-[50%] h-[50%] object-contain"
        priority
      />
    </div>
    <div className="flex-1 flex flex-col ml-4">
      <h3
        id={`feature-title-${index}`}
        className="font-semibold text-white text-[15px] md:text-[17px] mb-1"
      >
        {title}
      </h3>
      <p className="text-white/70 text-sm leading-snug">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section
    id="Sobre"
    className="section scroll-mt-20"
    aria-labelledby="business-heading"
  >
    <motion.div
      className="sectionInfo"
      variants={slideIn("left", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2
        id="business-heading"
        className="font-bold text-white text-[22px] sm:text-[32px] md:text-[38px] leading-tight md:leading-[50px]"
      >
        Clareza e velocidade no que realmente importa.
        <br className="sm:block hidden" />
        <span className="text-gradient">Tudo direto no seu WhatsApp.</span>
      </h2>

      <p className="text-white/80 text-sm md:text-base leading-tight max-w-[90%] md:max-w-[460px] mt-4">
        O Solomon te envia só o que interessa: alertas inteligentes, dados ao vivo e oportunidades. Sem ruído. Sem distração.
      </p>

      <div className="mt-8">
        <a
          href="https://pay.solomonchat.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#0f172a] text-sm md:text-base font-semibold bg-[#00f6ff] hover:bg-[#00e0e0] transition px-6 py-3 md:px-8 md:py-4 rounded-xl shadow-xl"
        >
          <BrainCircuit className="w-5 h-5 md:w-6 md:h-6" />
          Ative seu Agente de investimentos
        </a>
      </div>
    </motion.div>

    <div className="sectionImg flex-col mt-10 md:mt-0">
      {Sobre.map((feature, index) => (
        <motion.div
          key={feature.id}
          variants={fadeIn("left", "spring", index * 0.5, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <FeatureCard {...feature} index={index} />
        </motion.div>
      ))}
    </div>
  </section>
);

export default Business;
