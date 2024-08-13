"use client";

import "./globals.css";
import FeatherIcon from "feather-icons-react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShow(false); // Skrolujete nadole, skrijete navigaciju
    } else {
      setShow(true); // Skrolujete nagore, prikažite navigaciju
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-Navy h-24 z-20 text-Green px-6 md:px-12 flex items-center justify-between fixed top-0 w-full transition-all duration-300 ease-in-out ${
        show
          ? lastScrollY > 100
            ? "shadow-xl opacity-95"
            : ""
          : "-translate-y-full"
      }`}
    >
      <motion.div
        className="text-3xl text-Green"
        initial={{ opacity: 0, y: -20 }} // Spuštanje odozgo
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 3.4 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        M
      </motion.div>

      <div className="gap-7 items-center font-sf-mono text-Green hidden md:flex">
        <motion.div
          className="text-sm flex items-center gap-2"
          initial={{ opacity: 0, y: -20 }} // Spuštanje odozgo
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 3.5 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <p className="text-Green">01.</p>
          <p className="text-LightestSlate">About</p>
        </motion.div>
        <motion.div
          className="text-sm flex items-center gap-2"
          initial={{ opacity: 0, y: -20 }} // Spuštanje odozgo
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 3.6 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <p className="text-Green">02.</p>
          <p className="text-LightestSlate">Projects</p>
        </motion.div>
        <motion.div
          className="text-sm flex items-center gap-2"
          initial={{ opacity: 0, y: -20 }} // Spuštanje odozgo
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 3.7 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <p className="text-Green">03.</p>
          <p className="text-LightestSlate">Skills</p>
        </motion.div>
        <motion.div
          className="text-sm flex items-center gap-2"
          initial={{ opacity: 0, y: -20 }} // Spuštanje odozgo
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 3.8 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <p className="text-Green">04.</p>
          <p className="text-LightestSlate">Contact</p>
        </motion.div>
        <motion.div
          className="p-2 border rounded-md border-Green transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[5px_5px_0px_0px_rgba(100,255,218,1)] cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 3.9 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          Resume
        </motion.div>
      </div>
    </nav>
  );
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-Navy w-full flex flex-col">
        <Navbar />
        <div className="w-full flex h-[400vh]">
          <motion.div
            className="z-10 hidden md:flex fixed top-0 left-0 w-1/12 flex-col items-center justify-end bg-Navy h-full
          "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 3.9 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="flex flex-col items-center gap-8">
              <FeatherIcon
                icon="github"
                className="text-Slate w-6 h-6 stroke-current transition-all duration-300 ease-in-out transform hover:translate-y-[-5px] hover:cursor-pointer hover:text-Green"
                strokeWidth="2"
              />
              <FeatherIcon
                icon="instagram"
                className="text-Slate w-6 h-6 stroke-current transition-all duration-300 ease-in-out transform hover:translate-y-[-5px] hover:cursor-pointer hover:text-Green"
                strokeWidth="2"
              />
              <FeatherIcon
                icon="linkedin"
                className="text-Slate w-6 h-6 stroke-current transition-all duration-300 ease-in-out transform hover:translate-y-[-5px] hover:cursor-pointer hover:text-Green"
                strokeWidth="2"
              />
              <FeatherIcon
                icon="twitter"
                className="text-Slate w-6 h-6 stroke-current transition-all duration-300 ease-in-out transform hover:translate-y-[-5px] hover:cursor-pointer hover:text-Green"
                strokeWidth="2"
              />
              <FeatherIcon
                icon="facebook"
                className="text-Slate w-6 h-6 stroke-current transition-all duration-300 ease-in-out transform hover:translate-y-[-5px] hover:cursor-pointer hover:text-Green"
                strokeWidth="2"
              />
              <div className="w-[1px] h-24 bg-Slate"></div>
            </div>
          </motion.div>

          <div className="w-full md:w-10/12 md:ml-[8.33%] h-[100vh] px-14 md:px-24 flex flex-col items-start justify-center">
            {children}
          </div>

          <motion.div
            className="hidden md:flex fixed top-0 right-0 w-1/12 flex-col items-center justify-end bg-Navy h-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 3.9 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="flex flex-col items-center gap-8">
              <p className="z-10 text-Slate text-md font-sf-mono rotate-90 mb-24 transition-transform duration-300 ease-in-out transform hover:translate-y-[-5px] hover:cursor-pointer hover:text-Green">
                minelsalihagic@gmail.com
              </p>
              <div className="w-[1px] h-24 bg-Slate"></div>
            </div>
          </motion.div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
