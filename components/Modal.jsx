"use client"

import { useEffect, useRef } from "react";
import Image from "next/image"
import { projects } from "@/constants";
import { motion } from "framer-motion";
import { scaleAnimation } from "@/utils/motion";
import gsap from "gsap";

const Modal = ({modal}) => {
  const {active, index} = modal;
  const container = useRef(null);

  useEffect( () => {
    const moveContainerX = gsap.quickTo(container.current, "left", {duration: 0.8, ease: "power3"})
    const moveContainerY = gsap.quickTo(container.current, "top", {duration: 0.8, ease: "power3"})

    window.addEventListener("mousemove", (e) => {
      const {clientX, clientY} = e;
      moveContainerX(clientX);
      moveContainerY(clientY);
    })
  }, [])

  return (
    <motion.div ref={container} variants={scaleAnimation} initial="initial" animate={active ? "open" : "closed"} className="modalContainer">
      <div style={{top: index * -100 + "%"}} className="modalSlider">
        {
          projects.map((projects, index) => {
            return <div key={`modal_${index}`} className="modal">
              <Image
                src={projects.imgUrl}
                width={500}
                height={0}
                className="rounded-[20px]"
                alt="image"
              />
            </div>
          })
        }
      </div>
    </motion.div>
  )
}

export default Modal
