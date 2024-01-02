/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        soligant: ['var(--font-soligant)'],
        humane: ['var(--font-humane)'],
        abril_fatface: ['var(--font-abril_fatface)'],
      },
      backgroundColor: {
        'charcoal': '#212121',
        'coffe': '#A38758',
        'sand': '#DBD7CC',
        'taupe-blue': '#778F95',
        'ocean-mist': '#B8CBD0',
        'sky-blue': '#5D95A3',
        'corn-yellow': '#FEAD37',
        'slate-grey': '#414042',
        'camel': '#C7BE9C',
        'cream': '#F5EFE9',
        'seashell-whisper': '#E8DDC1',
        'coffee-bean': '#80744B',
        'dark-coffee': '#816940',
        'pearl': '#D9D9D9',
      },
      colors: {
        'charcoal': '#212121',
      },
      borderRadius: {
        'small': '10px',
        'large': '20px',
      }
    },
  },
  plugins: [],
}
