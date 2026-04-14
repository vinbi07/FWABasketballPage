import GameRow from "@/components/ui/GameRow";
import SectionReveal from "@/components/ui/SectionReveal";
import { ScheduleMonth } from "@/lib/types";

type ScheduleSectionProps = {
  schedule: ScheduleMonth[];
};

export default function ScheduleSection({ schedule }: ScheduleSectionProps) {
  return (
    <SectionReveal id="schedule" className="px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto mt-[-50] max-w-7xl rounded-3xl border border-[color:var(--outline-soft)]/65 bg-[linear-gradient(145deg,color-mix(in_srgb,var(--background)_94%,var(--outline-soft)_6%)_0%,color-mix(in_srgb,var(--background)_88%,var(--outline-soft)_12%)_100%)] p-5 shadow-[0_18px_48px_color-mix(in_srgb,var(--accent-shadow)_22%,transparent)] sm:p-7 lg:p-9">
        <div className="mt-6 space-y-9">
          {schedule.map((monthGroup) => (
            <div
              key={monthGroup.month}
              className="space-y-4 border-l-2 border-[color:var(--outline-soft)]/70 pl-4 sm:pl-5"
            >
              <h3 className="section-subtitle text-left text-sm font-semibold uppercase tracking-[0.24em]">
                {monthGroup.month}
              </h3>
              <div className="space-y-3">
                {monthGroup.games.map((game) => (
                  <GameRow
                    key={`${monthGroup.month}-${game.date}-${game.matchup}`}
                    game={game}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
