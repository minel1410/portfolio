import React from "react";
import FeatherIcon from "feather-icons-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full h-screen bg-Navy px-6 md:px-12 py-4">
      <nav className="w-full flex justify-between items-center h-1/6">
        <div className="w-20 h-20">
          <div className="absolute w-[70px] h-[70px] mask mask-hexagon bg-Green flex items-center justify-center hover z-40 transition-all hover:-translate-x-1 hover:-translate-y-1">
            <div className="w-16 h-16 mask mask-hexagon bg-Navy flex items-center justify-center">
              <p className="text-Green text-3xl">M</p>
            </div>
          </div>
          <div className="absolute w-[70px] h-[70px] mask mask-hexagon bg-Green flex items-center justify-center hover z-10"></div>
        </div>
      </nav>
      <div className="w-full h-5/6 flex flex-col gap-1 items-center justify-center text-center">
        <h1 className="text-Green font-calibre font-light text-5xl sm:text-6xl md:text-8xl">
          UNDER CONSTRUCTION
        </h1>
        <p className="text-Slate text-md md:text-lg lg:text-xl font-calibre">
          I’m currently working on a significant update to my portfolio. Thank
          you for your interest. Check back soon to see my latest projects and
          achievements
        </p>
        <div className="w-1/2 md:w-1/4 h-[1px] bg-Slate mt-6"></div>
        <div className="flex items-center justify-around mt-3 gap-5">
          <a
            href="https://github.com/minel1410"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FeatherIcon
              icon="github"
              className="text-Green w-6 h-6 stroke-current transition-all duration-300 ease-in-out transform hover:translate-y-[-5px] hover:cursor-pointer"
              strokeWidth="2"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/minel-salihagić-9ba401300/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FeatherIcon
              icon="linkedin"
              className="text-Green w-6 h-6 stroke-current transition-all duration-300 ease-in-out transform hover:translate-y-[-5px] hover:cursor-pointer"
              strokeWidth="2"
            />
          </a>
          <a href="mailto:minelsalihagic@gmail.com">
            <FeatherIcon
              icon="mail"
              className="text-Green w-6 h-6 stroke-current transition-all duration-300 ease-in-out transform hover:translate-y-[-5px] hover:cursor-pointer"
              strokeWidth="2"
            />
          </a>
        </div>

        <p className="absolute bottom-8 text-Slate font-calibre text-xl">
          minelsalihagic@gmail.com
        </p>
      </div>
    </div>
  );
}

