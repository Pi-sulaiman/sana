"use client";

import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CTA } from "@/sections";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import {Works, WorksList} from "@/app/works/index";

const page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <div className="bg-[#DAAAC2] overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Navbar />
      <Cursor />
      <Works />
      <WorksList />
      <CTA />
      <Footer />
    </div>
  );
};

export default page;
