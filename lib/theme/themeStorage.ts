export const THEME_STORAGE_KEY = "fwa-theme";

export const themeModes = ["light", "dark"] as const;

export type ThemeMode = (typeof themeModes)[number];
export type ResolvedTheme = ThemeMode;

export const DEFAULT_THEME_MODE: ThemeMode = "light";

export function isThemeMode(value: string): value is ThemeMode {
  return themeModes.includes(value as ThemeMode);
}

export function getSystemResolvedTheme(): ResolvedTheme {
  if (typeof window === "undefined") {
    return DEFAULT_THEME_MODE;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function getInitialThemeMode(): ThemeMode {
  if (typeof window === "undefined") {
    return DEFAULT_THEME_MODE;
  }

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored && isThemeMode(stored)) {
    return stored;
  }

  return getSystemResolvedTheme();
}
