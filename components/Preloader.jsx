"use client";

import { motion } from "framer-motion";
import { slideUp } from "@/utils/motion";
import {curve} from "@/utils/motion"

const Preloader = () => {
  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      animate="animate"
      className="bg-[#e9dfce] h-[100vh] w-[100vw] z-[1000] fixed flex justify-center items-center"
    >
        <>
          <h2 className="text-[#1e2125] text-[20px]">Ахмеджанов</h2>
          <svg>
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
    </motion.div>
  );
};

export default Preloader;
