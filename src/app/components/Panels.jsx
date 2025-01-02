"use client";

import React from "react";
import { motion } from "framer-motion";
import FeatherIcon from "feather-icons-react";
import Link from "next/link";

const LeftPane = () => {
  return (
    <motion.aside
      className="z-10 hidden w-1/12 md:flex fixed top-0 left-0 flex-col items-center justify-end bg-Navy h-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <nav
        className="flex flex-col items-center gap-8"
        aria-label="Social Media Links"
      >
        <Link
          href="https://github.com/minel1410"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="text-Slate w-6 h-6 stroke-current transition-all duration-300 ease-in-out transform hover:translate-y-[-5px] hover:cursor-pointer hover:text-Green"
        >
          <FeatherIcon icon="github" strokeWidth="2" />
        </Link>

        <Link
          href="https://instagram.com/minel.salihagic"
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

        {/* Separator Line */}
        <hr className="w-[1px] h-24 bg-Slate" />
      </nav>
    </motion.aside>
  );
};

const RightPane = () => {
  return (
    <motion.aside
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
          aria-label="Send an email to Minel Salihagić"
          title="Send an email to Minel Salihagić"
        >
          minelsalihagic@gmail.com
        </a>

        {/* Separator Line */}
        <div className="w-[1px] h-24 bg-Slate"></div>
      </div>
    </motion.aside>
  );
};

export { LeftPane, RightPane };
