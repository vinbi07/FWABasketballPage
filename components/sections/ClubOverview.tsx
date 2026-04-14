import SectionReveal from "@/components/ui/SectionReveal";

type ClubOverviewProps = {
  description: string;
};

export default function ClubOverview({ description }: ClubOverviewProps) {
  return (
    <SectionReveal id="club" className="px-5 py-10 sm:px-8 lg:px-12">
      <div className="panel-surface mx-auto max-w-7xl rounded-2xl p-6 sm:p-8">
        <p className="section-subtitle text-xs font-semibold uppercase tracking-[0.2em]">Club Overview</p>
        <p className="mt-4 max-w-4xl text-base leading-relaxed uppercase tracking-[0.08em] text-[color:var(--foreground)] sm:text-lg">
          {description}
        </p>
      </div>
    </SectionReveal>
  );
}
