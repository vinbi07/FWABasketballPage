import Button from "@/components/ui/Button";
import SectionReveal from "@/components/ui/SectionReveal";

export default function FollowNewsletterSection() {
  return (
    <SectionReveal
      id="follow-newsletter"
      className="px-5 py-12 sm:px-8 lg:px-12"
    >
      <div className="panel-surface mx-auto max-w-7xl rounded-2xl p-6 sm:p-8">
        <span className="inline-flex items-center rounded-full border border-[color:var(--outline-soft)] bg-[color:var(--button-surface)] px-3 py-1 text-[14px] font-semibold uppercase tracking-[0.18em] text-[color:var(--title-color)]">
          Newsletter
        </span>
        <h2 className="section-title mt-3">Stay In The Pilot Loop</h2>
        <p className="mt-3 max-w-3xl text-sm uppercase tracking-[0.08em] text-[color:var(--foreground)]/80 sm:text-base">
          Get team updates, game reminders, and behind-the-scenes drops straight
          to your inbox.
        </p>

        <form
          className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center"
          action="#"
          method="get"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            required
            placeholder="Email address"
            className="h-11 w-full rounded-full border border-[color:var(--panel-border)] bg-[color:var(--surface)] px-4 text-sm uppercase tracking-[0.08em] text-[color:var(--foreground)] outline-none ring-0 placeholder:text-[color:var(--foreground)]/45 focus:border-[color:var(--outline-soft)] sm:max-w-md"
          />
          <Button label="+ Follow" className="h-11 min-w-36" />
        </form>
      </div>
    </SectionReveal>
  );
}
