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
        satoshi: ['var(--font-satoshi)'],
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

        'creamy-custard': '#C7B19C',
        'chocolate-truffle': '#734F2D',
        'coppertone': '#9F786C',
        'chocolate-milk': '#A37858',
        'goldenrod': '#D7A218',
        'whipped-cream': '#F9D5B1',
        'milkshake': '#FCF5EB',

        'desert-rose': '#C7A99C',
        'mango': '#CE9C1D',

        'coffe-latte': '#3F3627',
      },
      colors: {
        'whipped-cream': '#F9D5B1',
        'charcoal': '#212121',
        'coffe': '#A38758',
        'coffe-latte': '#3F3627',
      },
      borderRadius: {
        'small': '10px',
        'large': '20px',
      },
      borderColor: {
        'coffe-latte': '#3F3627',
      },
      fill: {
        'coffe-latte': '#3F3627',
      }
    },
  },
  plugins: [],
}
