"use client"

import Hard from "@/components/Hard"
import Soft from "@/components/Soft"

const Skills = () => {
  return (
    <div className="md:h-[100vh] sm:h-[150vh] w-[100vw] flex flex-col justify-center items-center">
      <h1 className="text-[#e7e7e7d6] text-[25px] font-degular">Personal Skills</h1>
      <div className="flex md:flex-row sm:flex-col">
        <Soft/>
        <Hard/>
      </div>
    </div>
  )
}

export default Skills
