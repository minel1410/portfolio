"use client";

import React, { useState } from "react";
import LoadingAnimation from "./components/loadAnimation";
import { motion } from "framer-motion";
import "./globals.css";

export default function Home() {
  const [isAnimationFinished, setAnimationFinished] = useState(false);

  return (
    <>
      {!isAnimationFinished && (
        <LoadingAnimation
          onAnimationFinish={() => setAnimationFinished(true)}
        />
      )}
      {isAnimationFinished && (
        <div>Content</div>
      )}
    </>
  );
}
