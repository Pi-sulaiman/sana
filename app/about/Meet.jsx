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
        className="text-[#e9dfce] text-[20px] font-migra mx-10 md:w-[400px] sm:w-[340px]"
      >
        <p>
          Nice to <span className="font-migraitalic">meet you</span> all.
        </p>

        <p className="mt-4">
          My name is Mohammed Akhmedzhanov and I'm a Frontend Developer. I
          started working on UIs with my business idea called{" "}
          <span className="migrabold">Ахмеджанов</span>.
        </p>

        <p className="mt-4">
          I am currently working at{" "}
          <span className="font-migrabold">Ахмеджанов</span>, taking care of the
          design, sharing ideas with amazing talented people.
        </p>
      </motion.div>
    </div>
  );
};

export default Meet;
