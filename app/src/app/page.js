"use client";


import LoadingAnimation from "./components/loadAnimation";
import "./globals.css";
import FeatherIcon from "feather-icons-react";
import React, { useState, useEffect } from "react";
import { MotionConfig, easeIn, motion } from "framer-motion";

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
            ? "shadow-xl backdrop-blur-md bg-Navy/40"
            : ""
          : "-translate-y-full"
      }`}
    >
      <motion.div
        className="text-4xl text-Green flex w-[60px] h-[60px] justify-center items-center bg-Green mask mask-hexagon"
        initial={{ opacity: 0, y: -20 }} // Spuštanje odozgo
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 3.4 }}
        viewport={{ once: true, amount: 0.1 }}
      >
          <div className="w-14 h-14 bg-Navy mask mask-hexagon flex items-center justify-center">
            M
          </div>
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
      <Hamburger></Hamburger>
    </nav>
  );
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

      {/* Sidebar animation */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full z-40 flex md:hidden"
        initial={{ x: "-100%" }} // Sidebar počinje izvan ekrana s desne strane
        animate={active ? { x: 0 } : { x: "100%" }}
        transition={{
          ease: "easeOut",
          duration: 0.3,
        }}
      >
        <div className="w-1/4 sm:w-1/2 bg-Navy/30 backdrop-blur-md shadow-lg"></div>
        <div className="w-3/4 sm:w-1/2 bg-LightNavy z-30 h-full flex justify-center items-center">
          Test123
        </div>
      </motion.div>
    </MotionConfig>
  );
};

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

export default function Home() {
  const [isAnimationFinished, setAnimationFinished] = useState(false);

  return (
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

        <div className="w-full md:w-10/12 md:ml-[8.33%] h-[100vh] px-6 sm:px-14 md:px-10 flex flex-col items-start justify-center">
          <>
            {!isAnimationFinished && (
              <LoadingAnimation
                onAnimationFinish={() => setAnimationFinished(true)}
              />
            )}
            {isAnimationFinished && (

                <div
                >
                  <p className="text-md text-Green font-sf-mono">
                    Hi, my name is
                  </p>
                  <div className="text-5xl font-calibre text-White font-semibold mt-8">
                    Minel Salihagić.
                  </div>
                  <div className="text-4xl font-calibre text-Slate font-semibold mt-3">
                    I build things for the web
                  </div>
                  <div className="text-md text-Slate font-calibre font-normal mt-5">
                    I’m a software engineer specializing in building and
                    occasionally designing exceptional digital experiences.
                    Currently, I’m focused on building accessible,
                    human-centered products at Upstatement.
                  </div>
                  <div className="p-4 text-Green font-sf-mono mt-10 border rounded-md border-Green transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[5px_5px_0px_0px_rgba(100,255,218,1)] cursor-pointer">
                    Check out my course!
                  </div>
                </div>
            )}
          </>
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
  );
}
