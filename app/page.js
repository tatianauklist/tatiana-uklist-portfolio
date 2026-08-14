import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { getAllWork } from '@/lib/work';
import WorkCard from '@/components/WorkCard';
import PostCard from '@/components/PostCard';

export default function HomePage() {
  const featuredWork = getAllWork().slice(0, 3);
  const posts = getAllPosts();
  const [featuredPost, ...rest] = posts;
  const sideposts = rest.slice(0, 3);

  return (
    <>
      <section className="mx-auto max-w-[1120px] px-5 pb-5 pt-12 sm:px-8 sm:pt-16 lg:px-14 lg:pt-20">
        <div className="relative mx-auto max-w-[900px] rounded border border-borderc bg-surface px-6 pb-10 pt-9 shadow-[0_2px_10px_rgb(0_0_0/0.06)] sm:px-10 sm:pt-11 lg:px-[60px] lg:pb-14 lg:pt-[50px]">
          <div className="absolute left-4 top-4 flex gap-1.5">
            <div className="punch" />
            <div className="punch" />
          </div>
          <div className="callno absolute right-4 top-[18px] sm:right-6">CARD NO. 001</div>
          <div className="my-7 h-0.5 w-full bg-maroon sm:my-[34px]" />
          <p className="callno mb-[18px] uppercase tracking-[0.06em] text-green">
            Subject: Community &amp; Security
          </p>
          <h1 className="mb-6 max-w-[760px] text-balance font-serif text-3xl font-medium leading-[1.2] text-ink sm:text-4xl md:text-[52px] md:leading-[1.15]">
            I build the rooms where security people actually talk to each other.
          </h1>
          <p className="mb-8 max-w-[580px] text-base leading-relaxed text-body sm:mb-9 sm:text-lg">
            Community lead for security companies — programs, events, and writing that help
            practitioners find each other before the incident, not during it.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/work"
              className="rounded bg-borderStrong px-[26px] py-3 text-center text-[15px] font-medium text-cream"
            >
              Browse the catalog
            </Link>
            <Link
              href="/blog"
              className="rounded border-[1.5px] border-borderStrong px-[26px] py-3 text-center text-[15px] font-medium text-ink"
            >
              Reading room &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-[1120px] flex-wrap items-baseline justify-between gap-x-4 gap-y-2 px-5 pb-2 pt-14 sm:px-8 lg:px-14 lg:pt-[70px]">
        <h2 className="font-serif text-2xl font-medium text-ink sm:text-[26px]">
          Card Catalog — Selected Work
        </h2>
        <Link href="/work" className="callno">
          FULL DRAWER &rarr;
        </Link>
      </section>
      <section className="mx-auto grid max-w-[1120px] grid-cols-1 gap-5 px-5 pb-16 pt-6 sm:grid-cols-2 sm:gap-6 sm:px-8 lg:grid-cols-3 lg:gap-[26px] lg:px-14 lg:pb-24">
        {featuredWork.map((proj) => (
          <Link key={proj.num} href="/work">
            <WorkCard variant="compact" {...proj} />
          </Link>
        ))}
      </section>

      {posts.length > 0 && (
        <section className="border-y-2 border-borderStrong bg-band">
          <div className="mx-auto max-w-[1120px] px-5 pb-16 pt-10 sm:px-8 sm:pt-12 lg:px-14 lg:pb-24 lg:pt-[60px]">
            <div className="mb-8 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 sm:mb-9">
              <h2 className="font-serif text-2xl font-medium text-ink sm:text-[26px]">
                Reading Room — Recent Entries
              </h2>
              <Link href="/blog" className="callno">
                ALL ENTRIES &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
              <PostCard variant="band-featured" post={featuredPost} />
              <div className="flex flex-col">
                {sideposts.map((post) => (
                  <PostCard key={post.slug} variant="side" post={post} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
