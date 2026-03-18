/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        mist: '#f8f6f1',
        ink: '#111827',
        drift: '#7c8aa5',
        line: '#d9dfeb',
        accent: '#e95f2f',
        haze: '#edf2fb'
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'sans-serif'],
        display: ['var(--font-cormorant)', 'serif']
      },
      letterSpacing: {
        hero: '0.32em'
      },
      boxShadow: {
        panel: '0 30px 80px rgba(17, 24, 39, 0.08)'
      }
    }
  },
  plugins: []
};
