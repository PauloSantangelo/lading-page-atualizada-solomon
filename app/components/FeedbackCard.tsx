import { motion } from "framer-motion";
import { zoomIn } from "../styles/animations";
import { quotes } from "../../public";
import Image, { StaticImageData } from "next/image";

interface feedbackCardPropTypes {
  content: string;
  name: string;
  title: string;
  img: string | StaticImageData;
  highlight?: boolean;
}

const FeedBackCard = ({
  content,
  name,
  title,
  img,
}: feedbackCardPropTypes) => (
  <motion.div
    className={`
      group flex justify-between flex-col px-10 py-8 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5
      bg-[#111827] transition-colors duration-300
      border border-transparent hover:border-cyan-500
    `}
    variants={zoomIn}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    <Image
      src={quotes}
      alt="quotes"
      width={28}
      height={18}
      className="object-contain"
      loading="lazy"
    />
    <p className="font-poppins font-normal text-base leading-relaxed text-white my-6">
      {content}
    </p>
    <div className="flex">
      <Image
        src={img}
        alt={name}
        width={48}
        height={48}
        className="rounded-full object-contain"
        loading="lazy"
      />
      <div className="flex flex-col ml-4">
        <h1 className="font-poppins font-semibold text-lg leading-snug text-white">
          {name}
        </h1>
        <p className="font-poppins font-normal text-sm leading-[20px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </motion.div>
);

export default FeedBackCard;
