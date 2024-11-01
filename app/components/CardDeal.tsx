"use client";
import { motion } from "framer-motion";
import { teste3 } from "../../public";
import { slideIn } from "../styles/animations";
import Button from "./Button";
import Image from "next/image";

const CardDeal = () => (
  <section className="section">
    <motion.div
      className="sectionInfo"
      variants={slideIn("left", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="heading2">
        Descubra a melhor forma <br className="sm:block hidden" /> de Potencializar seus Investimentos.
      </h2>
      <p className="paragraph max-w-[470px] mt-5">
      Primeiro, Solomon identifica seu perfil de investidor. Em seguida, ele recebe dados de seus investimentos 
      e traz informações atualizadas do mercado – desde tendências em ativos até as principais notícias. 
      Se você está começando, Solomon orienta e explica de forma didática cada dúvida, ajudando você a entender melhor os ativos e o mundo dos investimentos..
      </p>

      <Button styles={`mt-10`} />
    </motion.div>

    <motion.div
      className="sectionImg"
      variants={slideIn("right", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Image
        src={teste3}
        width={0}
        height={0}
        alt="billing"
        className="w-[100%] h-[100%]"
      />
    </motion.div>
  </section>
);

export default CardDeal;
