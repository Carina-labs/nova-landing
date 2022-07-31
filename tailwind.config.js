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
      lg: '1080px',
      xl: '1440px',
      '2xl': '1920px',
      '3xl': '2560px',
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
    borderRadius: {
      15: '15px',
      100: '100px',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      '2xl': '0.8rem',
      full: '9999px',
      large: '12px',
    },
    fontSize: {
      8: '0.6rem',
      9: '0.65rem',
      10: '0.7rem',
      11: '0.75rem',
      12: '0.8rem',
      13: '0.85rem',
      14: '0.9rem',
      15: '0.95rem',
      16: '1rem',
      17: '1.05rem',
      18: '1.1rem',
      19: '1.15rem',
      20: '1.2rem',
      21: '1.25rem',
      22: '1.3rem',
      23: '1.35rem',
      24: '1.5rem',
      25: '1.55rem',
      26: '1.6rem',
      27: '1.7rem',
      28: '1.85rem',
      29: '1.9rem',
      30: '2rem',
      31: '2.05rem',
      32: '2.1rem',
      33: '2.15rem',
      34: '2.2rem',
      35: '2.35',
      36: '2.5rem',
      40: '3rem',
      48: '3.5rem',
      62: '3.8rem',
      64: '4rem',
      66: '4.2rem',
      68: '4.4rem',
      70: '4.6rem',
      72: '4.8rem',
      90: '5rem',
      96: '6rem',
      102: '7rem',
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
    keyframes: {
      fadeInLtoR: {
        '0%': { opacity: '0', transform: 'translateX(-70px)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
      },
      fadeInRtoL: {
        '0%': { opacity: '0', transform: 'translateX(70px)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
      },
      fadeInDtoU: {
        '0%': { opacity: '0', transform: 'translateY(80px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
    animation: {
      fadeInLtoR: 'fadeInLtoR 1.2s ease-out',
      fadeInRtoL: 'fadeInRtoL 1.2s ease-out',
      fadeInDtoU: 'fadeInDtoU 1.6s ease-out',
    },
    extend: {
      spacing: {
        16: '4rem',
        18: '4.5rem',
        20: '5rem',
        22: '5.5rem',
        24: '6rem',
        26: '6.5rem',
        28: '7rem',
        30: '7.5rem',
        32: '8rem',
        34: '8.5rem',
        36: '9rem',
        38: '9.5rem',
        40: '10rem',
        42: '10.5rem',
        44: '11rem',
        46: '11.5rem',
        48: '12rem',
        80: '20rem',
        96: '24rem',
        120: '30rem',
        160: '40rem',
      },
      lineHeight: {
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        18: '4.5rem',
        20: '5rem',
        22: '5.5rem',
        24: '6rem',
        26: '6.5rem',
        28: '7rem',
        30: '7.5rem',
        32: '8rem',
      },
    },
  },
  plugins: [],
}
