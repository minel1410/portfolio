"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";




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

const Sidebar = ({ active }) => {
  // Use useEffect to handle scroll locking when the sidebar is active
  useEffect(() => {
    if (active) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling
      document.body.style.overflow = "";
    }

    // Clean up by enabling scroll when the component is unmounted or when `active` changes
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <motion.div
        className={`absolute top-0 left-0 w-full z-20 h-screen flex md:hidden ${
          active ? "opacity-100" : "opacity-0"
        }`}
        initial={{ x: "-100%", opacity: 0 }}
        animate={active ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 }}
        transition={{
          ease: "easeOut",
          duration: 0.3,
        }}
      >
        <div className="w-1/4 sm:w-1/2 bg-Navy/30 backdrop-blur-md"></div>
        <div className="w-3/4 sm:w-1/2 bg-LightNavy z-30 h-full flex justify-center items-center">
          Test123
        </div>
      </motion.div>
    </>
  );
};


export default Sidebar;
