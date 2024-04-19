"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { textUp } from "@/utils/motion";
import { useRef } from "react";

const Dream = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const parallax = useTransform(scrollYProgress, [0, 1], [1, 200]);

  return (
    <div
      ref={container}
      className="md:h-[100vh] sm:h-[150vh] w-[100vw] flex md:flex-row sm:flex-col justify-center items-center text-[#e9dfce] font-migra"
    >
      <motion.p
        variants={textUp}
        initial="initial"
        whileInView="enter"
        viewport={{ once: true }}
        className="text-[30px] md:w-[420px] sm:w-[340px] md:mb-80 mx-20"
      >
        I am a curious person, living my{" "}
        <span className="font-grandslangitalic">dream</span> freelance career,
        and keeping an{" "}
        <span className="font-grandslangitalic">eye at the future</span>.
      </motion.p>
      <motion.div
        style={{ y: parallax }}
        className="flex flex-col md:w-[370px] sm:w-[300px] opacity-[0.8] mb-60 mx-20"
      >
        <p>
          I live in the great steppe of Kazakhstan. Spending my days learning,
          practicing, making mistakes and starting again.
        </p>
        <p className="mt-4">
          My only reason to do all of it is my family. I knew, that it isn't so
          fast to learn it and find a job. But now I have a lot of experience
          already and I make cool projects like this one. So, everything is
          ahead.
        </p>
      </motion.div>
    </div>
  );
};

export default Dream;
