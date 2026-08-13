const STRIPES = {
  a: 'repeating-linear-gradient(45deg, oklch(0.9 0.02 25) 0px, oklch(0.9 0.02 25) 10px, oklch(0.87 0.02 25) 10px, oklch(0.87 0.02 25) 20px)',
  b: 'repeating-linear-gradient(45deg, oklch(0.9 0.018 150) 0px, oklch(0.9 0.018 150) 10px, oklch(0.87 0.018 150) 10px, oklch(0.87 0.018 150) 20px)',
  c: 'repeating-linear-gradient(45deg, oklch(0.9 0.015 90) 0px, oklch(0.9 0.015 90) 10px, oklch(0.87 0.015 90) 10px, oklch(0.87 0.015 90) 20px)',
};

export default function StripeThumb({ variant = 'a', label, className = '' }) {
  return (
    <div
      className={`flex items-center justify-center text-center font-mono text-[11px] uppercase tracking-[0.03em] text-ink/55 ${className}`}
      style={{ background: STRIPES[variant] || STRIPES.a }}
    >
      {label}
    </div>
  );
}
