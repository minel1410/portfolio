import Link from "next/link";
import Image from "next/image";

export default function Test() {
  return (
    <div className="w-full">
      <section
        id="landing"
        className="tracking-tight h-screen flex flex-col justify-center"
      >
        <p className="font-sf-mono text-Green">Hi, my name is</p>
        <p className="font-calibre text-LightestSlate text-5xl font-extrabold mt-8">
          Minel Salihagić
        </p>
        <p className="font-calibre text-Slate font-bold text-4xl">
          I create and innovate in the digital world.
        </p>
        <p className="font-calibre text-Slate text-lg mt-5 text-justify">
          I’m a final-year student with a passion for software engineering,
          focused on building and occasionally designing exceptional digital
          experiences. Currently, I’m eager to apply my skills and knowledge in
          a professional setting, actively seeking opportunities for a job or
          internship where I can contribute and grow.
        </p>
        <div className="relative mt-12 mb-36 group hover:cursor-pointer">
          <Link href="mailto:minelsalihagic@gmail.com">
            <div className="group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all absolute z-10 p-3 px-12 border border-Green rounded-md bg-Navy font-sf-mono text-Green">
              Contact me
            </div>
            <div className="absolute z-0 p-3 px-12 border border-Green rounded-md bg-Green font-sf-mono text-Green">
              Contact me
            </div>
          </Link>
        </div>
      </section>

      <section id="aboutme" className="min-h-screen flex flex-col pt-12">
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <p className="text-Green font-sf-mono text-md">01.</p>
            <p className="font-calibre font-bold text-LightestSlate text-3xl">
              About Me
            </p>
          </div>
          <div className="w-full h-[1px] bg-LightestSlate"></div>
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

        <div className="w-full flex justify-center mt-5">
          <div className="relative">
            <Image
              src="/portfolio_image.jpg"
              alt="Portfolio Image"
              width={300}
              height={300}
              className="rounded-md z-10 relative hover:-translate-x-2 hover:-translate-y-2 transition-all"
            />

            <div className="relative w-[300px] h-[300px] border-2 border-Green rounded-md -translate-y-[275px] translate-x-[25px] z-0"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
