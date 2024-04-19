"use client";

import { projects } from "@/constants";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Portfolio = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
  });
  const parallaxImage = useTransform(
    scrollYProgress,
    [0, 1],
    ["300%", "-100%"]
  );
  const parallaxText = useTransform(scrollYProgress, [0, 1], ["300%", "-100%"]);

  return (
    <div className="md:h-[300vh] sm:h-[200vh] w-[100vw] flex flex-col justify-center items-center">
      {projects.map((projects) => (
        <a
          key={projects.id}
          href={projects.path}
          target="_blank"
          className={projects.css}
        >
          <motion.div style={{ y: parallaxImage }}>
            <Image
              src={projects.imgUrl}
              width={1000}
              height={1000}
              className="rounded-[20px] md:w-[500px] md:h-[350px] sm:w-[300px] sm:h-[200px]"
            />
          </motion.div>
          <motion.div style={{ y: parallaxText }} className="absolute">
            <div className="text-[#e9dfce] md:text-[100px] sm:text-[50px] font-grandslang">
              {projects.h1}
            </div>
            <div className="text-[#e9e9e9] md:text-[18px] sm:text-[14px] font-degular leading-[1px]">
              {projects.h2}
            </div>
          </motion.div>
        </a>
      ))}
    </div>
  );
};

export default Portfolio;
