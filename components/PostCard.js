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
        className="relative flex flex-col gap-4 border border-borderc bg-surface p-5 sm:p-[22px]"
      >
        <span className="callno absolute right-3.5 top-3">FEATURED</span>
        <StripeThumb variant={stripe} label={category} className="h-[180px] sm:h-[230px]" />
        <div className="callno uppercase tracking-[0.05em] text-green">{category}</div>
        <div className="font-serif text-xl font-medium leading-snug text-ink sm:text-2xl">{title}</div>
        <div className="text-sm leading-relaxed text-bodyMuted sm:text-[15px]">{description}</div>
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
        className="relative grid grid-cols-1 items-center gap-6 border border-borderc bg-surface p-5 sm:grid-cols-2 sm:gap-10 sm:p-7 lg:gap-14 lg:p-9"
      >
        <span className="callno absolute right-4 top-3 sm:right-5 sm:top-4">FEATURED ENTRY</span>
        <StripeThumb variant={stripe} label={category} className="h-[220px] sm:h-[300px]" />
        <div>
          <div className="callno mb-2.5 uppercase tracking-[0.05em] text-green">{category}</div>
          <div className="mb-3.5 font-serif text-2xl font-medium leading-snug text-ink sm:text-[26px] lg:text-[30px]">
            {title}
          </div>
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
      className="grid grid-cols-[70px_1fr] items-center gap-x-4 gap-y-0 border-b border-dashed border-borderDashed py-4 sm:grid-cols-[90px_1fr_100px_90px] sm:gap-x-0 sm:py-5"
    >
      <StripeThumb variant={stripe} label={category} className="h-[54px] w-[64px] sm:h-[60px] sm:w-[74px]" />
      <div>
        <div className="callno mb-1 uppercase tracking-[0.05em] text-maroon">{category}</div>
        <div className="mb-1 font-serif text-base font-medium text-ink sm:text-lg">{title}</div>
        <div className="text-[13.5px] text-muted">{description}</div>
        <div className="callno mt-1.5 text-muted sm:hidden">
          {date} &middot; {readtime}
        </div>
      </div>
      <div className="callno hidden text-body sm:block">{date}</div>
      <div className="callno hidden text-muted sm:block">{readtime}</div>
    </Link>
  );
}
