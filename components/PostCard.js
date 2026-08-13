import Link from 'next/link';
import StripeThumb from './StripeThumb';

export function formatPostDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export default function PostCard({ variant = 'row', post }) {
  const { slug, title, category, description, readtime, stripe } = post;
  const date = formatPostDate(post.published_date);

  if (variant === 'band-featured') {
    return (
      <Link
        href={`/blog/${slug}`}
        className="relative flex flex-col gap-4 border border-borderc bg-surface p-[22px]"
      >
        <span className="callno absolute right-3.5 top-3">FEATURED</span>
        <StripeThumb variant={stripe} label={category} className="h-[230px]" />
        <div className="callno uppercase tracking-[0.05em] text-green">{category}</div>
        <div className="font-serif text-2xl font-medium leading-snug text-ink">{title}</div>
        <div className="text-[15px] leading-relaxed text-bodyMuted">{description}</div>
      </Link>
    );
  }

  if (variant === 'side') {
    return (
      <Link href={`/blog/${slug}`} className="flex gap-4 border-b border-dashed border-borderDashed px-1.5 py-4">
        <StripeThumb variant={stripe} label={category} className="h-[66px] w-[88px] flex-none" />
        <div>
          <div className="callno mb-1 uppercase tracking-[0.05em] text-maroon">{category}</div>
          <div className="font-serif text-base font-medium leading-snug text-ink">{title}</div>
        </div>
      </Link>
    );
  }

  if (variant === 'list-featured') {
    return (
      <Link
        href={`/blog/${slug}`}
        className="relative grid grid-cols-2 items-center gap-14 border border-borderc bg-surface p-9"
      >
        <span className="callno absolute right-5 top-4">FEATURED ENTRY</span>
        <StripeThumb variant={stripe} label={category} className="h-[300px]" />
        <div>
          <div className="callno mb-2.5 uppercase tracking-[0.05em] text-green">{category}</div>
          <div className="mb-3.5 font-serif text-[30px] font-medium leading-snug text-ink">{title}</div>
          <div className="mb-4 text-base leading-relaxed text-bodyMuted">{description}</div>
          <div className="callno text-muted">
            {date} &middot; {readtime}
          </div>
        </div>
      </Link>
    );
  }

  // row
  return (
    <Link
      href={`/blog/${slug}`}
      className="grid grid-cols-[90px_1fr_100px_90px] items-center gap-0 border-b border-dashed border-borderDashed py-5"
    >
      <StripeThumb variant={stripe} label={category} className="h-[60px] w-[74px]" />
      <div>
        <div className="callno mb-1 uppercase tracking-[0.05em] text-maroon">{category}</div>
        <div className="mb-1 font-serif text-lg font-medium text-ink">{title}</div>
        <div className="text-[13.5px] text-muted">{description}</div>
      </div>
      <div className="callno text-body">{date}</div>
      <div className="callno text-muted">{readtime}</div>
    </Link>
  );
}
