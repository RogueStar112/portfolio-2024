import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {

    extend: {
         height: {
            'inherit': 'inherit',
          },


         maxHeight: {
        'inherit': 'inherit',
         },

        fontVariant: {
          'small-caps': 'small-caps'
        },

          fontFamily: {
          opendyslexic: ['var(--font-opendyslexic)'],
          },

          colors: {
      'sky-blue': '#93b7be',
      'mint-cream': '#f1fffa',
      'sand-brown': '#d5c7bc',
      'rose-taupe': '#785964',
      'onyx': '#454545',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        'logo': '0.2rem',
      }
    },
  },
  plugins: [],
}
export default config
