import StripeThumb from './StripeThumb';

const accentClass = { maroon: 'text-maroon', green: 'text-green' };

export default function WorkCard({ variant = 'compact', num, title, tag, blurb, accent, stripe, stats = [] }) {
  const accentCls = accentClass[accent] || 'text-maroon';

  if (variant === 'full') {
    return (
      <div className="relative flex flex-col rounded border border-borderc border-t-[3px] border-t-borderDashed bg-surface shadow-[0_1px_4px_rgb(0_0_0/0.05)]">
        <div className="punch absolute left-3.5 top-3.5 z-[1]" />
        <StripeThumb variant={stripe} label={tag} className="m-5 mb-0 h-[190px]" />
        <div className="p-[22px]">
          <div className="flex items-baseline justify-between">
            <div className={`callno mb-2 uppercase tracking-[0.06em] ${accentCls}`}>{tag}</div>
            <div className="callno text-[10.5px] text-muted">NO. {num}</div>
          </div>
          <div className="mb-2 font-serif text-xl font-medium text-ink">{title}</div>
          <div className="mb-3.5 text-[14.5px] leading-relaxed text-bodyMuted">{blurb}</div>
          <div className="flex flex-wrap gap-2">
            {stats.map((stat) => (
              <span key={stat} className="callno rounded border border-borderDashed px-2.5 py-1 text-body">
                {stat}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded border border-borderc border-t-[3px] border-t-borderDashed bg-surface p-5 shadow-[0_1px_4px_rgb(0_0_0/0.05)]">
      <div className="punch absolute left-2.5 top-2.5" />
      <StripeThumb variant={stripe} label={tag} className="min-h-[180px]" />
      <div className="mt-3.5">
        <div className={`callno mb-1.5 uppercase tracking-[0.06em] ${accentCls}`}>{tag}</div>
        <div className="mb-1.5 font-serif text-lg font-medium text-ink">{title}</div>
        <div className="text-sm leading-relaxed text-bodyMuted">{blurb}</div>
      </div>
    </div>
  );
}
