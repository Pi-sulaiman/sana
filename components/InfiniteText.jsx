"use client"

import gsap from "gsap"
import { useEffect, useRef } from "react"

const InfiniteText = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect( () => {
    requestAnimationFrame(animation);
  }, [])

  const animation = () => {
    if(xPercent <= -100) {
        xPercent = 0;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    xPercent += 0.050 * direction;
    requestAnimationFrame(animation);
  }
  return (
    <div className="main">
        <div className="sliderContainer">
            <div className="slider">
                <p ref={firstText} className="sliderText font-grandslangitalic md:text-[240px] sm:text-[120px]">PORTFOLIO -</p>
                <p ref={secondText} className="sliderText font-grandslangitalic md:text-[240px] sm:text-[120px]">PORTFOLIO -</p>
            </div>
        </div>
    </div>
  )
}

export default InfiniteText
