import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';

export const metadata = {
  title: 'Blog — Tatiana Uklist',
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const [featuredPost, ...rest] = posts;

  return (
    <>
      <section className="mx-auto max-w-[1120px] px-14 pb-5 pt-20">
        <p className="callno mb-4 uppercase tracking-[0.05em] text-green">Reading Room</p>
        <h1 className="mb-[50px] font-serif text-[42px] font-medium text-ink">
          Notes on security communities, and everything else.
        </h1>
      </section>

      {posts.length === 0 ? (
        <section className="mx-auto max-w-[1120px] px-14 pb-24">
          <p className="text-bodyMuted">No posts yet — check back soon.</p>
        </section>
      ) : (
        <>
          <section className="mx-auto max-w-[1120px] px-14 pb-16">
            <PostCard variant="list-featured" post={featuredPost} />
          </section>

          {rest.length > 0 && (
            <section className="mx-auto max-w-[1120px] px-14 pb-[110px] pt-9">
              <div className="callno grid grid-cols-[90px_1fr_100px_90px] border-b-2 border-borderStrong pb-3 uppercase tracking-[0.05em] text-muted">
                <span>Image</span>
                <span>Title</span>
                <span>Date Due</span>
                <span>Time</span>
              </div>
              {rest.map((post) => (
                <PostCard key={post.slug} variant="row" post={post} />
              ))}
            </section>
          )}
        </>
      )}
    </>
  );
}
