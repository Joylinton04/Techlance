/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#29ABFF1A",
        active: "#29ABFF",
        primtext: "#000000CC",
        text: '#00000099',
        cardBg: "#f6fbff",
      },
      screens: {
        '2xxl': {'max': '1535px'},
        'xxl': {'max': '1279px'},
        'lgg': {'max': '1024px'},
        'mdd': {'max': '800px'},
        'ssm': {'max': '639px'},
      }
    },
  },
  plugins: [],
}