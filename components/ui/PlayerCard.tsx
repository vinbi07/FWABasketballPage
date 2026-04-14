"use client";

import { Player } from "@/lib/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type PlayerCardProps = {
  player: Player;
  href?: string;
};

export default function PlayerCard({ player, href = "#" }: PlayerCardProps) {
  return (
    <Link href={href} className="block">
      <motion.article
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        className="group relative overflow-hidden rounded-2xl border border-[color:var(--outline-soft)]/55 bg-[color:var(--background)]"
      >
        <div className="relative aspect-[3/4]">
          <Image
            src={player.image}
            alt={`${player.name} placeholder`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[color-mix(in_srgb,var(--accent-shadow)_84%,transparent)] via-[color-mix(in_srgb,var(--accent-shadow)_42%,transparent)] to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 p-2 sm:p-4">
          <div className="inline-flex flex-col bg-gradient-to-r from-[color-mix(in_srgb,var(--title-color)_44%,transparent)] to-[color-mix(in_srgb,var(--subtitle-color)_52%,transparent)] px-2 py-2 text-left sm:px-4 sm:py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white sm:text-lg">
              {player.name}
            </p>
            <p className="text-[10px] uppercase tracking-[0.12em] text-[color:var(--subtitle-color)] sm:text-sm">
              #{player.number} {player.position}
            </p>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
