"use client";

import React from "react";
import { motion } from "framer-motion";
import FeatherIcon from "feather-icons-react";
import Link from "next/link"; // Import the Link component from Next.js

const LeftPane = () => {
  return (
    <motion.div
      className="z-10 hidden w-1/12 md:flex fixed top-0 left-0 flex-col items-center justify-end bg-Navy h-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Use Link for internal navigation without wrapping <a> */}
        <Link
          href="https://github.com/minel1410"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="text-Slate w-6 h-6 stroke-current transition-all duration-300 ease-in-out transform hover:translate-y-[-5px] hover:cursor-pointer hover:text-Green"
        >
          <FeatherIcon icon="github" strokeWidth="2" />
        </Link>

        {/* External links for social profiles */}
        <Link
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
          className="text-Slate w-6 h-6 stroke-current transition-all duration-300 ease-in-out transform hover:translate-y-[-5px] hover:cursor-pointer hover:text-Green"
        >
          <FeatherIcon icon="instagram" strokeWidth="2" />
        </Link>

        <Link
          href="https://linkedin.com/in/minel-salihagi%C4%87-9ba401300/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="text-Slate w-6 h-6 stroke-current transition-all duration-300 ease-in-out transform hover:translate-y-[-5px] hover:cursor-pointer hover:text-Green"
        >
          <FeatherIcon icon="linkedin" strokeWidth="2" />
        </Link>

        <Link
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter Profile"
          className="text-Slate w-6 h-6 stroke-current transition-all duration-300 ease-in-out transform hover:translate-y-[-5px] hover:cursor-pointer hover:text-Green"
        >
          <FeatherIcon icon="twitter" strokeWidth="2" />
        </Link>


        <div className="w-[1px] h-24 bg-Slate"></div>
      </div>
    </motion.div>
  );
};

export default LeftPane;

const RightPane = () => {
  return (
    <motion.div
      className="hidden md:flex fixed top-0 right-0 w-1/12 flex-col items-center justify-end bg-Navy h-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="flex flex-col items-center gap-8">
        <a
          href="mailto:minelsalihagic@gmail.com"
          className="z-10 text-Slate text-md font-sf-mono rotate-90 mb-24 transition-transform duration-300 ease-in-out transform hover:translate-y-[-5px] hover:cursor-pointer hover:text-Green"
        >
          minelsalihagic@gmail.com
        </a>
        <div className="w-[1px] h-24 bg-Slate"></div>
      </div>
    </motion.div>
  );
};

export { LeftPane, RightPane };
