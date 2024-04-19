"use client";

import Project from "@/components/Project";
import Modal from "@/components/Modal";
import { works } from "@/constants";
import { useState } from "react";

const WorksList = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
      <div className="h-[220vh] w-[100vw]">
        {
          works.map((works, index) => {
            return <a href={works.path} target="_blank">
              <Project key={index} index={index} h1={works.h1} h2={works.h2} setModal={setModal}/>
            </a>
          })
        }
        
        <Modal modal={modal} works={works} />
      </div>
  );
};

export default WorksList;
