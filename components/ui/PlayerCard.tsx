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
        className="group overflow-hidden rounded-2xl border border-[color:var(--outline-soft)]/55 bg-[color:var(--background)]"
      >
        <div className="relative aspect-[3/4]">
          <Image
            src={player.image}
            alt={`${player.name} placeholder`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
          />
        </div>
        <div className="border-t border-[color:var(--outline-soft)]/35 bg-[color:var(--surface)] px-3 py-3 text-left sm:px-4 sm:py-4">
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[color:var(--title-color)] sm:text-lg">
            {player.name}
          </p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-[color:var(--subtitle-color)] sm:text-sm">
            #{player.number} {player.position}
          </p>
        </div>
      </motion.article>
    </Link>
  );
}
