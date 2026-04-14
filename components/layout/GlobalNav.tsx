"use client";

import { NavItem, SocialLink } from "@/lib/types";
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

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--outline-soft)]/55 bg-[color:var(--background)]/92 backdrop-blur-xl shadow-[0_10px_28px_rgba(38,38,38,0.22)]">
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

        <nav aria-label="Primary" className="flex items-center gap-2 sm:gap-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] transition-colors sm:px-4 sm:py-2 ${
                  isActive
                    ? "bg-[color:var(--title-color)] text-[color:var(--outline-soft)]"
                    : "text-[color:var(--subtitle-color)] hover:bg-[color:var(--outline-soft)]/15"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {socials.map((social) => (
            <a
              key={`nav-${social.label}`}
              href={social.href}
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--outline-soft)]/55 bg-white/70 p-2 transition-colors hover:bg-white"
            >
              <Image
                src={social.icon}
                alt={`${social.label} icon`}
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
