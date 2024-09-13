
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const AboutSection = () => {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        id="aboutme"
        className="h-screen flex flex-col pt-8 md:flex-row md:justify-between md:gap-12 mb-28"
      >
        <div className="flex flex-col gap-6 w-full md:w-1/2">
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

          <div className="flex flex-col gap-3">
            <p className="text-Slate text-justify text-md lg:text-lg xl:text-xl font-medium">
              Hello! My name is Minel Salihagić, and I’m a final-year software
              engineering student with a passion for creating innovative digital
              solutions. My journey began with a love for problem-solving and
              has led me to develop firmware for STM32 microcontrollers, work on
              web applications, and build machine learning models.
            </p>
            <p className="text-Slate text-justify text-md lg:text-lg xl:text-xl font-medium mt-8">
              I’ve had the opportunity to intern at
              <Link
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MAASU BH"
                href="https://www.maasu.de/"
                className="text-Green ms-2"
              >
                MAASU BH d.o.o.
              </Link>
              , where I focused on firmware development, and have worked on
              various projects like API development and alumni platforms. I’m
              currently seeking an internship or job where I can apply my skills
              in software development and contribute to impactful projects.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-4">
          <div className="w-full flex justify-center">
            <div className="relative group w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-auto group">
              <div className="flex w-full items-center relative group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all z-20">
                <Image
                  src="/portfolio_image.jpg"
                  alt="Portfolio Image"
                  width={400}
                  height={400}
                  className="rounded-md relative transition-all"
                />
                <div className="absolute inset-0 bg-Green opacity-100 mix-blend-multiply group-hover:opacity-0 transition-all rounded-md"></div>
              </div>
            </div>
          </div>

          
          
        </div>

        
      </motion.section>
    );
}

export default AboutSection;