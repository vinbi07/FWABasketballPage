"use client";

import {
  getInitialThemeMode,
  ResolvedTheme,
  THEME_STORAGE_KEY,
  ThemeMode,
} from "@/lib/theme/themeStorage";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type ThemeContextValue = {
  mode: ThemeMode;
  resolvedTheme: ResolvedTheme;
  setMode: (mode: ThemeMode) => void;
  cycleMode: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const themeCycleOrder: ThemeMode[] = ["light", "dark"];

function readStoredThemeMode(): ThemeMode {
  return getInitialThemeMode();
}

function applyResolvedTheme(resolvedTheme: ResolvedTheme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", resolvedTheme);
  root.style.colorScheme = resolvedTheme;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(readStoredThemeMode);
  const resolvedTheme = useMemo<ResolvedTheme>(() => mode, [mode]);

  useEffect(() => {
    applyResolvedTheme(resolvedTheme);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, mode);
    } catch {
      // Ignore storage errors in restricted browsing environments.
    }
  }, [mode, resolvedTheme]);

  const cycleMode = useCallback(() => {
    setMode((currentMode) => {
      const currentIndex = themeCycleOrder.indexOf(currentMode);
      const nextIndex = (currentIndex + 1) % themeCycleOrder.length;
      return themeCycleOrder[nextIndex];
    });
  }, []);

  const value = useMemo(
    () => ({ mode, resolvedTheme, setMode, cycleMode }),
    [mode, resolvedTheme, cycleMode],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider.");
  }

  return context;
}
