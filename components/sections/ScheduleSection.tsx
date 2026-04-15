"use client";

import { motion } from "framer-motion";
import GameRow from "@/components/ui/GameRow";
import SectionReveal from "@/components/ui/SectionReveal";
import { ScheduleMonth } from "@/lib/types";

type ScheduleSectionProps = {
  schedule: ScheduleMonth[];
};

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
  const totalEvents = schedule.reduce(
    (count, month) => count + (month.events?.length ?? 0),
    0,
  );
  const hasScheduleItems = totalGames + totalEvents > 0;

  return (
    <SectionReveal id="schedule" className="px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto mt-[-80] max-w-3xl overflow-hidden rounded-3xl border border-[color:var(--title-color)]/14 bg-[linear-gradient(150deg,color-mix(in_srgb,var(--background)_92%,var(--surface)_8%)_0%,color-mix(in_srgb,var(--background)_80%,var(--title-color)_20%)_45%,color-mix(in_srgb,var(--background)_82%,var(--subtitle-color)_18%)_100%)] shadow-[0_22px_60px_color-mix(in_srgb,var(--accent-shadow)_30%,transparent)] [--outline-soft:color-mix(in_srgb,var(--subtitle-color)_52%,var(--title-color)_48%)] [--outline-deep:color-mix(in_srgb,var(--title-color)_72%,var(--subtitle-color)_28%)]">
        <div className="border-b border-[color:var(--title-color)]/12 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--surface)_92%,transparent)_0%,color-mix(in_srgb,var(--background)_88%,var(--subtitle-color)_12%)_58%,color-mix(in_srgb,var(--background)_92%,var(--title-color)_8%)_100%)] p-5 sm:p-7 lg:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <h2 className="text-2xl font-black uppercase tracking-[0.08em] text-[color:var(--title-color)] sm:text-3xl lg:text-4xl">
                Season Schedule
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-[color:var(--subtitle-color)]/74 sm:text-base">
                Monthly Matchups and Results
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--subtitle-color)_20%,transparent)_0%,rgba(255,255,255,0)_56%)] p-4 sm:p-6 lg:p-7">
          {!hasScheduleItems ? (
            <div className="space-y-4 rounded-2xl border border-[color:var(--outline-soft)]/30 bg-[color:var(--broadcast-surface)] p-4 backdrop-blur-sm sm:p-5">
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
                  className="rounded-2xl border border-[color:var(--outline-soft)]/30 bg-[linear-gradient(160deg,var(--surface)_0%,color-mix(in_srgb,var(--background)_92%,var(--subtitle-color)_8%)_100%)] p-3 shadow-[0_8px_24px_color-mix(in_srgb,var(--accent-shadow)_20%,transparent)] backdrop-blur-md sm:p-4"
                >
                  <div className="mb-3 flex items-center justify-between gap-2 border-b border-[color:var(--outline-soft)]/28 pb-3 sm:mb-4">
                    <h3 className="text-sm font-black uppercase tracking-[0.24em] text-[color:var(--title-color)] sm:text-base">
                      {monthGroup.month}
                    </h3>
                    <span className="rounded-full border border-[color:var(--subtitle-color)]/28 bg-[color:var(--subtitle-color)]/8 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[color:var(--title-color)]/78 sm:text-[11px]">
                      {monthGroup.games.length} games
                      {monthGroup.events?.length
                        ? ` • ${monthGroup.events.length} events`
                        : ""}
                    </span>
                  </div>

                  {monthGroup.games.length > 0 ? (
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
                          className="rounded-xl transition-transform"
                        >
                          <GameRow game={game} />
                        </motion.div>
                      ))}
                    </div>
                  ) : null}

                  {monthGroup.events && monthGroup.events.length > 0 ? (
                    <div className="mt-4 space-y-2 rounded-xl border border-[color:var(--outline-soft)]/24 bg-[color:var(--background)]/60 p-3 sm:p-4">
                      <p className="text-[20px] font-semibold uppercase tracking-[0.16em] text-[color:var(--subtitle-color)]">
                        Community Events
                      </p>
                      <div className="space-y-2">
                        {monthGroup.events.map((event) => (
                          <article
                            key={`${monthGroup.month}-${event.date}-${event.time}-${event.title}`}
                            className="rounded-lg border border-[color:var(--outline-soft)]/28 border-l-4 border-l-[color:var(--subtitle-color)] bg-[color:var(--surface)]/85 px-3 py-2"
                          >
                            <p className="text-[14px] font-semibold uppercase tracking-[0.12em] text-[color:var(--title-color)]">
                              {event.date} • {event.time}
                            </p>
                            <p className="mt-1 text-[14px] uppercase tracking-[0.08em] text-[color:var(--foreground)]/82 sm:text-[16px]">
                              {event.title}
                            </p>
                          </article>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </SectionReveal>
  );
}
