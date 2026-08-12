import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900">Hi, I'm Your Name.</h1>
      <p className="mt-4 max-w-xl text-slate-600">
        I build things for the web. This is where I share my projects and write about what I'm
        learning.
      </p>
      <div className="mt-6 flex gap-4">
        <Link
          href="/projects"
          className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
        >
          View projects
        </Link>
        <Link
          href="/blog"
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 hover:border-slate-400"
        >
          Read the blog
        </Link>
      </div>

      {recentPosts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Recent posts
          </h2>
          <div className="mt-2 divide-y divide-slate-200">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
