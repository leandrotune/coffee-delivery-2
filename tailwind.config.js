/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      xp: 10,
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 48,
      '4xl': 32,
    },

    colors: {
      while: '#FFFFFF',
      backgroung: '#FAFAFA',

      purple: {
        100: '#EBE5F9',
        500: '#8047F8',
        900: '#4B2995',
      },

      yellow: {
        100: '#F1E9C9',
        500: '#DBAC2C',
        900: '#C47F17',
      },

      gray: {
        100: '#F3F2F2',
        200: '#EDEDED',
        300: '#E6E5E5',
        400: '#D7D5D5',
        600: '#8D8686',
        700: '#574F4D',
        800: '#403937',
        900: '#272221',
      },
    },
  },
  extend: {
    fontFamily: {
      sans: ['var(--font-roboto)'],
      mono: ['var(--font-ballo2)'],
    },
  },
}
