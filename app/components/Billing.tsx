"use client";
import { bill } from "../../public";
import { slideIn } from "../styles/animations";
import Image from "next/image";
import { motion } from "framer-motion";

const Billing = () => (
  <section id="Produto" className="sectionReverse">
    <motion.div
      className="sectionImgReverse"
      variants={slideIn("left", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="relative w-full h-full z-[5]">
        <Image
          src={bill}
          alt="billing"
          fill
          className="object-contain"
          quality={70}
          priority={false}
        />
      </div>

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </motion.div>

    <motion.div
      className="sectionInfo"
      variants={slideIn("right", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="heading2">
        Acompanhamento <br className="sm:block hidden" /> Direto pelo WhatsApp
      </h2>
      <p className="paragraph max-w-[470px] mt-5">
        Tenha acesso à mentoria e ao acompanhamento do seu assessor diretamente pelo WhatsApp. 
        Registre seus ativos na plataforma, acompanhe tudo em tempo real e receba atualizações personalizadas do Solomon. 
        Receba orientações, tire suas dúvidas e visualize suas oportunidades de investimento tanto na plataforma quanto no app que você já usa no dia a dia. 
        Mais praticidade, sem complicações – é só enviar uma mensagem e a inteligência do Solomon está à sua disposição.
      </p>
    </motion.div>
  </section>
);

export default Billing;
