"use client";

import { hard } from "@/constants";
import { motion } from "framer-motion";
import { scale } from "@/utils/motion";

const Hard = () => {
  return (
    <div className="text-white mx-20 mt-10">
      <h2 className="text-[#4551EE] text-[20px] text-center font-degular">
        HARD
      </h2>
      <div className="mt-4 max-w-[400px] flex flex-wrap gap-4 justify-center flex-row">
        {hard.map((hard) => (
          <motion.p variants={scale} initial="initial" whileInView="enter" className="px-4 py-2 text-[#4551EE] text-[14px] border-[1px] border-[#4551EE] border-opacity-25 rounded-[40px] flex justify-center items-center">
            {hard.title}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default Hard;
