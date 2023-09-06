/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Lora: ['Lora', 'sans-serif'],
        Raleway: ['Raleway', 'sans-serif'],
        Ruwudu: ['Ruwudu', 'sans-serif'],
        Yesteryear: ['Yesteryear', 'sans-serif'],
        Kalam: ['Kalam', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
