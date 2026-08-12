import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';

export const metadata = {
  title: 'Blog — Your Name',
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-bold text-slate-900">Blog</h1>
      {posts.length === 0 ? (
        <p className="mt-4 text-slate-600">No posts yet — check back soon.</p>
      ) : (
        <div className="mt-4 divide-y divide-slate-200">
          {posts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      )}
    </div>
  );
}
