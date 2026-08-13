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
      <article className="mx-auto max-w-[720px] px-6 pb-16 pt-20">
        <Link href="/blog" className="callno">
          &larr; BACK TO CATALOG
        </Link>
        <div className="callno mb-4 mt-9 uppercase tracking-[0.05em] text-green">{post.category}</div>
        <h1 className="mb-[22px] font-serif text-[38px] font-medium leading-[1.25] text-ink">
          {post.title}
        </h1>
        <div className="callno mb-11 flex items-center gap-3.5 border-b-2 border-borderStrong pb-8 text-muted">
          <div className="h-[34px] w-[34px] flex-none rounded-full border border-borderc bg-borderc" />
          <span>TATIANA UKLIST</span>
          <span>&middot;</span>
          <span>{formatPostDate(post.published_date)}</span>
          <span>&middot;</span>
          <span>{post.readtime}</span>
        </div>
        <StripeThumb variant={post.stripe} label={post.category} className="mb-11 h-[320px]" />
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
      <section className="mx-auto max-w-[720px] px-6 pb-[120px]">
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
