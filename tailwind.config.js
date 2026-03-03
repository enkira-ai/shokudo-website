/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1a1612',
        'warm-ink': '#231e18',
        'ink-hover': '#2d2620',
        amber: '#c8860a',
        gold: '#e8a020',
        terracotta: '#b85c38',
        hanko: '#cc2200',
        cream: '#f0e6d0',
        'warm-muted': '#9a8c7a',
        // Legacy
        sumi: '#1C1C1E',
        akane: '#C0392B',
        kome: '#F5ECD7',
        washi: '#FAF6EF',
        bamboo: '#5C8A4A',
        ash: '#6B6B6B',
        sand: '#E0D5C5',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        mincho: ['Shippori Mincho', 'serif'],
        sans: ['Noto Sans JP', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}
