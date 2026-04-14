"use client";

import { useTheme } from "@/lib/theme/ThemeProvider";
import { ThemeMode } from "@/lib/theme/themeStorage";
import { motion, useReducedMotion } from "framer-motion";

const modeLabels: Record<ThemeMode, string> = {
  light: "Light",
  dark: "Dark",
};

type ThemeToggleProps = {
  compact?: boolean;
};

function DarkModeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      viewBox="0 -960 960 960"
      width="20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-146 93-257.5T410-880q-18 99 11 193.5T521-521q71 71 165.5 100T880-410q-26 144-138 237T484-80Zm0-80q88 0 163-44t118-121q-86-8-163-43.5T464-465q-61-61-97-138t-43-163q-77 43-120.5 118.5T160-484q0 135 94.5 229.5T484-160Zm-20-305Z" />
    </svg>
  );
}

function LightModeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      viewBox="0 -960 960 960"
      width="20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M440-760v-160h80v160h-80Zm266 110-55-55 112-115 56 57-113 113Zm54 210v-80h160v80H760ZM440-40v-160h80v160h-80ZM254-652 140-763l57-56 113 113-56 54Zm508 512L651-255l54-54 114 110-57 59ZM40-440v-80h160v80H40Zm157 300-56-57 112-112 29 27 29 28-114 114Zm113-170q-70-70-70-170t70-170q70-70 170-70t170 70q70 70 70 170t-70 170q-70 70-170 70t-170-70Zm283-57q47-47 47-113t-47-113q-47-47-113-47t-113 47q-47 47-47 113t47 113q47 47 113 47t113-47ZM480-480Z" />
    </svg>
  );
}

export default function ThemeToggle({ compact = false }: ThemeToggleProps) {
  const { mode, setMode } = useTheme();
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative" data-compact={compact ? "true" : "false"}>
      <div
        role="radiogroup"
        aria-label="Theme mode"
        className="inline-flex items-center gap-1 rounded-full border border-[color:var(--outline-soft)]/55 bg-[color:var(--button-surface)] p-1 shadow-[var(--glow-shadow)] backdrop-blur-sm"
      >
        {(["light", "dark"] as ThemeMode[]).map((option) => {
          const isActive = mode === option;

          return (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={isActive}
              aria-label={`Switch to ${modeLabels[option]} mode`}
              onClick={() => setMode(option)}
              className="relative isolate inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full text-[color:var(--title-color)] outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--theme-ring)] sm:h-9 sm:w-9"
            >
              {isActive ? (
                <motion.span
                  layoutId="theme-mode-pill"
                  transition={{
                    duration: reduceMotion ? 0 : 0.26,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0 -z-10 rounded-full bg-[linear-gradient(110deg,color-mix(in_srgb,var(--title-color)_90%,white)_0%,var(--subtitle-color)_100%)]"
                />
              ) : null}
              <span
                className={`relative z-10 ${isActive ? "text-[color:var(--hero-text)]" : "text-[color:var(--title-color)]/78"}`}
              >
                {option === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
