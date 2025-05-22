import Button from "./Button";

const CTA = () => (
  <section className="flexCenter marginY padding sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow">
    <div className="flex-1 flex flex-col">
      <h2 className="text-white font-bold text-[24px] sm:text-[32px] leading-[36px] sm:leading-[48px]">
        Fale agora com um especialista Solomon e transforme sua forma de investir.
      </h2>
      <p className="text-dimWhite text-[14px] sm:text-[16px] leading-[24px] sm:leading-[28px] max-w-[470px] mt-5">
        Suporte personalizado, decisões seguras e o poder da tecnologia ao seu lado.
      </p>
    </div>

    <div className="flexCenter sm:ml-10 ml-0 sm:mt-0 mt-10">
      <Button styles="mt-5 sm:mt-10" />
    </div>
  </section>
);

export default CTA;
