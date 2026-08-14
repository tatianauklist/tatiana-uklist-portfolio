import { getAllWork } from '@/lib/work';
import WorkCard from '@/components/WorkCard';

export const metadata = {
  title: 'Work — Tatiana Uklist',
};

export default function WorkPage() {
  const work = getAllWork();

  return (
    <>
      <section className="mx-auto max-w-[1120px] px-5 pb-5 pt-12 sm:px-8 sm:pt-16 lg:px-14 lg:pt-20">
        <p className="callno mb-4 uppercase tracking-[0.05em] text-green">Drawer 2 — Work</p>
        <h1 className="mb-10 font-serif text-3xl font-medium text-ink sm:mb-14 sm:text-4xl lg:text-[42px]">
          Programs, launches, and the odd rescue mission.
        </h1>
      </section>
      <section className="mx-auto grid max-w-[1120px] grid-cols-1 gap-6 px-5 pb-16 sm:grid-cols-2 sm:gap-8 sm:px-8 lg:px-14 lg:pb-[110px]">
        {work.map((proj) => (
          <WorkCard key={proj.num} variant="full" {...proj} />
        ))}
      </section>
    </>
  );
}
