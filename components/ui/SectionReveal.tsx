"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

type SectionRevealProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export default function SectionReveal({
  id,
  className,
  children,
}: SectionRevealProps) {
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobileViewport(mediaQuery.matches);
    update();

    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={isMobileViewport ? { opacity: 1, y: 0 } : undefined}
      whileInView={!isMobileViewport ? { opacity: 1, y: 0 } : undefined}
      viewport={
        !isMobileViewport
          ? { once: true, amount: 0.05, margin: "0px 0px -10% 0px" }
          : undefined
      }
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
