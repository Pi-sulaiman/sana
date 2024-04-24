"use client";

import Image from "next/image";
import rhombus from "../public/images/rhombus.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { textUp } from "@/utils/motion";
import Magnetic from "@/components/Magnetic";
import Link from "next/link";

const Bio = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0, 0.1]);

  return (
    <div className="h-[100vh] w-[100vw] flex justify-around">
      <Image src={rhombus} width={50} height={50} className="absolute mt-20" />
      <div className="flex md:flex-row sm:flex-col mt-80">
        <motion.p
          variants={textUp}
          initial="initial"
          whileInView="enter"
          viewport={{ once: true }}
          className="text-[#4551EE] text-[20px] font-migra font-medium mx-10 md:w-[440px] sm:w-[320px]"
        >
         My name is Sana Shah, and I'm from Mumbai, India. Currently, I work at SS Infotech. I am a creative UI/UX designer and a creative writer with expertise in Figma and other software.
        </motion.p>
        <Magnetic>
          <div className="cursor-pointer border-[1px] border-[#e9dfce] md:p-8 sm:p-10 text-center md:h-[115px] rounded-full mt-10 md:mx-40 sm:mx-32">
            <Link
              href="/about"
              className="text-[#4551EE] text-[20px] font-migrabold"
            >
              PUSH
              <br />
              ME!
            </Link>
          </div>
        </Magnetic>
      </div>
    </div>
  );
};

export default Bio;
