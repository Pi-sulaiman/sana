"use client";

import { motion } from "framer-motion";
import { button } from "@/utils/motion";
import Magnetic from "./Magnetic";

const Button = () => {
  return (
    <Magnetic>
      <a href="mailto:akhmedzhanovmohammed@gmail.com" className="border-[1.5px] border-[#e9dfce] rounded-full w-[200px] h-[50px] flex flex-col overflow-hidden">
        <motion.div variants={button} whileHover="up" className="h-full">
          <p className="bg-white text-[#242527] font-degular w-full h-full flex justify-center items-center">
            CONTACT ME &#x1F60E;
          </p>
          <p className="bg-[#242527] text-white font-degular w-full h-full flex justify-center items-center">
            CONTACT ME &#x1F60E;
          </p>
        </motion.div>
      </a>
    </Magnetic>
  );
};

export default Button;
