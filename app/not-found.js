import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="text-2xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-2 text-slate-600">The page you're looking for doesn't exist.</p>
      <Link href="/" className="mt-6 inline-block text-sm font-medium text-slate-900 underline">
        Back home
      </Link>
    </div>
  );
}
