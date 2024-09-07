"use client";
import ProjectCard from "../components/ProjectCard";
import FeaturedProjectCard from "../components/FeaturedProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const ProjectsSection = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Animation variants for project cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
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
            Things I've Worked On
          </p>
        </div>
        <div className="w-full ms-5 h-[1px] bg-LightestSlate"></div>
      </div>
      <div className="flex flex-col mt-3 gap-16 w-full">
        <FeaturedProjectCard
          cardTitle="Used Car Price Predictor"
          cardDescription="A used car price prediction tool using a Random Forest model trained on 15,000 OLX.ba car listings. Built with FastAPI for real-time price predictions. Please allow up to 2 minutes for the server to boot up."
          backgroundImage="/carprice.png"
          githubLink="https://github.com/minel1410/car-price-predictor"
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
        <FeaturedProjectCard
          cardTitle="PMF Alumni"
          cardDescription="An alumni platform for the Faculty of Natural Sciences and Mathematics Sarajevo, connecting graduates. Built with PostgreSQL, FastAPI, and Next.js, it allows alumni to register, update profiles, and network with peers."
          backgroundImage="/alumni.png"
          githubLink="https://github.com/minel1410/Pmf_alumni"
          technologies={[
            "Next.js",
            "FastAPI",
            "PostegreSQL",
            "Aiven",
            "Shadcn",
          ]}
        />
        <FeaturedProjectCard
          cardTitle="STM32 Firmware"
          cardDescription={
            <>
              At{" "}
              <Link
                href="https://www.maasu.de"
                className="relative text-Green after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[0.5px] after:bg-Green after:transition-all after:duration-300 hover:after:w-full"
              >
                MAASU
              </Link>
              , I developed firmware in C++ for STM32 microcontrollers and
              learned the basics of requirements writing and the V-Model
              development process.
            </>
          }
          backgroundImage="/microcontroller.png"
          githubLink="https://github.com/munaabujaber/maasu_internship3_stm32"
          technologies={[
            "C++",
            "Embedded",
            "V-model",
            "Requirement engineering",
            "STM32",
          ]}
        />
      </div>
      <div className="w-full flex justify-between items-center font-calibre font-bold text-LightestSlate text-3xl mt-32">
        <div className="w-1/4 h-[0.5px] bg-Slate"></div>
        Other projects
        <div className="w-1/4 h-[0.5px] bg-Slate"></div>
      </div>
      <div className="w-full flex flex-col gap-8 mt-12">
        <motion.div variants={cardVariants} initial="hidden" animate="visible" className="flex flex-col gap-8">
          <ProjectCard
            cardTitle="My portfolio"
            cardDescription="A personal portfolio application built using Next.js and hosted on Vercel."
            technologies={["Next.js", "Vercel", "Framer motion", "Responsive"]}
            githubLink="#"
          />
          <ProjectCard
            cardTitle="Car Price Predictor Model"
            cardDescription="A Random Forest Model for the car price predictor project mentioned above. It is create using about 15k adds from olx.ba"
            technologies={["Python", "Jupyter", "Google colab", "Random forest"]}
            githubLink="#"
          />
        </motion.div>

        <AnimatePresence>
          
          {showAllProjects && (
            <>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
              >
                <ProjectCard />
              </motion.div>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
              >
                <ProjectCard />
              </motion.div>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
              >
                <ProjectCard />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <div className="relative mt-5 w-full flex justify-center group">
          <motion.button
            onClick={() => {
              setShowAllProjects(!showAllProjects);
            }}
            className="group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all absolute z-10 px-8 py-4 border border-Green rounded-md bg-Navy font-sf-mono text-Green"
            whileTap={{ scale: 0.95 }}
          >
            {showAllProjects ? <>Show less</> : <>Show more</>}
          </motion.button>
          <div className="absolute px-8 py-4 border border-Green rounded-md font-sf-mono text-Green bg-Green z-0">
            Show less
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
