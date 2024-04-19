"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { navSlide } from "../utils/motion";
import menu from "../public/images/menu.svg";
import close from "../public/images/close.svg";
import Magnetic from "./Magnetic";
import Link from "next/link";
import { button2 } from "../utils/motion";
import { navbar, links } from "@/constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full fixed flex justify-between items-center md:px-20 sm:px-8 pt-6 z-[20]">
      <Magnetic>
        <Link href="/" className="text-[#e9dfce] text-[20px] cursor-pointer">
          Ахмеджанов
        </Link>
      </Magnetic>

      <div className="z-[100]">
        <Magnetic>
          <Image
            src={toggle ? close : menu}
            onClick={() => setToggle((prev) => !prev)}
            width={40}
            height={40}
            className="z-[20] cursor-pointer"
          />
        </Magnetic>
      </div>

      <motion.div
        variants={navSlide}
        initial="closed"
        animate={toggle ? "open" : "closed"}
        className="fixed bg-[#e9dfce] h-[100vh] w-[100vw] justify-center items-center top-0 left-0 flex flex-col"
      >
        {navbar.map((navbar) => (
          <a
            key={navbar.id}
            href={navbar.path}
            className="my-10 border-[1.5px] border-[#e9dfce] rounded-full w-[400px] h-[100px] flex flex-col overflow-hidden"
          >
            <motion.div variants={button2} whileHover="up" className="h-full">
              <p className="text-[#242527] font-grandslangitalic w-full h-full flex justify-center items-center md:text-[100px] sm:text-[50px]">{navbar.title1}</p>
              <p className="text-[#242527] font-grandslang w-full h-full flex justify-center items-center md:text-[100px] sm:text-[50px]">{navbar.title1}</p>
            </motion.div>
          </a>
        ))}

        <div className="flex flex-row justify-center top-[90%] absolute">
          {links.map((links) => (
            <Magnetic>
              <a
                key={links.id}
                href={links.path}
                target="_blank"
                className="bg-white rounded-full h-[40px] w-[40px] flex justify-center mx-2 hover:bg-[#ccc]"
              >
                <Image src={links.imgUrl} width={20} height={20} className="" />
              </a>
            </Magnetic>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
