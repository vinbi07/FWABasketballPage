import GameRow from "@/components/ui/GameRow";
import SectionReveal from "@/components/ui/SectionReveal";
import { ScheduleMonth } from "@/lib/types";

type ScheduleSectionProps = {
  schedule: ScheduleMonth[];
};

export default function ScheduleSection({ schedule }: ScheduleSectionProps) {
  return (
    <SectionReveal id="schedule" className="px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto mt-[-50] max-w-7xl">
        <div className="mt-6 space-y-8">
          {schedule.map((monthGroup) => (
            <div key={monthGroup.month} className="space-y-3">
              <h3 className="section-subtitle text-sm font-semibold uppercase tracking-[0.2em]">
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
