import PlayerCard from "@/components/ui/PlayerCard";
import SectionReveal from "@/components/ui/SectionReveal";
import { toPlayerSlug } from "@/lib/playerSlug";
import { Player } from "@/lib/types";

type RosterGridProps = {
  roster: Player[];
};

export default function RosterGrid({ roster }: RosterGridProps) {
  return (
    <SectionReveal className="px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="section-title">Roster</h2>
        <div className="mt-6 mb-0 grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-4 lg:gap-5">
          {roster.map((player) => (
            <PlayerCard
              key={`${player.name}-${player.number}`}
              player={player}
              href={`/roster/${toPlayerSlug(player.name)}`}
            />
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
