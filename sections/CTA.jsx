"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Button from "@/components/Button";

const CTA = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const textMove1 = useTransform(scrollYProgress, [0, 1], [1, 50]);
  const textMove2 = useTransform(scrollYProgress, [0, 1], [1, 100]);
  const textMove3 = useTransform(scrollYProgress, [0, 1], [1, -100]);

  return (
    <div
      ref={container}
      className="h-[100vh] w-[100vw] flex flex-col justify-center items-center md:leading-[140px] sm:leading-[70px]"
    >
      <div className="flex items-center">
        <motion.h2
          style={{ x: textMove1 }}
          className="text-[#e9dfce] md:text-[50px] sm:text-[20px] font-migraitalic md:leading-[45px] sm:leading-[25px]"
        >
          Let's
          <br />
          create
        </motion.h2>
        <motion.h1
          style={{ x: textMove2 }}
          className="text-[#e9dfce] md:text-[140px] sm:text-[65px] font-migraitalic"
        >
          something
        </motion.h1>
      </div>
      <div>
        <h1 className="text-[#e9dfce] md:text-[150px] sm:text-[70px] font-migraitalic">
          MEANINGFUL
        </h1>
      </div>
      <motion.div
        style={{ x: textMove3 }}
        className="flex items-center relative md:top-[-40px] sm:top-[-20px]"
      >
        <h2 className="text-[#e9dfce] md:text-[50px] sm:text-[20px] font-migrabold">TOGETHER</h2>
        <h2 className="text-[#e9dfce] md:text-[40px] sm:text-[15px] font-migraitalic ml-2">
          (but not Forever)
        </h2>
      </motion.div>

      <Button/>
    </div>
  );
};

export default CTA;
