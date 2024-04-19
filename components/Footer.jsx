"use client";

import { links } from "@/constants";
import Image from "next/image";
import Magnetic from "./Magnetic";

const Footer = () => {
  return (
    <div className="h-[20vh] w-[100vw] flex justify-between items-center md:flex-row sm:flex-col">
      <div className="flex flex-row ml-10 justify-center sm:mr-[40px] sm:my-2">
        {links.map((links) => (
          <Magnetic>
            <a
              key={links.id}
              href={links.path}
              target="_blank"
              className="bg-white rounded-full h-[40px] w-[40px] flex justify-center mx-2 hover:bg-[#ccc]"
            >
              <Image src={links.imgUrl} width={20} height={20} className="" />
            </a>
          </Magnetic>
        ))}
      </div>

      <div className="sm:my-2 md:mr-28">
        <p className="text-white text-[10px] font-degular">
          &#x00A9; Ахмеджанов 2024
        </p>
      </div>

      <div className="md:mr-14 sm:my-2">
        <Magnetic>
          <a href="/resume/cv.docx" download className="text-white font-degular">DOWNLOAD RESUME</a>
        </Magnetic>
      </div>
    </div>
  );
};

export default Footer;
