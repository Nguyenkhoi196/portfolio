/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin'
// import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    fontFamily: {
      ubuntu: ['Ubuntu', 'sans-serif'],
      'fira-sans': ['Fira Sans', 'sans-serif'],
      'space-mono': ['Space Mono', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#537479',
        secondary: '#2fcbef',
        tertiary: '#e6db74',
        dark: '#292929',
        danger: '#dc3545',
        warning: '#ffc107'
      }
    }
  },
  plugins: [flowbite]
}
