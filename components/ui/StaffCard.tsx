"use client";

import { StaffMember } from "@/lib/types";
import { motion } from "framer-motion";
import Image from "next/image";

type StaffCardProps = {
  member: StaffMember;
};

export default function StaffCard({ member }: StaffCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      className="overflow-hidden rounded-2xl border border-[color:var(--outline-soft)]/55 bg-[color:var(--background)]"
    >
      <div className="relative aspect-[4/5]">
        <Image
          src={member.image}
          alt={`${member.name} placeholder`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="space-y-1 p-4">
        <p className="text-lg font-semibold uppercase tracking-[0.09em] text-[color:var(--title-color)]">
          {member.name}
        </p>
        <p className="text-sm uppercase tracking-[0.12em] text-[color:var(--subtitle-color)]">
          {member.role}
        </p>
      </div>
    </motion.article>
  );
}
