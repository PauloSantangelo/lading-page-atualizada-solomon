"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../styles/animations";
import { Sobre } from "../constants";
import { BrainCircuit } from "lucide-react";

interface featureCardProps {
  icon: string;
  title: string;
  content: string;
  index: number;
}

const FeatureCard = ({ icon, title, content, index }: featureCardProps) => (
  <div
    className={`flex p-6 rounded-[20px] ${
      index !== Sobre.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div className="w-[64px] h-[64px] rounded-full flexCenter bg-dimBlue">
      <Image
        src={icon}
        alt="icon"
        width={0}
        height={0}
        className="w-[50%] h-[50%] object-contain"
        priority={true}
      />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h1 className="font-poppins font-semibold text-white text-[16px] md:text-[18px] leading-[22px] mb-1">
        {title}
      </h1>
      <p className="font-poppins font-normal text-dimWhite text-[14px] md:text-[16px] leading-[22px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="Sobre" className="section">
    <motion.div
      className="sectionInfo"
      variants={slideIn("left", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="font-poppins font-bold text-white text-[22px] sm:text-[32px] md:text-[40px] leading-tight md:leading-[56px]">
        Inteligência artificial para <span className="text-gradient">investidores de verdade</span><br className="sm:block hidden" />
        com dados atualizados e acesso em tempo real.
      </h2>

      <p className="paragraph text-sm md:text-base leading-tight md:leading-[26px] text-white/90 max-w-[95%] md:max-w-[480px] mt-5">
        Receba as principais notícias da semana com base no seu perfil de interesse, acesse dados atualizados como dólar, bitcoin e indicadores de ações, e filtre carteiras públicas de grandes instituições caso deseje comparar estratégias. Tudo de forma prática, rápida e inteligente.
      </p>

      <div className="mt-8">
        <a
          href="https://wa.me/SEUNUMERO"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-[#0f172a] text-sm md:text-lg font-semibold bg-[#00f6ff] hover:bg-[#00e0e0] transition px-6 py-3 md:px-8 md:py-4 rounded-xl shadow-xl"
        >
          <BrainCircuit className="w-5 h-5 md:w-6 md:h-6" />
          Comece a investir com IA
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
          <FeatureCard key={feature.id} {...feature} index={index} />
        </motion.div>
      ))}
    </div>
  </section>
);

export default Business;
