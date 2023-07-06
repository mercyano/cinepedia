/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '900px',
        lg: '1120px',
        xl: '1440px',
      },
      colors: {
        dark: '#221F1F',
        darkBlue: '#073A57',
      },
      fontFamily: {
        monserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
