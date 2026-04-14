import Image from "next/image";
import { ScheduleGame } from "@/lib/types";

type GameRowProps = {
  game: ScheduleGame;
};

const monthLookup: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

function formatDateParts(rawDate: string) {
  const [monthAbbrev, dayNumberRaw] = rawDate.split(" ");
  const monthIndex = monthLookup[monthAbbrev as keyof typeof monthLookup];
  const dayNumber = Number(dayNumberRaw);

  if (monthIndex === undefined || Number.isNaN(dayNumber)) {
    return {
      weekday: "Game Day",
      month: rawDate,
      day: "--",
      year: String(new Date().getFullYear()),
    };
  }

  const year = new Date().getFullYear();
  const gameDate = new Date(year, monthIndex, dayNumber);

  return {
    weekday: gameDate.toLocaleDateString("en-US", { weekday: "short" }),
    month: gameDate.toLocaleDateString("en-US", { month: "short" }),
    day: String(dayNumber),
    year: String(year),
  };
}

function parseTeams(matchup: string) {
  const [firstTeam, secondTeam] = matchup
    .split(" vs ")
    .map((team) => team?.trim());

  if (!firstTeam || !secondTeam) {
    return {
      homeTeam: "Home Team",
      awayTeam: "Away Team",
    };
  }

  return {
    homeTeam: firstTeam,
    awayTeam: secondTeam,
  };
}

function parseFinalScore(result: string) {
  const scoreMatch = result.match(/(\d+)-(\d+)/);
  if (!scoreMatch) {
    return { homeScore: "-", awayScore: "-" };
  }

  return {
    homeScore: scoreMatch[1],
    awayScore: scoreMatch[2],
  };
}

function getLocationFromTeams(
  homeTeam: string,
  awayTeam: string,
  status: ScheduleGame["status"],
) {
  if (status !== "Final") {
    return "TBD, TX";
  }

  const potentialCity = awayTeam.split(" ")[0] || "Fort Worth";
  if (homeTeam.includes("Pilots")) {
    return "Fort Worth, TX";
  }

  return `${potentialCity}, TX`;
}

function getTeamInitials(teamName: string) {
  return teamName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function isPilotsTeam(teamName: string) {
  const normalizedTeam = teamName.replace(/[^a-z]/gi, "").toLowerCase();
  const pilotsNormalized = "fortwortharlingtonpilots";
  return normalizedTeam.includes(pilotsNormalized);
}

export default function GameRow({ game }: GameRowProps) {
  const isWin = game.status === "Final" && game.winner === "home";
  const { weekday, month, day, year } = formatDateParts(game.date);
  const { homeTeam, awayTeam } = parseTeams(game.matchup);
  const { homeScore, awayScore } = parseFinalScore(game.result);
  const location = getLocationFromTeams(homeTeam, awayTeam, game.status);

  return (
    <article
      className={`grid gap-4 rounded-2xl border p-4 sm:grid-cols-[190px_1fr] sm:items-stretch ${
        isWin
          ? "border-[color:var(--outline-soft)] bg-[linear-gradient(120deg,color-mix(in_srgb,var(--outline-deep)_22%,var(--background))_0%,color-mix(in_srgb,var(--background)_92%,var(--outline-soft)_8%)_100%)]"
          : "border-[color:var(--outline-soft)]/60 bg-[linear-gradient(120deg,color-mix(in_srgb,var(--background)_96%,white)_0%,color-mix(in_srgb,var(--background)_90%,var(--outline-soft)_10%)_100%)]"
      }`}
    >
      <div className="flex flex-col justify-between rounded-xl border border-[color:var(--outline-soft)]/45 bg-[color:var(--background)]/60 p-3">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--subtitle-color)]">
            {weekday}
          </p>
          <p className="text-lg font-bold uppercase tracking-[0.08em] text-[color:var(--title-color)]">
            {month} {day}
          </p>
          <p className="text-xs uppercase tracking-[0.14em] text-[color:var(--foreground)]/70">
            {year}
          </p>
        </div>
        <div className="mt-3 rounded-lg border border-[color:var(--outline-soft)]/55 bg-[color:var(--background)]/90 px-2 py-1.5">
          <p className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--subtitle-color)]">
            {location}
          </p>
        </div>
      </div>

      <div className="flex h-full flex-col justify-between gap-3 rounded-xl border border-[color:var(--outline-soft)]/45 bg-[color:var(--background)]/72 p-3">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-md border border-[color:var(--outline-soft)]/60 bg-[color:var(--outline-soft)]/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--subtitle-color)]">
            {game.status === "Final" ? "Final" : "Scheduled"}
          </span>
          <span className="text-xs uppercase tracking-[0.14em] text-[color:var(--foreground)]/65">
            {game.time}
          </span>
        </div>

        <div className="space-y-2">
          <div className="grid grid-cols-[44px_34px_minmax(0,1fr)] items-center gap-2 rounded-lg border border-[color:var(--outline-soft)]/40 bg-[color:var(--background)]/95 px-2 py-1.5">
            <span className="text-base font-bold text-[color:var(--title-color)]">
              {homeScore}
            </span>
            {isPilotsTeam(homeTeam) ? (
              <span className="inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border border-[color:var(--outline-soft)]/60 bg-white/90 p-0.5">
                <Image
                  src="/logos/AWFPLogo.png"
                  alt="Fort Worth Arlington Pilots logo"
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
              </span>
            ) : (
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[color:var(--outline-soft)]/60 bg-[color:var(--outline-soft)]/10 text-[11px] font-semibold uppercase tracking-[0.08em] text-[color:var(--title-color)]">
                {getTeamInitials(homeTeam)}
              </span>
            )}
            <span className="truncate text-sm font-semibold uppercase tracking-[0.06em] text-[color:var(--foreground)]">
              {homeTeam}
            </span>
          </div>

          <div className="grid grid-cols-[44px_34px_minmax(0,1fr)] items-center gap-2 rounded-lg border border-[color:var(--outline-soft)]/35 bg-[color:var(--background)]/86 px-2 py-1.5">
            <span className="text-base font-bold text-[color:var(--title-color)]">
              {awayScore}
            </span>
            {isPilotsTeam(awayTeam) ? (
              <span className="inline-flex h-7 w-7 items-center justify-center overflow-hidden  bg-white/90 p-0.5">
                <Image
                  src="/logos/AWFPLogo.png"
                  alt="Fort Worth Arlington Pilots logo"
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
              </span>
            ) : (
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[color:var(--outline-soft)]/60 bg-[color:var(--outline-soft)]/10 text-[11px] font-semibold uppercase tracking-[0.08em] text-[color:var(--title-color)]">
                {getTeamInitials(awayTeam)}
              </span>
            )}
            <span className="truncate text-sm font-semibold uppercase tracking-[0.06em] text-[color:var(--foreground)]">
              {awayTeam}
            </span>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="rounded-full border border-[color:var(--outline-soft)]/70 bg-[color:var(--background)]/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--foreground)] transition-colors hover:bg-[color:var(--outline-soft)]/15">
            Box Score
          </button>
        </div>
      </div>
    </article>
  );
}
