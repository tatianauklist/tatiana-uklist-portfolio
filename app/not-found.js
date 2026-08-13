import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[720px] px-6 py-32 text-center">
      <p className="callno mb-4 uppercase tracking-[0.05em] text-maroon">Card Not Found</p>
      <h1 className="mb-3 font-serif text-3xl font-medium text-ink">
        This entry isn&apos;t in the catalog.
      </h1>
      <p className="mb-8 text-body">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        href="/"
        className="rounded bg-borderStrong px-[26px] py-3 text-[15px] font-medium text-cream"
      >
        Back to Home
      </Link>
    </div>
  );
}
