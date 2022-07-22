/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '830px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    borderRadius: {
      15: '15px',
      100: '100px',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      full: '9999px',
      large: '12px',
    },
    fontSize: {
      13: '0.813rem',
      15: '0.938rem',
      16: '1rem',
      20: '1.25rem',
      23: '1.438rem',
      24: '1.5rem',
      34: '2.125rem',
      48: '3.5rem',
    },
    colors: {
      'tw-black': colors.black,
      'tw-white': colors.white,
      'tw-gray': colors.slate,
      'tw-green': colors.emerald,
      'tw-purple': colors.purple,
      'tw-yellow': colors.amber,
      'tw-pink': colors.fuchsia,
      blue: {
        default: '#3838F4',
        light: '#7474F7',
      },
      purple: '#7474F7',
      yellow: {
        default: '#E6FF67',
        light: '#F8FED8',
      },
      gray: {
        dark: '#4B4B4B',
        text: '#818181',
        medium: '#9F9F9F',
        light: '#F1F1F1',
      },
      black: '#000000',
      white: '#FFFFFF',
    },
    extend: {},
  },
  plugins: [],
}
