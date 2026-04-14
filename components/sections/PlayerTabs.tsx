"use client";

import { Player } from "@/lib/types";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

type PlayerTabsProps = {
  player: Player;
  yearsSince: number;
};

type TabKey = "stats" | "bio";

export default function PlayerTabs({ player, yearsSince }: PlayerTabsProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("stats");

  const defaultBoxScores = useMemo(
    () => [
      { date: "Jan 08", opponent: "Dallas Power", result: "W 91-84", pts: 19, reb: 7, ast: 5 },
      { date: "Jan 14", opponent: "Dallas Power", result: "L 76-80", pts: 17, reb: 4, ast: 6 },
      { date: "Feb 02", opponent: "Dallas Power", result: "Scheduled", pts: 0, reb: 0, ast: 0 },
      { date: "Feb 11", opponent: "Dallas Power", result: "Scheduled", pts: 0, reb: 0, ast: 0 },
    ],
    []
  );

  const boxScores = player.boxScores2026 ?? defaultBoxScores;
  const highlightText =
    player.highlights?.join(" ") ??
    `${player.name} has delivered consistent two-way production and leadership in key matchups over previous seasons.`;

  const details = {
    team: player.details?.team ?? "Breeze",
    position: player.details?.position ?? player.position,
    height: player.details?.height ?? "6-0",
    birthdate: player.details?.birthdate ?? "6/5/2000",
    school: player.details?.school ?? "Iowa",
    country: player.details?.country ?? "USA",
    experience: player.details?.experience ?? "2nd Season",
  };

  return (
    <section className="px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl rounded-2xl border border-[color:var(--outline-soft)]/55 bg-[color:var(--background)] p-4 sm:p-6">
        <div className="mb-5 flex flex-wrap gap-2">
          {[{ key: "stats", label: "Stats" }, { key: "bio", label: "Bio" }].map(
            (tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as TabKey)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
                    isActive
                      ? "border-[color:var(--title-color)] bg-[color:var(--title-color)] text-[color:var(--background)]"
                      : "border-[color:var(--outline-soft)]/70 bg-white/70 text-[color:var(--subtitle-color)] hover:bg-white"
                  }`}
                >
                  {tab.label}
                </button>
              );
            }
          )}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "stats" && (
            <motion.div
              key="stats"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="overflow-x-auto"
            >
              <table className="min-w-full border-separate border-spacing-y-2 text-left">
                <thead>
                  <tr>
                    {["DATE", "OPPONENT", "RESULT", "PTS", "REB", "AST"].map((header) => (
                      <th key={header} className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--subtitle-color)]">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {boxScores.map((row, index) => (
                    <tr key={`${row.date}-${index}`} className="bg-white/75">
                      <td className="rounded-l-xl px-3 py-3 text-sm">{row.date}</td>
                      <td className="px-3 py-3 text-sm">{row.opponent}</td>
                      <td className="px-3 py-3 text-sm">{row.result}</td>
                      <td className="px-3 py-3 text-sm">{row.pts || "-"}</td>
                      <td className="px-3 py-3 text-sm">{row.reb || "-"}</td>
                      <td className="rounded-r-xl px-3 py-3 text-sm">{row.ast || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}

          {activeTab === "bio" && (
            <motion.div
              key="bio"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="space-y-4 rounded-xl border border-[color:var(--outline-soft)]/55 bg-white/75 p-4 text-sm leading-relaxed text-[color:var(--foreground)]"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--subtitle-color)]">Biography Highlights</p>
                <p className="mt-2">{player.bio ?? highlightText}</p>
              </div>

              <div className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
                <DetailItem label="Team" value={details.team} />
                <DetailItem label="Position" value={details.position} />
                <DetailItem label="Height" value={details.height} />
                <DetailItem label="Birthdate" value={details.birthdate} />
                <DetailItem label="School" value={details.school} />
                <DetailItem label="Country" value={details.country} />
                <DetailItem label="Experience" value={details.experience} />
                <DetailItem label="Member Since Year" value={String(player.memberSinceYear ?? new Date().getFullYear() - yearsSince)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

type DetailItemProps = {
  label: string;
  value: string | number;
};

function DetailItem({ label, value }: DetailItemProps) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--subtitle-color)]">{label}</p>
      <p className="mt-1 text-base font-semibold text-[color:var(--title-color)]">{value}</p>
    </div>
  );
}
