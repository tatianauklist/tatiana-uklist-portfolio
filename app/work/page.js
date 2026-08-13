import { getAllWork } from '@/lib/work';
import WorkCard from '@/components/WorkCard';

export const metadata = {
  title: 'Work — Tatiana Uklist',
};

export default function WorkPage() {
  const work = getAllWork();

  return (
    <>
      <section className="mx-auto max-w-[1120px] px-14 pb-5 pt-20">
        <p className="callno mb-4 uppercase tracking-[0.05em] text-green">Drawer 2 — Work</p>
        <h1 className="mb-5 font-serif text-[42px] font-medium text-ink">
          Programs, launches, and the odd rescue mission.
        </h1>
        <p className="mb-14 max-w-[600px] text-[17px] leading-relaxed text-bodyMuted">
          A sample of community and content work — replace these with your own projects in{' '}
          <code>lib/work.js</code>.
        </p>
      </section>
      <section className="mx-auto grid max-w-[1120px] grid-cols-2 gap-8 px-14 pb-[110px]">
        {work.map((proj) => (
          <WorkCard key={proj.num} variant="full" {...proj} />
        ))}
      </section>
    </>
  );
}
