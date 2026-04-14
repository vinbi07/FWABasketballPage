"use client";

import SectionReveal from "@/components/ui/SectionReveal";
import { MediaItem } from "@/lib/types";
import { motion } from "framer-motion";
import Image from "next/image";

type MediaSectionProps = {
  media: MediaItem[];
};

export default function MediaSection({ media }: MediaSectionProps) {
  return (
    <SectionReveal className="px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="section-title">Media</h2>
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          {media.map((item) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-[color:var(--outline-soft)]/55"
            >
              <div className="relative aspect-video">
                <Image
                  src={item.thumbnail}
                  alt={`${item.title} placeholder`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-[color:var(--outline-deep)]/35 transition-colors duration-300 group-hover:bg-[color:var(--outline-deep)]/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="rounded-full border border-[color:var(--outline-soft)]/60 bg-[color:var(--title-color)]/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--outline-soft)]">
                    {item.type === "video" ? "Play" : "View"}
                  </span>
                </div>
              </div>
              <div className="border-t border-[color:var(--outline-soft)]/35 bg-[color:var(--background)] p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.11em] text-[color:var(--title-color)]">
                  {item.title}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
