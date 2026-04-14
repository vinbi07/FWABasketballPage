import SectionReveal from "@/components/ui/SectionReveal";
import { Partner, SocialLink } from "@/lib/types";
import Image from "next/image";

type PartnersSectionProps = {
  partners: Partner[];
  socials?: SocialLink[];
};

export default function PartnersSection({
  partners,
  socials = [],
}: PartnersSectionProps) {
  return (
    <SectionReveal id="shop" className="px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto mt-0 max-w-7xl">
        <h2 className="section-title">Partners</h2>
        {socials.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--outline-soft)]/70 bg-[color:var(--button-surface)] p-2 transition-colors hover:bg-[color:var(--button-surface-hover)]"
              >
                <Image
                  src={social.icon}
                  alt={`${social.label} icon`}
                  width={30}
                  height={30}
                  className="social-icon h-7 w-7 object-contain"
                />
              </a>
            ))}
          </div>
        ) : null}
        <div className="mt-6 rounded-2xl bg-gradient-to-r from-[color:var(--title-color)] to-[color:var(--subtitle-color)] p-[2px] shadow-[var(--panel-shadow)]">
          <div className="rounded-2xl bg-[color:var(--surface)] p-4 sm:p-5">
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex h-36 items-center justify-center rounded-xl bg-white px-2"
                >
                  <div className="relative h-24 w-full">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 40vw, (max-width: 1024px) 22vw, 160px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
