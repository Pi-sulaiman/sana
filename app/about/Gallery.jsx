"use client";

import Image from "next/image";
import { gallery1, gallery2, gallery3 } from "@/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Gallery = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const galleryRight = useTransform(scrollYProgress, [0, 1], [1, 400]);
  const galleryLeft = useTransform(scrollYProgress, [0, 1], [1, -400]);

  return (
    <div ref={container} className="md:h-[200vh] sm:h-[50vh] w-[100vw] flex flex-col justify-center items-center relative">
      <div className="flex mr-[900px] -rotate-12 md:my-2">
        {gallery1.map((gallery1) => (
          <motion.div style={{x: galleryRight}} className="md:w-[500px] md:h-[250px] sm:w-[250px] sm:h-[150px] md:mx-4">
            <Image 
              key={gallery1.id}
              src={gallery1.imgUrl}
              width={1000}
              height={1000}
              className="w-full h-full rounded-[10px]"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex -rotate-12 ml-[500px] md:my-2 relative bottom-32">
        {gallery2.map((gallery2) => (
          <motion.div style={{x: galleryLeft}} className="md:w-[500px] md:h-[250px] sm:w-[250px] sm:h-[150px] md:mx-4 sm:mx-2">
            <Image 
              key={gallery2.id}
              src={gallery2.imgUrl}
              width={1000}
              height={1000}
              className="w-full h-full rounded-[10px]"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex -rotate-12 mr-[500px] md:my-2">
        {gallery3.map((gallery3) => (
          <motion.div style={{x: galleryRight}} className="md:w-[500px] md:h-[250px] sm:w-[250px] sm:h-[150px] md:mx-4 sm:mx-2">
            <Image 
              key={gallery3.id}
              src={gallery3.imgUrl}
              width={1000}
              height={1000}
              className="w-full h-full rounded-[10px]"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
