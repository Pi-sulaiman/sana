"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { textUp } from "@/utils/motion";

const Meet = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const parallax = useTransform(scrollYProgress, [0, 1], [1, -200]);

  return (
    <div
      ref={container}
      className="h-[100vh] w-[100vw] flex md:flex-row sm:flex-col justify-center items-center"
    >
      <motion.div style={{ y: parallax }} className="mx-10 mt-60">
        <Image
          src="/images/me.jpg"
          width={1000}
          height={1000}
          className="w-[280px] h-[300px] rounded-[50px]"
        />
      </motion.div>
      <motion.div
        variants={textUp}
        initial="initial"
        whileInView="enter"
        viewport={{ once: true }}
        className="text-[#4551EE] text-[20px] font-migra mx-10 md:w-[400px] sm:w-[340px]"
      >
        <p>
          Nice to <span className="font-migraitalic">meet you</span> all.
        </p>

        <p className="mt-4">
        I'm Sana Shah, your curator of creativity at SS Infotech. From designing delightful UI/UX experiences to penning enchanting narratives, I sprinkle magic into every pixel and word.         
        </p>

        <p className="mt-4">
        Nestled within the vibrant realm of SS Infotech, I collaborate with a symphony of talented minds, weaving dreams into digital reality. It's a pleasure to cross paths with you and embark on this wondrous voyage of imagination!        </p>
      </motion.div>
    </div>
  );
};

export default Meet;
