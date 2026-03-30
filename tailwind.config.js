/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1F2937',
          dark: '#111827',
          deeper: '#0D1117',
        },
        ember: {
          DEFAULT: '#F97316',
          dark: '#EA6C0A',
          light: '#FED7AA',
        },
        sage: {
          DEFAULT: '#6B8F6B',
          light: '#D1FAE5',
        },
        warm: {
          50: '#FAF8F5',
          100: '#F5F0E8',
          200: '#EDE4D6',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
