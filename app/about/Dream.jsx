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
        <span className="font-grandslangitalic">dream</span> for success in career,
        and keeping an eye at the{" "}
        <span className="font-grandslangitalic"> future</span>.
      </motion.p>
      <motion.div
        style={{ y: parallax }}
        className="flex flex-col md:w-[370px] sm:w-[300px] opacity-[0.8] mb-60 mx-20"
      >
        <p>
        Hey there, I'm Sana Shah, a creative powerhouse at SS Infotech in Mumbai. I mix pixels with puns and a lot of caffeine to craft delightful user experiences and stories that spark joy. Join me on this wild ride of creativity and coffee-fueled adventures!
        </p>
        <p className="mt-4">
        I juggle pixels, puns, and the occasional spilled latte to create experiences that are as delightful as a well-timed punchline. Let's embark on this caffeinated journey together—where every click is a chuckle and every design is a delightful surprise!
        </p>
      </motion.div>
    </div>
  );
};

export default Dream;
