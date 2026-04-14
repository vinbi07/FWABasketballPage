"use client";

import { motion } from "framer-motion";

type ButtonProps = {
  href?: string;
  label: string;
  className?: string;
};

export default function Button({ href = "#", label, className }: ButtonProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center rounded-full border border-[color:var(--button-primary-border)] bg-[color:var(--button-primary-bg)] px-6 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--button-primary-text)] transition-shadow duration-300 hover:shadow-[var(--button-primary-shadow)] ${className ?? ""}`}
    >
      {label}
    </motion.a>
  );
}
