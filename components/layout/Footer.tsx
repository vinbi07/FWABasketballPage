import { SocialLink } from "@/lib/types";
import Image from "next/image";

type FooterProps = {
  socials: SocialLink[];
};

export default function Footer({ socials }: FooterProps) {
  return (
    <footer className="mt-24 border-t border-[color:var(--outline-soft)]/30 bg-[color:var(--background)] py-12">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:grid-cols-3 sm:px-8 lg:px-12">
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--title-color)]">
            Company
          </h3>
          <ul className="space-y-2 text-sm text-[color:var(--foreground)]/85">
            <li>
              <a href="#" className="hover:text-[color:var(--subtitle-color)]">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[color:var(--subtitle-color)]">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[color:var(--subtitle-color)]">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--title-color)]">
            Resources
          </h3>
          <ul className="space-y-2 text-sm text-[color:var(--foreground)]/85">
            <li>
              <a href="#" className="hover:text-[color:var(--subtitle-color)]">
                Tickets
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[color:var(--subtitle-color)]">
                Merch
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[color:var(--subtitle-color)]">
                Newsroom
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--title-color)]">
            Socials
          </h3>
          <ul className="flex flex-wrap items-center gap-3 text-sm text-[color:var(--foreground)]/85">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--outline-soft)]/50 bg-[color:var(--button-surface)] p-2 transition-colors hover:bg-[color:var(--button-surface-hover)]"
                >
                  <Image
                    src={social.icon}
                    alt={`${social.label} icon`}
                    width={28}
                    height={28}
                    className="social-icon h-7 w-7 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
