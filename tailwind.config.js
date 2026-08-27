/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fc',
          400: '#36aff7',
          500: '#0c94e8',
          600: '#0075c7',
          700: '#025ea2',
          800: '#065086',
          900: '#0b436f',
          950: '#072b4a',
        },
        android: {
          light: '#3ddc84',
          dark: '#073042'
        },
        flutter: {
          light: '#02569b',
          cyan: '#01b5f8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
