"use client";

import { LeadershipMember } from "@/lib/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type LeadershipCardProps = {
  leader: LeadershipMember;
};

const MOBILE_BIO_CHAR_LIMIT = 120;

export default function LeadershipCard({ leader }: LeadershipCardProps) {
  const [isMobileBioExpanded, setIsMobileBioExpanded] = useState(false);
  const hasLongBio = Boolean(
    leader.bio && leader.bio.length > MOBILE_BIO_CHAR_LIMIT,
  );
  const mobileBioText =
    hasLongBio && !isMobileBioExpanded
      ? `${leader.bio?.slice(0, MOBILE_BIO_CHAR_LIMIT).trimEnd()}...`
      : leader.bio;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-2xl border border-[color:var(--outline-soft)]/50 bg-[color:var(--surface)] shadow-[var(--panel-shadow)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={leader.image}
          alt={`${leader.name} profile`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 320px"
        />
      </div>

      <div className="space-y-3 p-5">
        <div>
          <p className="text-lg font-semibold uppercase tracking-[0.09em] text-[color:var(--title-color)]">
            {leader.name}
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--subtitle-color)]">
            {leader.role}
          </p>
        </div>

        {leader.bio ? (
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.06em] text-[color:var(--foreground)]/80 sm:hidden">
              {mobileBioText}
            </p>
            <p className="hidden text-xs uppercase tracking-[0.06em] text-[color:var(--foreground)]/80 sm:block sm:text-sm">
              {leader.bio}
            </p>

            {hasLongBio ? (
              <button
                type="button"
                onClick={() => setIsMobileBioExpanded((prev) => !prev)}
                className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[color:var(--title-color)]/80 sm:hidden"
                aria-expanded={isMobileBioExpanded}
              >
                {isMobileBioExpanded ? "Show less" : "Show more"}
              </button>
            ) : null}
          </div>
        ) : null}

        <div className="flex items-center justify-between gap-3 pt-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--title-color)]/75">
            {leader.focus ?? "Leadership"}
          </p>

          {leader.socials && leader.socials.length > 0 ? (
            <a
              href={leader.socials[0].href}
              aria-label={`${leader.name} ${leader.socials[0].label}`}
              className="rounded-full border border-[color:var(--outline-soft)]/55 bg-[color:var(--button-surface)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[color:var(--title-color)] transition-colors hover:bg-[color:var(--button-surface-hover)]"
            >
              {leader.socials[0].label}
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
