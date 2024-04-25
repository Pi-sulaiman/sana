"use client";

import { motion } from "framer-motion";
import { slideUp } from "@/utils/motion";
import { curve } from "@/utils/motion"

const Preloader = () => {
  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      animate="animate"
      className="bg-[#3C49EC] h-[100vh] w-[100vw] z-[1000] fixed flex justify-center items-center"
    >
      <>
        <div className="loading">
          <div className="dot"></div>
          <div className="dot2"></div>
        </div>
      </>
    </motion.div>
  );
};

export default Preloader;
