import { getAllPosts, getPostBySlug } from '@/lib/posts';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  return {
    title: `${post.title} — Your Name`,
    description: post.description,
  };
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <div className="flex items-center gap-3 text-xs text-slate-500">
        <span>{formatDate(post.published_date)}</span>
        {post.category && (
          <>
            <span>·</span>
            <span>{post.category}</span>
          </>
        )}
      </div>
      <h1 className="mt-2 text-3xl font-bold text-slate-900">{post.title}</h1>
      <div
        className="prose prose-slate mt-8 max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
