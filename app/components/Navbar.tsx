"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { navVariants } from "../styles/animations";
import Image from "next/image";
import { close, logo, menu } from "../../public";

const navLinks = [
  { id: "home", title: "Início" },
  { id: "Sobre", title: "Sobre" },       // será usado em <section id="sobre">
  { id: "clients", title: "Feedback" },  // Testimonials
  { id: "Produto", title: "Produto" },   // billing.tsx
];

const Navbar = () => {
  const [active, setActive] = useState("Início");
  const [toggle, setToggle] = useState(false);

  return (
    <motion.nav
      className="w-full flex py-6 justify-between items-center navbar"
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Image src={logo} alt="logo Solomon" width={124} height={32} loading="eager" />

      {/* Desktop */}
      <div className="hidden sm:flex items-center gap-10 ml-auto">
        <ul className="flex list-none items-center gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-cyan-400 ${
                active === nav.title ? "text-cyan-400" : "text-white"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Botão extra */}
        <a
          href="https://wa.me/5514988130629?text=Ol%C3%A1%2C%20quero%20testar%20o%20Solomon%21"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-white font-medium px-5 py-2 rounded-full text-sm shadow-md transition-all duration-300"
        >
          Falar com Especialista
        </a>
      </div>

      {/* Mobile */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          width={28}
          height={28}
          priority
          className="object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />

        {toggle && (
          <div className="p-6 bg-black-gradient absolute top-20 right-4 w-[200px] rounded-xl z-50">
            <ul className="flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins text-[16px] cursor-pointer ${
                    active === nav.title ? "text-cyan-400" : "text-white"
                  }`}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(false);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li>
                <a
                  href="https://wa.me/5514988130629?text=Ol%C3%A1%2C%20quero%20testar%20o%20Solomon%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm bg-gradient-to-r from-cyan-400 to-blue-600 px-4 py-2 rounded-full block text-center"
                >
                  Falar com Especialista
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
