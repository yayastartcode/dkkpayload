/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/swiper/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        zinc: {
          900: '#18181B'
        },
        yellow: {
          300: '#FCD34D',
          400: '#FBBF24',
          DEFAULT: '#FBBF24'
        }
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

