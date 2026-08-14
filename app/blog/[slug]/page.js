import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { formatPostDate } from '@/components/PostCard';
import StripeThumb from '@/components/StripeThumb';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  return {
    title: `${post.title} — Tatiana Uklist`,
    description: post.description,
  };
}

function stampDates(publishedDate) {
  const base = new Date(publishedDate);
  return [30, 60, 90, 120].map((daysAgo) => {
    const d = new Date(base);
    d.setUTCDate(d.getUTCDate() - daysAgo);
    return d
      .toLocaleDateString('en-US', { month: 'short', day: '2-digit', timeZone: 'UTC' })
      .toUpperCase()
      .replace(',', '');
  });
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);

  return (
    <>
      <article className="mx-auto max-w-[720px] px-5 pb-14 pt-12 sm:px-6 sm:pt-16 lg:pt-20">
        <Link href="/blog" className="callno">
          &larr; BACK TO CATALOG
        </Link>
        <div className="callno mb-4 mt-8 uppercase tracking-[0.05em] text-green sm:mt-9">{post.category}</div>
        <h1 className="mb-[22px] font-serif text-[28px] font-medium leading-[1.25] text-ink sm:text-[32px] lg:text-[38px]">
          {post.title}
        </h1>
        <div className="callno mb-9 flex flex-wrap items-center gap-x-3.5 gap-y-2 border-b-2 border-borderStrong pb-6 text-muted sm:mb-11 sm:pb-8">
          <div className="h-[34px] w-[34px] flex-none rounded-full border border-borderc bg-borderc" />
          <span>TATIANA UKLIST</span>
          <span>&middot;</span>
          <span>{formatPostDate(post.published_date)}</span>
          <span>&middot;</span>
          <span>{post.readtime}</span>
        </div>
        <StripeThumb variant={post.stripe} label={post.category} className="mb-9 h-[220px] sm:mb-11 sm:h-[320px]" />
        <div
          className="prose prose-base max-w-none sm:prose-lg"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
      <section className="mx-auto max-w-[720px] px-5 pb-20 sm:px-6 sm:pb-[120px]">
        <div className="border border-borderDashed px-[22px] py-[18px]">
          <div className="callno mb-3 uppercase tracking-[0.06em] text-muted">Date Due Stamps</div>
          <div className="flex flex-wrap gap-2.5">
            {stampDates(post.published_date).map((d) => (
              <span
                key={d}
                className="callno inline-block -rotate-2 border-[1.5px] border-maroon px-[11px] py-1.5 text-maroon"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
