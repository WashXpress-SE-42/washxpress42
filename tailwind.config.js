/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',
        'background-light': '#f0f9ff',
        'background-dark': '#0f172a',
        'surface-dark': '#1e293b',
        'border-dark': '#334155',
        'text-secondary': '#94a3b8',
      },
      fontFamily: {
        display: ['var(--font-manrope)', 'Manrope', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '1rem',
        lg: '2rem',
        xl: '3rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
};
