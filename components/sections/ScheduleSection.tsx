"use client";

import { motion } from "framer-motion";
import GameRow from "@/components/ui/GameRow";
import SectionReveal from "@/components/ui/SectionReveal";
import { ScheduleMonth } from "@/lib/types";

type ScheduleSectionProps = {
  schedule: ScheduleMonth[];
};

type BroadcastStatProps = {
  label: string;
  value: string;
  emphasize?: boolean;
};

function BroadcastStat({
  label,
  value,
  emphasize = false,
}: BroadcastStatProps) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.01 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`rounded-xl border px-3 py-2 backdrop-blur-sm sm:px-4 ${
        emphasize
          ? "border-[color:var(--subtitle-color)]/35 bg-[linear-gradient(145deg,color-mix(in_srgb,var(--background)_74%,var(--subtitle-color)_26%)_0%,color-mix(in_srgb,var(--background)_68%,var(--title-color)_32%)_100%)] shadow-[0_10px_24px_color-mix(in_srgb,var(--subtitle-color)_20%,transparent)]"
          : "border-[color:var(--title-color)]/15 bg-white/85"
      }`}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--title-color)]/65">
        {label}
      </p>
      <p
        className={`mt-1 font-black uppercase tracking-[0.1em] ${
          emphasize
            ? "text-xl text-[color:var(--title-color)] sm:text-2xl"
            : "text-lg text-[color:var(--title-color)]/88"
        }`}
      >
        {value}
      </p>
    </motion.div>
  );
}

function ScheduleSkeleton() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {[0, 1, 2].map((placeholder) => (
        <div
          key={placeholder}
          className="h-24 animate-pulse rounded-xl border border-[color:var(--title-color)]/10 bg-[color:var(--title-color)]/5"
        />
      ))}
    </div>
  );
}

export default function ScheduleSection({ schedule }: ScheduleSectionProps) {
  const totalGames = schedule.reduce(
    (count, month) => count + month.games.length,
    0,
  );
  const finalGames = schedule.reduce(
    (count, month) =>
      count + month.games.filter((game) => game.status === "Final").length,
    0,
  );
  const upcomingGames = totalGames - finalGames;
  const hasGames = totalGames > 0;

  return (
    <SectionReveal id="schedule" className="px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto mt-[-80] max-w-7xl overflow-hidden rounded-3xl border border-[color:var(--title-color)]/14 bg-[linear-gradient(150deg,color-mix(in_srgb,var(--background)_91%,white)_0%,color-mix(in_srgb,var(--background)_80%,var(--title-color)_20%)_45%,color-mix(in_srgb,var(--background)_82%,var(--subtitle-color)_18%)_100%)] shadow-[0_22px_60px_rgba(27,29,64,0.12)] [--outline-soft:color-mix(in_srgb,var(--subtitle-color)_52%,var(--title-color)_48%)] [--outline-deep:color-mix(in_srgb,var(--title-color)_72%,var(--subtitle-color)_28%)] [--subtitle-color:#bf3e21] [--schedule-accent:#1b1d40]">
        <div className="border-b border-[color:var(--title-color)]/12 bg-[linear-gradient(90deg,rgba(255,255,255,0.95)_0%,color-mix(in_srgb,var(--background)_88%,var(--subtitle-color)_12%)_58%,color-mix(in_srgb,var(--background)_92%,var(--title-color)_8%)_100%)] p-5 sm:p-7 lg:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <h2 className="text-2xl font-black uppercase tracking-[0.08em] text-[color:var(--title-color)] sm:text-3xl lg:text-4xl">
                Season Schedule
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-[color:var(--title-color)]/74 sm:text-base">
                Monthly Matchups and Results
              </p>
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--subtitle-color)]/28 bg-white/86 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--title-color)]/70 sm:text-[11px]">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--subtitle-color)]" />
                Team View
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <BroadcastStat
                label="Total Games"
                value={String(totalGames)}
                emphasize
              />
              <BroadcastStat label="Upcoming" value={String(upcomingGames)} />
            </div>
          </div>
        </div>

        <div className="bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--subtitle-color)_20%,transparent)_0%,rgba(255,255,255,0)_56%)] p-4 sm:p-6 lg:p-7">
          {!hasGames ? (
            <div className="space-y-4 rounded-2xl border border-[color:var(--outline-soft)]/30 bg-white/80 p-4 backdrop-blur-sm sm:p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--title-color)]/88">
                Loading Schedule Feed
              </h3>
              <ScheduleSkeleton />
              <p className="text-xs uppercase tracking-[0.14em] text-[color:var(--title-color)]/62">
                Awaiting game data and updated broadcast slots.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {schedule.map((monthGroup, monthIndex) => (
                <motion.div
                  key={monthGroup.month}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{
                    duration: 0.35,
                    delay: monthIndex * 0.04,
                    ease: "easeOut",
                  }}
                  className="rounded-2xl border border-[color:var(--outline-soft)]/30 bg-[linear-gradient(160deg,#ffffff_0%,color-mix(in_srgb,var(--background)_92%,var(--subtitle-color)_8%)_100%)] p-3 shadow-[0_8px_24px_rgba(27,29,64,0.08)] backdrop-blur-md sm:p-4"
                >
                  <div className="mb-3 flex items-center justify-between gap-2 border-b border-[color:var(--outline-soft)]/28 pb-3 sm:mb-4">
                    <h3 className="text-sm font-black uppercase tracking-[0.24em] text-[color:var(--title-color)] sm:text-base">
                      {monthGroup.month}
                    </h3>
                    <span className="rounded-full border border-[color:var(--subtitle-color)]/28 bg-[color:var(--subtitle-color)]/8 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[color:var(--title-color)]/78 sm:text-[11px]">
                      {monthGroup.games.length} games
                    </span>
                  </div>

                  <div className="space-y-3">
                    {monthGroup.games.map((game, gameIndex) => (
                      <motion.div
                        key={`${monthGroup.month}-${game.date}-${game.matchup}`}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{
                          duration: 0.25,
                          delay: gameIndex * 0.03,
                          ease: "easeOut",
                        }}
                        whileHover={{ y: -2 }}
                        className="rounded-2xl  border-[color:var(--outline-soft)]/24 bg-[linear-gradient(140deg,#ffffff_0%,color-mix(in_srgb,var(--background)_92%,var(--title-color)_8%)_100%)] p-1.5 transition-colors hover:border-[color:var(--subtitle-color)]/70"
                      >
                        <GameRow game={game} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </SectionReveal>
  );
}
