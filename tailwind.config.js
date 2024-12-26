/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        general: ['general', 'sans-serif'],
        'Beanco-Font': ['Beanco-Font', 'sans-serif'],
        'EudoxusSans-Bold': ['EudoxusSans-Bold', 'sans-serif'],
        'EudoxusSans-ExtraBold': ['EudoxusSans-ExtraBold', 'sans-serif'],
        'EudoxusSans-ExtraLight': ['EudoxusSans-ExtraLight', 'sans-serif'],
        'EudoxusSans-Light': ['EudoxusSans-Light', 'sans-serif'],
        'EudoxusSans-Medium': ['EudoxusSans-Medium', 'sans-serif'],
        'EudoxusSans-Regular': ['EudoxusSans-Regular', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

