
import { motion } from "framer-motion";
import Link from "next/link";



const LandingSection = () => {
    return (
      <section
        id="landing"
        className="
        tracking-tight h-screen flex flex-col justify-center
        sm:px-8 xl:px-14
        "
      >
        <motion.h4
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.7 }}
          viewport={{ once: true, amount: 0.1 }}
          className="font-sf-mono text-Green"
        >
          Hi, my name is
        </motion.h4>
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.795 }}
          viewport={{ once: true, amount: 0.1 }}
          className="
          font-calibre text-LightestSlate text-5xl font-extrabold mt-8
          md:text-7xl
          "
        >
          Minel Salihagić
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.835 }}
          viewport={{ once: true, amount: 0.1 }}
          className="
          font-calibre text-Slate font-bold text-4xl
          md:text-5xl

          "
        >
          I aspire to be a full stack software engineer.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.955 }}
          viewport={{ once: true, amount: 0.1 }}
          className="
          font-calibre text-Slate text-lg mt-5
          sm:text-xl md:text-2xl xl:w-5/6"
        >
          I am a final-year student passionate about software engineering,
          dedicated to building and exceptional digital experiences. I actively
          use technologies like <span className="text-Green">FastAPI, Next.js, Node.js</span> and <span className="text-Green">SQL</span> to create
          dynamic, scalable applications. Currently, I'm looking for job or
          internship opportunities where I can apply my skills, contribute
          meaningfully, and continue to grow professionally.

          
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 1.155 }}
          viewport={{ once: true, amount: 0.1 }}
          className="relative mt-12 mb-36 group hover:cursor-pointer"
        >
          <Link aria-label="My email" href="mailto:minelsalihagic@gmail.com">
            <div className="group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all absolute z-10 p-3 px-12 border border-Green rounded-md bg-Navy font-sf-mono text-Green">
              Contact me
            </div>
            <div className="absolute z-0 p-3 px-12 border border-Green rounded-md bg-Green font-sf-mono text-Green">
              Contact me
            </div>
          </Link>
        </motion.div>
      </section>
    );
}
;

export default LandingSection;