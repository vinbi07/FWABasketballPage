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
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(38,38,38,0.9)] via-[rgba(38,38,38,0.48)] to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 p-4">
          <div className="inline-flex flex-col bg-gradient-to-r from-[#1b1d40]/40 to-[#bf3e21]/40 px-4 py-3 text-left">
            <p className="text-lg font-semibold uppercase tracking-[0.1em] text-[color:var(--background)]">
              {player.name}
            </p>
            <p className="text-sm uppercase tracking-[0.12em] text-[color:var(--outline-soft)]">
              #{player.number} {player.position}
            </p>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
