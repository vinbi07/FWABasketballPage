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
      className={`inline-flex items-center justify-center rounded-full border border-[color:var(--outline-soft)] bg-[color:var(--title-color)] px-6 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--background)] transition-shadow duration-300 hover:shadow-[0_0_22px_rgba(38,38,38,0.35)] ${className ?? ""}`}
    >
      {label}
    </motion.a>
  );
}
