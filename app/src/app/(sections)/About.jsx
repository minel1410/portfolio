
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
        className="min-h-screen flex flex-col pt-8"
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

        <div className="flex justify-center mt-12">
          <div className="relative h-[225px] group">
            <div className="relative group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all z-20 group">
              <Image
                src="/portfolio_image.jpg"
                alt="Portfolio Image"
                width={250}
                height={250}
                className="rounded-md relative  transition-all"
              />
              <div className="absolute inset-0 w-[250px] h-[250px] bg-Green opacity-100 mix-blend-multiply group-hover:opacity-0 transition-all rounded-md"></div>
            </div>

            <div className="relative w-[250px] h-[250px] border-2 border-Green rounded-md -translate-y-[225px] translate-x-[25px] z-0"></div>
          </div>
        </div>
      </motion.section>
    );
}

export default AboutSection;