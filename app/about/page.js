import Link from 'next/link';
import StripeThumb from '@/components/StripeThumb';

export const metadata = {
  title: 'About — Tatiana Uklist',
};

export default function AboutPage() {
  return (
    <section className="mx-auto grid max-w-[1000px] grid-cols-1 items-start gap-10 px-5 pb-16 pt-12 sm:px-8 sm:pt-16 md:grid-cols-[1fr_1.3fr] md:gap-14 lg:px-14 lg:pb-[120px] lg:pt-20">
      <div className="mx-auto w-full max-w-sm md:mx-0 md:max-w-none">
        <StripeThumb variant="a" label="PORTRAIT" className="h-[280px] border border-borderDashed sm:h-[340px]" />
        <div className="callno mt-2.5 text-center text-muted">CATALOG PHOTO &middot; UKLIST, T.</div>
      </div>
      <div>
        <p className="callno mb-4 uppercase tracking-[0.05em] text-green">Subject Card</p>
        <h1 className="mb-[26px] font-serif text-3xl font-medium text-ink sm:text-4xl">Hi, I&apos;m Tatiana.</h1>
        <div className="text-[17px] leading-[1.75] text-body">
          {/* Placeholder bio — replace these paragraphs with your own background. */}
          <p className="mb-5">
            I build the rooms where security people actually talk to each other — community
            programs, events, and writing that help practitioners find each other before the
            incident, not during it.
          </p>
          <p className="mb-5">
            This paragraph is a placeholder. Swap it for a couple of sentences about how you got
            here — the roles, the turns, the thing that made you care about this work.
          </p>
          <p className="mb-5">
            Another placeholder: use this space for something outside of work — what you read,
            build, or think about when you&apos;re not doing the day job.
          </p>
        </div>
        <div className="callno mt-8 flex gap-6">
          <Link href="/contact">GET IN TOUCH &rarr;</Link>
          <a href="#">LINKEDIN</a>
          <a href="#">MASTODON</a>
        </div>
      </div>
    </section>
  );
}
