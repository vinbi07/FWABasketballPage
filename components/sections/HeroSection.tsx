"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";

type HeroSectionProps = {
  clubName: string;
  tagline: string;
};

export default function HeroSection({ clubName, tagline }: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-5 pb-20 pt-24 sm:px-8 sm:pt-28 lg:px-12"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/placeholders/media.svg"
        >
          <source src="/placeholders/bgVideo.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        className="absolute inset-0 z-10 bg-[rgba(38,38,38,0.55)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_12%,rgba(217,165,154,0.26),rgba(38,38,38,0.2)_45%,rgba(38,38,38,0.7)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 z-15 h-24 bg-gradient-to-b from-transparent via-[rgba(247,248,250,0.2)] to-[color:var(--background)]"
        aria-hidden="true"
      />
      <div className="relative z-20 mx-auto max-w-7xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#f7f8fa] opacity-80 [text-shadow:0_4px_16px_rgba(27,29,64,0.85)]"
        >
          Women&apos;s Flagball
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.82, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-5xl justify-center"
        >
          <Image
            src="/logos/AWFPLogo.png"
            alt={`${clubName} logo`}
            width={920}
            height={560}
            priority
            className="h-auto w-full max-w-[500px] object-contain drop-shadow-[0_10px_30px_rgba(38,38,38,0.75)]"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
          className="mx-auto font-bold mt-[-50] max-w-2xl text-base uppercase tracking-[0.12em] text-[#f7f8fa] opacity-80 [text-shadow:0_4px_16px_rgba(27,29,64,0.85)] sm:text-2xl"
        >
          {tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
          className="mt-10"
        >
          <Button href="/roster" label="View Roster" className="min-w-40" />
        </motion.div>
      </div>
    </section>
  );
}
