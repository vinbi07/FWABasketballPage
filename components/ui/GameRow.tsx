import { ScheduleGame } from "@/lib/types";

type GameRowProps = {
  game: ScheduleGame;
};

export default function GameRow({ game }: GameRowProps) {
  const isWin = game.status === "Final" && game.winner === "home";

  return (
    <article
      className={`grid gap-3 rounded-2xl border p-4 sm:grid-cols-[120px_110px_1fr_auto] sm:items-center ${
        isWin
          ? "border-[color:var(--outline-soft)] bg-[color:var(--outline-deep)]/30"
          : "border-[color:var(--outline-soft)]/55 bg-[color:var(--background)]"
      }`}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[color:var(--title-color)]">{game.date}</p>
      <p className="text-sm uppercase tracking-[0.1em] text-[color:var(--subtitle-color)]">{game.time}</p>
      <p className="text-sm uppercase tracking-[0.07em] text-[color:var(--foreground)]">{game.matchup}</p>
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-[color:var(--outline-soft)]/70 px-3 py-1 text-xs uppercase tracking-[0.12em] text-[color:var(--subtitle-color)]">
          {game.result}
        </span>
        <button className="rounded-full border border-[color:var(--outline-soft)]/70 px-3 py-1 text-xs uppercase tracking-[0.12em] text-[color:var(--foreground)] transition-colors hover:bg-[color:var(--outline-soft)]/15">
          Box Score
        </button>
        <button className="rounded-full border border-[color:var(--outline-soft)]/70 px-3 py-1 text-xs uppercase tracking-[0.12em] text-[color:var(--foreground)] transition-colors hover:bg-[color:var(--outline-soft)]/15">
          Recap
        </button>
      </div>
    </article>
  );
}
