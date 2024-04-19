"use client";

import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import InfiniteText from "@/components/InfiniteText";
import Footer from "@/components/Footer";
import { Hero, Bio, Portfolio, CTA } from "../sections";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

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
    <div className="bg-[#1e2125] overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Navbar />
      <Cursor />
      <Hero />
      <Bio />
      <InfiniteText />
      <Portfolio />
      <CTA />
      <Footer />
    </div>
  );
};

export default page;
