import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className="paddingY flexCenter flex-col relative">
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className="heading2">
        O que as pessoas <br className="sm:block hidden" /> estão achando?
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className="paragraph text-left max-w-[450px]">
        Completo, acessível e seguro. Com o poder da Inteligência Artificial e do Mercado de Capitais ao seu alcance, você investe 
        com precisão e praticidade. Tudo o que precisa para tomar decisões informadas está em suas mãos.
        </p>
      </div>
    </div>
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
