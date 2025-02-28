"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn } from "../styles/animations";
import { discount, robot, teste } from "../../public";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className="flex md:flex-row flex-col paddingY">
      <motion.div
        className="flex-1 flexStart flex-col xl:px-0 paddingX"
        variants={slideIn("left", "tween", 0.2, 1.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <Image src={discount} alt="discount" width={32} height={32} priority={true} />
          <p className="paragraph ml-2">
            <span className="text-white">Solomon</span> o 1° Assessor de Investimentos{" "}
            <span className="text-white">com IA</span> do Brasil. 🏆
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Transforme <br className="sm:block hidden" />{" "}
            <span className="text-gradient">sua forma de investir</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          com Solomon.
        </h1>
        <p className="paragraph max-w-[470px] mt-5">
        O primeiro Assessor de Investimentos com Inteligência Artificial, feito para você – seja um investidor experiente ou alguém que está começando agora.
        Tenha o poder da IA junto com uma consultoria personalizada e acessível, projetada para impulsionar seus resultados com segurança e praticidade.
        </p>
      </motion.div>

      <motion.div
        className="flex-1 flexCenter md:my-0 my-10 relative"
        variants={slideIn("right", "tween", 0.2, 1.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Image
          src={teste}
          alt="billing"
          layout="responsive"
          width={500}  // Defina o valor real da largura da imagem
          height={500} // Defina o valor real da altura da imagem
          className="w-full sm:w-[100%] sm:h-auto h-auto relative z-[5]"
          priority={true}
          quality={100}  // Ajuste para 100% de qualidade, se necessário
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </motion.div>

      <div className="ss:hidden flexCenter">
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
