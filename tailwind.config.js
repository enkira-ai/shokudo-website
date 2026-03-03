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
        sumi: '#1C1C1E',
        akane: '#C0392B',
        kome: '#F5ECD7',
        washi: '#FAF6EF',
        bamboo: '#5C8A4A',
        ash: '#6B6B6B',
        sand: '#E0D5C5',
      },
      fontFamily: {
        mincho: ['Shippori Mincho', 'serif'],
        sans: ['Noto Sans JP', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}
