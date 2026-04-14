"use client";

import { useState } from "react";
import { NavItem, SocialLink } from "@/lib/types";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type GlobalNavProps = {
  clubName: string;
  navItems: NavItem[];
  socials: SocialLink[];
};

export default function GlobalNav({
  clubName,
  navItems,
  socials,
}: GlobalNavProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isRosterPath =
    pathname === "/roster" || pathname.startsWith("/roster/");
  const [isClubMobileSubnavOpen, setIsClubMobileSubnavOpen] =
    useState(isRosterPath);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--outline-soft)]/55 bg-[color:var(--background)]/92 backdrop-blur-xl shadow-[var(--nav-shadow)]">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="flex items-center"
          aria-label={`${clubName} home`}
        >
          <Image
            src="/logos/AWFPLogo.png"
            alt={`${clubName} logo`}
            width={300}
            height={180}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1.5 sm:gap-3 lg:flex"
        >
          {navItems.map((item) => {
            const isClubItem = item.label.toLowerCase() === "club";
            const isActive =
              pathname === item.href || (isClubItem && isRosterPath);
            return (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] transition-colors sm:px-4 sm:py-2 ${
                    isActive
                      ? "bg-[color:var(--highlight-bg)] text-[color:var(--highlight-text)]"
                      : "text-[color:var(--subtitle-color)] hover:bg-[color:var(--outline-soft)]/15"
                  }`}
                >
                  {item.label}
                </Link>

                {isClubItem ? (
                  <div className="pointer-events-none absolute left-0 top-[calc(100%+0.35rem)] z-20 min-w-40 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                    <Link
                      href="/roster"
                      className={`block rounded-lg border border-[color:var(--outline-soft)]/45 bg-[color:var(--surface)]/96 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] shadow-[var(--panel-shadow)] transition-colors ${
                        isRosterPath
                          ? "border-[color:var(--outline-soft)]/70 bg-[color:var(--outline-soft)]/14 text-[color:var(--subtitle-color)]"
                          : "text-[color:var(--subtitle-color)] hover:bg-[color:var(--outline-soft)]/12"
                      }`}
                    >
                      Roster
                    </Link>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--outline-soft)]/55 bg-[color:var(--button-surface)] text-[color:var(--title-color)] transition-colors hover:bg-[color:var(--button-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--theme-ring)] lg:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-primary-nav"
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>

          {socials.map((social) => (
            <a
              key={`nav-${social.label}`}
              href={social.href}
              aria-label={social.label}
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-[color:var(--outline-soft)]/55 bg-[color:var(--button-surface)] p-2 transition-colors hover:bg-[color:var(--button-surface-hover)] lg:flex"
            >
              <Image
                src={social.icon}
                alt={`${social.label} icon`}
                width={24}
                height={24}
                className="social-icon h-6 w-6 object-contain"
              />
            </a>
          ))}
          <ThemeToggle compact />
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div
          id="mobile-primary-nav"
          className="border-t border-[color:var(--outline-soft)]/40 bg-[color:var(--background)]/98 px-5 pb-4 pt-3 shadow-[var(--panel-shadow)] lg:hidden"
        >
          <nav aria-label="Primary mobile" className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isClubItem = item.label.toLowerCase() === "club";
              const isActive =
                pathname === item.href || (isClubItem && isRosterPath);

              if (isClubItem) {
                return (
                  <div key={`mobile-${item.label}`} className="space-y-1">
                    <div
                      className={`flex items-center rounded-xl pr-2 transition-colors ${
                        isActive
                          ? "bg-[color:var(--highlight-bg)] text-[color:var(--highlight-text)]"
                          : "text-[color:var(--subtitle-color)] hover:bg-[color:var(--outline-soft)]/15"
                      }`}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block flex-1 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em]"
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-expanded={isClubMobileSubnavOpen}
                        aria-controls="mobile-club-subnav"
                        aria-label={
                          isClubMobileSubnavOpen
                            ? "Collapse Club submenu"
                            : "Expand Club submenu"
                        }
                        onClick={() =>
                          setIsClubMobileSubnavOpen((open) => !open)
                        }
                        className="inline-flex h-8 w-8 items-center justify-center rounded-md "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`h-4 w-4 transition-transform ${
                            isClubMobileSubnavOpen ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                    </div>

                    {isClubMobileSubnavOpen ? (
                      <div id="mobile-club-subnav">
                        <Link
                          href="/roster"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`ml-4 block rounded-lg border border-[color:var(--outline-soft)]/35 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                            isRosterPath
                              ? "bg-[color:var(--highlight-bg)] text-[color:var(--highlight-text)]"
                              : "text-[color:var(--subtitle-color)] hover:bg-[color:var(--outline-soft)]/12"
                          }`}
                        >
                          Roster
                        </Link>
                      </div>
                    ) : null}
                  </div>
                );
              }

              return (
                <div key={`mobile-${item.label}`} className="space-y-1">
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block rounded-xl px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
                      isActive
                        ? "bg-[color:var(--highlight-bg)] text-[color:var(--highlight-text)]"
                        : "text-[color:var(--subtitle-color)] hover:bg-[color:var(--outline-soft)]/15"
                    }`}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            {socials.map((social) => (
              <a
                key={`mobile-social-${social.label}`}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--outline-soft)]/55 bg-[color:var(--button-surface)] p-2 transition-colors hover:bg-[color:var(--button-surface-hover)]"
              >
                <Image
                  src={social.icon}
                  alt={`${social.label} icon`}
                  width={24}
                  height={24}
                  className="social-icon h-6 w-6 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
