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
      <section className="mx-auto max-w-[1120px] px-14 pb-5 pt-20">
        <div className="relative mx-auto max-w-[900px] rounded border border-borderc bg-surface px-[60px] pb-14 pt-[50px] shadow-[0_2px_10px_rgb(0_0_0/0.06)]">
          <div className="absolute left-4 top-4 flex gap-1.5">
            <div className="punch" />
            <div className="punch" />
          </div>
          <div className="callno absolute right-6 top-[18px]">CARD NO. 001</div>
          <div className="my-[34px] h-0.5 w-full bg-maroon" />
          <p className="callno mb-[18px] uppercase tracking-[0.06em] text-green">
            Subject: Community &amp; Security
          </p>
          <h1 className="mb-6 max-w-[760px] text-balance font-serif text-[52px] font-medium leading-[1.15] text-ink">
            I build the rooms where security people actually talk to each other.
          </h1>
          <p className="mb-9 max-w-[580px] text-lg leading-relaxed text-body">
            Community lead for security companies — programs, events, and writing that help
            practitioners find each other before the incident, not during it.
          </p>
          <div className="flex gap-4">
            <Link
              href="/work"
              className="rounded bg-borderStrong px-[26px] py-3 text-[15px] font-medium text-cream"
            >
              Browse the catalog
            </Link>
            <Link
              href="/blog"
              className="rounded border-[1.5px] border-borderStrong px-[26px] py-3 text-[15px] font-medium text-ink"
            >
              Reading room &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-[1120px] items-baseline justify-between px-14 pb-2 pt-[70px]">
        <h2 className="font-serif text-[26px] font-medium text-ink">Card Catalog — Selected Work</h2>
        <Link href="/work" className="callno">
          FULL DRAWER &rarr;
        </Link>
      </section>
      <section className="mx-auto grid max-w-[1120px] grid-cols-3 gap-[26px] px-14 pb-24 pt-6">
        {featuredWork.map((proj) => (
          <Link key={proj.num} href="/work">
            <WorkCard variant="compact" {...proj} />
          </Link>
        ))}
      </section>

      {posts.length > 0 && (
        <section className="border-y-2 border-borderStrong bg-band">
          <div className="mx-auto max-w-[1120px] px-14 pb-24 pt-[60px]">
            <div className="mb-9 flex items-baseline justify-between">
              <h2 className="font-serif text-[26px] font-medium text-ink">
                Reading Room — Recent Entries
              </h2>
              <Link href="/blog" className="callno">
                ALL ENTRIES &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-[1.1fr_1fr] gap-12">
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
