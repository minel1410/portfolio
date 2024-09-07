
import { motion } from "framer-motion";
import Link from "next/link";



const LandingSection = () => {
    return (
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
    );
}
;

export default LandingSection;