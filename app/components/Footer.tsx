import { logo } from "../../public";
import Image from "next/image";

const Footer = () => (
  <section className="flex flex-col items-center justify-center py-10 px-6 bg-primary text-white">
    {/* Logo e frase */}
    <div className="flex flex-col items-center mb-6">
      <Image
        src={logo}
        alt="Solomon"
        width={200}
        height={60}
        priority
        className="object-contain mb-4"
      />
      <p className="text-center text-dimWhite text-base max-w-md">
        Uma nova maneira de investir com facilidade, segurança e confiança.
      </p>
    </div>

    {/* Direitos reservados */}
    <p className="text-sm text-dimWhite text-center border-t border-gray-700 pt-4 w-full max-w-4xl">
      Copyright Ⓒ VIBE. All Rights Reserved.
    </p>
  </section>
);

export default Footer;
