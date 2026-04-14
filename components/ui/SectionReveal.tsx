"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type SectionRevealProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export default function SectionReveal({ id, className, children }: SectionRevealProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
