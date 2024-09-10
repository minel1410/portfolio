"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hexagon from "./Hexagon";
import Sidebar from "./Sidebar";
import HamburgerIcon from "./HamburgerIcon";
import Link from "next/link";

const Navbar = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
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

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      setSidebarActive(!sidebarActive);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed bg-Navy h-28 z-30 px-4 md:px-8 lg:px-12 xl:px-14 text-Green flex items-center justify-between top-0 w-full transition-all duration-300 ease-in-out ${
          show
            ? lastScrollY > 100
              ? "shadow-xl backdrop-blur-md bg-Navy/40 h-[4.5rem]"
              : ""
            : "-translate-y-full"
        }`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <Link
            href={"#"}
            aria-label="Landing page"
          >
            <Hexagon />
          </Link>
        </motion.div>

        <div className="gap-7 items-center font-sf-mono text-Green hidden md:flex">
          <motion.div
            className="text-sm flex items-center gap-2 group hover:cursor-pointer"
            initial={{ opacity: 0, y: -35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <Link
              href={"#aboutme"}
              aria-label="About me section"
              className="flex"
            >
              <p className="text-Green">01.</p>
              <p className="text-LightestSlate group-hover:text-Green transition-all">
                About
              </p>
            </Link>
          </motion.div>

          <motion.div
            className="text-sm flex items-center gap-2 group hover:cursor-pointer"
            initial={{ opacity: 0, y: -35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href={"#projects"}
              aria-label="Projects section"
              className="flex"
            >
              <p className="text-Green">02.</p>
              <p className="text-LightestSlate group-hover:text-Green transition-all">
                Projects
              </p>
            </Link>
          </motion.div>
          <motion.div
            className="text-sm flex items-center gap-2 group hover:cursor-pointer"
            initial={{ opacity: 0, y: -35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              href={"#contact"}
              aria-label="Conact section"
              className="flex"
            >
              <p className="text-Green">03.</p>
              <p className="text-LightestSlate group-hover:text-Green transition-all">
                Contact
              </p>
            </Link>
          </motion.div>
          <motion.div
            className="p-2 border rounded-md border-Green transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[5px_5px_0px_0px_rgba(100,255,218,1)] cursor-pointer"
            initial={{ opacity: 0, y: -35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.4 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="My Resume"
            >
              Resume
            </Link>
          </motion.div>
        </div>

        {/* Hamburger Icon for Mobile Navigation */}
        <HamburgerIcon
          active={sidebarActive}
          onclick={() => setSidebarActive(!sidebarActive)}
          onKeyDown={handleKeyDown}
          tabIndex={0} // Make it focusable
          aria-label="Toggle sidebar menu"
          role="button"
        />

        {/* Sidebar for Mobile */}
        <Sidebar active={sidebarActive} />
      </nav>
    </>
  );
};

export { Navbar };
