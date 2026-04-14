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
  const isHomePilots = isPilotsTeam(homeTeam);
  const isAwayPilots = isPilotsTeam(awayTeam);
  const pilotsSide = isHomePilots ? "home" : isAwayPilots ? "away" : undefined;
  const pilotsWon =
    game.status === "Final" &&
    pilotsSide !== undefined &&
    game.winner === pilotsSide;
  const pilotsLost =
    game.status === "Final" &&
    pilotsSide !== undefined &&
    game.winner !== undefined &&
    game.winner !== pilotsSide;

  return (
    <article
      className={`rounded-2xl border bg-[linear-gradient(120deg,color-mix(in_srgb,var(--background)_96%,white)_0%,color-mix(in_srgb,var(--background)_90%,var(--outline-soft)_10%)_100%)] p-4 ${
        isWin
          ? "border-emerald-500/75 shadow-[0_0_0_1px_rgba(16,185,129,0.25)]"
          : "border-[color:var(--outline-soft)]/60"
      }`}
    >
      <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl  px-3 py-2.5">
        <p className="text-md font-semibold uppercase tracking-[0.18em] text-[color:var(--subtitle-color)]">
          {weekday}
        </p>
        <p className="text-md font-semibold uppercase tracking-[0.16em] text-[color:var(--title-color)]">
          {month}
        </p>
        <p className="text-md font-black uppercase tracking-[0.12em] text-[color:var(--title-color)]">
          {day}
        </p>
        <p className="text-xs uppercase tracking-[0.14em] text-[color:var(--foreground)]/70">
          {year}
        </p>
        <span className="hidden h-3 w-px bg-[color:var(--outline-soft)]/45 sm:inline-flex" />
        <p className="text-[14px] uppercase tracking-[0.16em] text-[color:var(--subtitle-color)]">
          {location}
        </p>
      </div>

      <div className="flex h-full flex-col justify-between gap-3 rounded-xl border border-[color:var(--outline-soft)]/45 bg-[color:var(--background)]/72 p-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="rounded-md border border-[color:var(--outline-soft)]/60 bg-[color:var(--outline-soft)]/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--subtitle-color)]">
              {game.status === "Final" ? "Final" : "Scheduled"}
            </span>
            {isWin ? (
              <span className="rounded-md border border-[color:var(--subtitle-color)]/55 bg-[color:var(--subtitle-color)]/12 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[color:var(--subtitle-color)]">
                Win
              </span>
            ) : null}
          </div>
          <span className="text-xs uppercase tracking-[0.14em] text-[color:var(--foreground)]/65">
            {game.time}
          </span>
        </div>

        <div className="space-y-2">
          <div
            className={`grid grid-cols-[44px_34px_minmax(0,1fr)] items-center gap-2 rounded-lg border bg-[color:var(--background)]/95 px-2 ${
              isHomePilots && pilotsWon
                ? "border-emerald-500/65 py-2.5 shadow-[0_0_0_1px_rgba(16,185,129,0.22)]"
                : isHomePilots && pilotsLost
                  ? "border-[color:var(--subtitle-color)]/50 py-2.5"
                  : "border-[color:var(--outline-soft)]/40 py-1.5"
            }`}
          >
            <span className="text-base font-bold text-[color:var(--title-color)]">
              {homeScore}
            </span>
            {isHomePilots ? (
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
            <span
              className={`truncate text-sm font-semibold uppercase tracking-[0.06em] text-[color:var(--foreground)] ${
                isHomePilots ? "text-base" : ""
              }`}
            >
              {homeTeam}
            </span>
          </div>

          <div
            className={`grid grid-cols-[44px_34px_minmax(0,1fr)] items-center gap-2 rounded-lg border bg-[color:var(--background)]/86 px-2 ${
              isAwayPilots && pilotsWon
                ? "border-emerald-500/65 py-2.5 shadow-[0_0_0_1px_rgba(16,185,129,0.22)]"
                : isAwayPilots && pilotsLost
                  ? "border-[color:var(--subtitle-color)]/50 py-2.5"
                  : "border-[color:var(--outline-soft)]/35 py-1.5"
            }`}
          >
            <span className="text-base font-bold text-[color:var(--title-color)]">
              {awayScore}
            </span>
            {isAwayPilots ? (
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
                {getTeamInitials(awayTeam)}
              </span>
            )}
            <span
              className={`truncate text-sm font-semibold uppercase tracking-[0.06em] text-[color:var(--foreground)] ${
                isAwayPilots ? "text-base" : ""
              }`}
            >
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
