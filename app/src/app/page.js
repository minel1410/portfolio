"use client"
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import FeatherIcon from "feather-icons-react";
import FeaturedProjectCard from "./components/FeaturedProjectCard";
import ProjectCard from "./components/ProjectCard";

export default function Test() {
  return (
    <div className="w-full">
      <section
        id="landing"
        className="tracking-tight h-screen flex flex-col justify-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.7 }}
          viewport={{ once: true, amount: 0.1 }}
          className="font-sf-mono text-Green"
        >
          Hi, my name is
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.795 }}
          viewport={{ once: true, amount: 0.1 }}
          className="font-calibre text-LightestSlate text-5xl font-extrabold mt-8"
        >
          Minel Salihagić
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.835 }}
          viewport={{ once: true, amount: 0.1 }}
          className="font-calibre text-Slate font-bold text-4xl"
        >
          I create and innovate in the digital world.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.955 }}
          viewport={{ once: true, amount: 0.1 }}
          className="font-calibre text-Slate text-lg mt-5 text-justify"
        >
          I’m a final-year student with a passion for software engineering,
          focused on building and occasionally designing exceptional digital
          experiences. Currently, I’m eager to apply my skills and knowledge in
          a professional setting, actively seeking opportunities for a job or
          internship where I can contribute and grow.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 1.155 }}
          viewport={{ once: true, amount: 0.1 }}
          className="relative mt-12 mb-36 group hover:cursor-pointer"
        >
          <Link href="mailto:minelsalihagic@gmail.com">
            <div className="group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all absolute z-10 p-3 px-12 border border-Green rounded-md bg-Navy font-sf-mono text-Green">
              Contact me
            </div>
            <div className="absolute z-0 p-3 px-12 border border-Green rounded-md bg-Green font-sf-mono text-Green">
              Contact me
            </div>
          </Link>
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        id="aboutme"
        className="min-h-screen flex flex-col pt-12"
      >
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <p className="text-Green font-sf-mono text-md">01.</p>
            <p className="font-calibre font-bold text-LightestSlate text-3xl">
              About
            </p>
            <p className="font-calibre font-bold text-LightestSlate text-3xl">
              Me
            </p>
          </div>
          <div className="w-full ms-5 h-[1px] bg-LightestSlate"></div>
        </div>

        <div className="mt-6">
          <p className="text-Slate text-justify text-md font-medium">
            Hello! My name is Minel Salihagić, and I’m a final-year software
            engineering student with a passion for creating innovative digital
            solutions. My journey began with a love for problem-solving and has
            led me to develop firmware for STM32 microcontrollers, work on web
            applications, and build machine learning models.
          </p>
          <p className="text-Slate text-justify text-md font-medium mt-8">
            I’ve had the opportunity to intern at
            <Link href="https://www.maasu.de/" className="text-Green ms-1">
              MAASU BH d.o.o.
            </Link>
            , where I focused on firmware development, and have worked on
            various projects like API development and alumni platforms. I’m
            currently seeking an internship or job where I can apply my skills
            in software development and contribute to impactful projects.
          </p>
          <p className="text-Slate text-justify text-md font-medium mt-8">
            Here are a few technologies I've been workin with:
          </p>
          <div className="flex">
            <div className="w-1/2 flex flex-col gap-3">
              <div className="flex gap-3 items-center">
                <p className="text-Green text-xl">&#8227;</p>
                <p className="text-Slate">Next.js</p>
              </div>
              <div className="flex gap-3 items-center">
                <p className="text-Green text-xl">&#8227;</p>
                <p className="text-Slate">FastAPI</p>
              </div>
              <div className="flex gap-3 items-center">
                <p className="text-Green text-xl">&#8227;</p>
                <p className="text-Slate">Node.js</p>
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-3">
              <div className="flex gap-3 items-center">
                <p className="text-Green text-xl">&#8227;</p>
                <p className="text-Slate">C++</p>
              </div>
              <div className="flex gap-3 items-center">
                <p className="text-Green text-xl">&#8227;</p>
                <p className="text-Slate">Tailwind</p>
              </div>
              <div className="flex gap-3 items-center">
                <p className="text-Green text-xl">&#8227;</p>
                <p className="text-Slate">IBM SPSS</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <div className="relative h-[325px] group">
            <div className="relative group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all z-20 group">
              <Image
                src="/portfolio_image.jpg"
                alt="Portfolio Image"
                width={300}
                height={300}
                className="rounded-md relative  transition-all"
              />
              <div className="absolute inset-0 w-[300px] h-[300px] bg-Green opacity-100 mix-blend-multiply group-hover:opacity-0 transition-all rounded-md"></div>
            </div>

            <div className="relative w-[300px] h-[300px] border-2 border-Green rounded-md -translate-y-[275px] translate-x-[25px] z-0"></div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        id="aboutme"
        className="min-h-screen flex flex-col py-16"
      >
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <p className="text-Green font-sf-mono text-md">02.</p>
            <p className="font-calibre font-bold text-LightestSlate text-3xl">
              Things
            </p>
            <p className="font-calibre font-bold text-LightestSlate text-3xl">
              I've
            </p>
            <p className="font-calibre font-bold text-LightestSlate text-3xl">
              Worked
            </p>
            <p className="font-calibre font-bold text-LightestSlate text-3xl">
              On
            </p>
          </div>
          <div className="w-full ms-5 h-[1px] bg-LightestSlate"></div>
        </div>
        <div className="flex flex-col mt-3 gap-16 w-full">
          <FeaturedProjectCard
            cardTitle="Used Car Price Predictor"
            cardDescription="A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm. VS Code Sublime Text Atom iTerm2 Hyper"
            backgroundImage="/carprice.png"
            githubLink="https://github.com/minel1410"
            hostedLink="https://car-price.minelsalihagic.com/"
            technologies={[
              "Python",
              "ML",
              "Next.js",
              "FastAPI",
              "Vercel",
              "Renderer",
            ]}
          />
        </div>
      </motion.section>

      <div className="w-full flex flex-col gap-8">
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>

      <div className="flex flex-col pt-64 pb-44 gap-6 text-center">
        <p className="text-Green text-xl font-sf-mono">04. What now?</p>
        <p className="text-LightestSlate text-6xl font-calibre font-extrabold">
          Get In Touch
        </p>
        <p className="font-calibre text-2xl text-LightSlate px-8">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
        <div className="relative mt-5 w-full flex justify-center group">
          <div className="group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all absolute z-10 px-8 py-4 border border-Green rounded-md bg-Navy font-sf-mono text-Green">
            Contact me
          </div>
          <div className="absolute px-8 py-4 border border-Green rounded-md font-sf-mono text-Green bg-Green z-0">
            Contact me
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center pt-16 pb-4">
        <div className="flex gap-8">
          <FeatherIcon icon="github" className="text-Slate"></FeatherIcon>
          <FeatherIcon icon="instagram" className="text-Slate"></FeatherIcon>
          <FeatherIcon icon="twitter" className="text-Slate"></FeatherIcon>
          <FeatherIcon icon="linkedin" className="text-Slate"></FeatherIcon>
          <FeatherIcon icon="codepen" className="text-Slate"></FeatherIcon>
        </div>
      </div>

      <div className="w-full flex flex-col items-center pt-4 pb-4 text-LightSlate font-Calibre">
        <p>
          Built by{" "}
          <Link
            href={"#"}
            className="relative text-Green after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[0.5px] after:bg-Green after:transition-all after:duration-300 hover:after:w-full"
          >
            Minel Salihagić
          </Link>
        </p>
        <p>
          Designed borrowed from{" "}
          <Link
            href={"#"}
            className="relative text-Green after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[0.5px] after:bg-Green after:transition-all after:duration-300 hover:after:w-full"
          >
            Brittany Chaing
          </Link>
        </p>
      </div>
    </div>
  );
}
