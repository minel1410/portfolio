"use client";

import React, { useState, useEffect } from "react";
import { MotionConfig, motion } from "framer-motion";
import FeatherIcon from "feather-icons-react";



const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};

const Hamburger = () => {
  const [active, setActive] = useState(false);

  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className="relative h-16 w-12 md:hidden z-50"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-0.5 w-10 bg-Green"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-0.5 w-10 bg-Green"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-0.5 w-5 bg-Green"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>

      <motion.div
        className="fixed top-0 left-0 w-full h-full z-40 flex md:hidden"
        initial={{ x: "-100%" }}
        animate={active ? { x: 0 } : { x: "100%" }}
        transition={{
          ease: "easeOut",
          duration: 0.3,
        }}
      >
        <div className="w-1/4 sm:w-1/2 bg-Navy/30 backdrop-blur-md shadow-lg"></div>
        <div className="w-3/4 sm:w-1/2 bg-LightNavy z-30 h-full flex justify-center items-center">Test123</div>
      </motion.div>
    </MotionConfig>
  );
};

export { Hamburger };
