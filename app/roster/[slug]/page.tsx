import Footer from "@/components/layout/Footer";
import GlobalNav from "@/components/layout/GlobalNav";
import PlayerTabs from "@/components/sections/PlayerTabs";
import { clubData } from "@/lib/clubData";
import { toPlayerSlug } from "@/lib/playerSlug";
import Image from "next/image";
import { notFound } from "next/navigation";

type PlayerDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PlayerDetailPage({
  params,
}: PlayerDetailPageProps) {
  const { slug } = await params;

  const player = clubData.roster.find(
    (entry) => toPlayerSlug(entry.name) === slug,
  );

  if (!player) {
    notFound();
  }

  const memberSinceYear = player.memberSinceYear ?? 2022;
  const yearsSince = new Date().getFullYear() - memberSinceYear;

  return (
    <div className="min-h-screen bg-transparent text-[color:var(--foreground)]">
      <GlobalNav
        clubName={clubData.clubName}
        navItems={clubData.navItems}
        socials={clubData.socials}
      />

      <main className="pb-20 pt-14 sm:pt-16">
        <section className="px-5 pt-10 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <article className="overflow-hidden rounded-3xl border border-[color:var(--outline-soft)]/60 bg-white/85 shadow-[0_22px_54px_rgba(18,26,33,0.11)]">
              <div className="grid items-center gap-6 p-6 sm:p-8 md:grid-cols-[220px,1fr]">
                <div className="flex justify-center md:justify-start">
                  <div className="relative h-44 w-44 overflow-hidden rounded-full border border-[color:var(--outline-soft)]/60 bg-[color:var(--background)]">
                    <Image
                      src={player.image}
                      alt={`${player.name} portrait`}
                      fill
                      className="object-cover"
                      sizes="176px"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h1 className="text-3xl font-bold uppercase tracking-[0.08em] text-[color:var(--title-color)] sm:text-4xl">
                    {player.name}
                  </h1>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--subtitle-color)]">
                    <span>#{player.number}</span>
                    <span>{player.position}</span>
                    <span>{player.gender ?? "F"}</span>
                  </div>

                  <div className="text-sm uppercase tracking-[0.12em] text-[color:var(--subtitle-color)]">
                    Member Since{" "}
                    <span className="font-semibold text-[color:var(--title-color)]">
                      {yearsSince} Years
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <PlayerTabs player={player} yearsSince={yearsSince} />
      </main>

      <Footer socials={clubData.socials} />
    </div>
  );
}
