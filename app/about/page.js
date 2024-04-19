"use client";

import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CTA } from "@/sections";
import {Interaction, Meet, Dream, Gallery, Skills } from "@/app/about/index";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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
    <div className="bg-[#1e2125] overflow-hidden relative">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Navbar />
      <Cursor />
      <Interaction />
      <Meet />
      <Dream />
      <Gallery />
      <Skills />
      <CTA />
      <Footer />
    </div>
  );
};

export default page;
