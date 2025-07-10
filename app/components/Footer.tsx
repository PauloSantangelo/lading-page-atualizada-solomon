import Image from "next/image";
import { logo } from "../../public";

const Footer = () => (
  <footer className="flex flex-col items-center justify-center py-10 px-6 bg-primary text-white">
    {/* Logo e frase */}
    <div className="flex flex-col items-center mb-6">
      <Image
        src={logo}
        alt="Logo Solomon"
        width={200}
        height={60}
        priority
        fetchPriority="low"
        quality={85}
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
  </footer>
);

export default Footer;
