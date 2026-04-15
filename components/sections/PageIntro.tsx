import SectionReveal from "@/components/ui/SectionReveal";

type IntroStat = {
  label: string;
  value: string;
};

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  stats?: IntroStat[];
};

export default function PageIntro({
  eyebrow,
  title,
  description,
  stats = [],
}: PageIntroProps) {
  return (
    <SectionReveal className="px-5 pt-14 sm:px-8 sm:pt-16 lg:px-12">
      <div className="mx-auto max-w-7xl rounded-2xl border border-[color:var(--panel-border)] bg-[color:var(--broadcast-surface)] p-6 shadow-[var(--panel-shadow)] sm:p-8">
        <p className="section-subtitle text-xs font-semibold uppercase tracking-[0.2em]">
          {eyebrow}
        </p>
        <h1 className="section-title mt-4 max-w-4xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-sm uppercase tracking-[0.08em] text-[color:var(--foreground)]/85 sm:text-base">
          {description}
        </p>
      </div>
    </SectionReveal>
  );
}
