const FONT_SERIF = "var(--font-lora), Georgia, serif";
const FONT_SANS = "var(--font-work-sans), Helvetica, sans-serif";
const FONT_MONO = "var(--font-courier-prime), ui-monospace, monospace";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: 'oklch(0.96 0.014 80)',
        headerBg: 'oklch(0.96 0.014 80 / 0.95)',
        surface: 'oklch(0.99 0.008 80)',
        band: 'oklch(0.94 0.018 75)',
        ink: 'oklch(0.2 0.02 60)',
        tabInk: 'oklch(0.3 0.02 60)',
        body: 'oklch(0.32 0.02 60)',
        bodyMuted: 'oklch(0.4 0.02 60)',
        muted: 'oklch(0.5 0.02 60)',
        maroon: 'oklch(0.4 0.12 25)',
        maroonHover: 'oklch(0.32 0.13 25)',
        green: 'oklch(0.4 0.1 150)',
        borderc: 'oklch(0.85 0.02 70)',
        borderStrong: 'oklch(0.2 0.02 60)',
        borderDashed: 'oklch(0.8 0.02 70)',
        cream: 'oklch(0.98 0.01 80)',
      },
      fontFamily: {
        serif: FONT_SERIF.split(', '),
        sans: FONT_SANS.split(', '),
        mono: FONT_MONO.split(', '),
      },
      borderRadius: {
        DEFAULT: '2px',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.ink'),
            '--tw-prose-headings': theme('colors.ink'),
            '--tw-prose-links': theme('colors.maroon'),
            '--tw-prose-bold': theme('colors.ink'),
            '--tw-prose-quotes': theme('colors.bodyMuted'),
            '--tw-prose-quote-borders': theme('colors.borderc'),
            '--tw-prose-code': theme('colors.ink'),
            fontFamily: FONT_SANS,
            fontSize: '18px',
            lineHeight: '1.8',
            h1: { fontFamily: FONT_SERIF, fontWeight: '500' },
            h2: { fontFamily: FONT_SERIF, fontWeight: '500', fontSize: '23px' },
            h3: { fontFamily: FONT_SERIF, fontWeight: '500' },
            a: { textDecoration: 'none', fontWeight: '400' },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addComponents, theme }) {
      addComponents({
        '.punch': {
          width: '11px',
          height: '11px',
          borderRadius: '50%',
          background: theme('colors.paper'),
          border: `1px solid ${theme('colors.borderc')}`,
          boxShadow: 'inset 0 1px 2px rgb(0 0 0 / 0.15)',
        },
        '.callno': {
          fontFamily: FONT_MONO,
          fontSize: '11px',
          letterSpacing: '0.03em',
        },
      });
    },
  ],
};
