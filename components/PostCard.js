import Link from 'next/link';

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export default function PostCard({ slug, title, published_date, category, description }) {
  return (
    <Link href={`/blog/${slug}`} className="block py-5">
      <div className="flex items-center gap-3 text-xs text-slate-500">
        <span>{formatDate(published_date)}</span>
        {category && (
          <>
            <span>·</span>
            <span>{category}</span>
          </>
        )}
      </div>
      <h2 className="mt-1 text-lg font-semibold text-slate-900">{title}</h2>
      {description && <p className="mt-1 text-sm text-slate-600">{description}</p>}
    </Link>
  );
}
