"use client";

import { soft } from "@/constants";
import { motion } from "framer-motion";
import { scale } from "@/utils/motion";

const Soft = () => {
  return (
    <div className="text-white mx-20 mt-10">
      <h2 className="text-[#cfcfcf] text-[20px] text-center font-degular">
        SOFT
      </h2>
      <div className="mt-4 max-w-[400px] flex flex-wrap gap-4 justify-center flex-row">
        {soft.map((soft) => (
          <motion.p
            variants={scale}
            initial="initial"
            whileInView="enter"
            className="px-4 py-2 text-[#e7e7e7d6] text-[14px] border-[1px] border-[#cfcfcf] border-opacity-25 rounded-[40px] flex justify-center items-center"
          >
            {soft.title}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default Soft;
