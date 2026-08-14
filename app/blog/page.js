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
      <section className="mx-auto max-w-[1120px] px-5 pb-5 pt-12 sm:px-8 sm:pt-16 lg:px-14 lg:pt-20">
        <p className="callno mb-4 uppercase tracking-[0.05em] text-green">Reading Room</p>
        <h1 className="mb-8 font-serif text-3xl font-medium text-ink sm:mb-[50px] sm:text-4xl lg:text-[42px]">
          Notes on security communities, and everything else.
        </h1>
      </section>

      {posts.length === 0 ? (
        <section className="mx-auto max-w-[1120px] px-5 pb-16 sm:px-8 lg:px-14 lg:pb-24">
          <p className="text-bodyMuted">No posts yet — check back soon.</p>
        </section>
      ) : (
        <>
          <section className="mx-auto max-w-[1120px] px-5 pb-12 sm:px-8 sm:pb-16 lg:px-14">
            <PostCard variant="list-featured" post={featuredPost} />
          </section>

          {rest.length > 0 && (
            <section className="mx-auto max-w-[1120px] px-5 pb-16 pt-6 sm:px-8 sm:pt-9 lg:px-14 lg:pb-[110px]">
              <div className="callno grid grid-cols-[70px_1fr] border-b-2 border-borderStrong pb-3 uppercase tracking-[0.05em] text-muted sm:grid-cols-[90px_1fr_100px_90px]">
                <span>Image</span>
                <span>Title</span>
                <span className="hidden sm:block">Date Due</span>
                <span className="hidden sm:block">Time</span>
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
