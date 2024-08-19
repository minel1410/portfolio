"use client";

import React, { useState, useEffect } from "react";
import { MotionConfig, motion } from "framer-motion";
import { Hamburger } from "./Hamburger";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
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
            ? "shadow-xl backdrop-blur-md bg-Navy/40"
            : ""
          : "-translate-y-full"
      }`}
    >
      <motion.div
        className="text-4xl text-Green"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 3.4 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        M
      </motion.div>

      <div className="gap-7 items-center font-sf-mono text-Green hidden md:flex">
        {["About", "Projects", "Skills", "Contact"].map((item, index) => (
          <motion.div
            key={item}
            className="text-sm flex items-center gap-2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 3.5 + index * 0.1 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <p className="text-Green">{`0${index + 1}.`}</p>
            <p className="text-LightestSlate">{item}</p>
          </motion.div>
        ))}
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
      <Hamburger />
    </nav>
  );
};



export { Navbar };
