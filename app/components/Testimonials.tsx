import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className="w-full py-20 px-6 md:px-16 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] flex flex-col items-center relative"
  >
    {/* Fundo com gradiente suave */}
    <div className="absolute w-[60%] h-[60%] -right-[50%] bottom-40 rounded-full blue__gradient" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-10 relative">
      <h2 className="text-white font-poppins font-bold text-[32px] md:text-[42px] leading-tight text-center md:text-left">
        <span className="text-gradient">O que as pessoas</span>{" "}
        <br className="sm:block hidden" /> estão achando?
      </h2>
      <div className="w-full md:mt-0 mt-6 max-w-[500px]">
        <p className="paragraph text-left text-dimWhite">
          Completo, acessível e seguro. Com o poder da Inteligência Artificial e do Mercado de Capitais ao seu alcance, você investe 
          com precisão e praticidade. Tudo o que precisa para tomar decisões informadas está em suas mãos.
        </p>
      </div>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl relative">
      {feedback.slice(0, 6).map((card, index) => (
        <FeedbackCard key={card.id} {...card} highlight={index === feedback.length - 1} />
      ))}
    </div>
  </section>
);

export default Testimonials;
