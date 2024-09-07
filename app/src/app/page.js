"use client"
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import FeatherIcon from "feather-icons-react";
import FeaturedProjectCard from "./components/FeaturedProjectCard";
import ProjectCard from "./components/ProjectCard";
import LandingSection from "./(sections)/Landing";
import AboutSection from "./(sections)/About";
import ContactSection from "./(sections)/Contact";
import ProjectsSection from "./(sections)/Projects";

export default function Test() {
  return (
    <div className="w-full">
      <LandingSection />
      <AboutSection />

      <ProjectsSection />

      <ContactSection />

    </div>
  );
}
