"use client";

import React, { useState } from "react";
import LoadingAnimation from "./components/loadAnimation";
import { motion } from "framer-motion";
import "./globals.css";

export default function Home() {
  const [isAnimationFinished, setAnimationFinished] = useState(false);

  return (
    <>
      {!isAnimationFinished && (
        <LoadingAnimation
          onAnimationFinish={() => setAnimationFinished(true)}
        />
      )}
      {isAnimationFinished && (
        <>
          <p className="text-md text-Green font-sf-mono">Hi, my name is</p>
          <div className="text-5xl font-calibre text-White font-semibold mt-8">
            Minel Salihagić.
          </div>
          <div className="text-4xl font-calibre text-Slate font-semibold mt-3">
            I build things for the web
          </div>
          <div className="text-md text-Slate font-calibre font-normal mt-5">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at Upstatement.
          </div>
          <motion.div className="p-4 text-Green font-sf-mono mt-10 border rounded-md border-Green transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[5px_5px_0px_0px_rgba(100,255,218,1)] cursor-pointer">
            Check out my course!
          </motion.div>
        </>
      )}
    </>
  );
}
