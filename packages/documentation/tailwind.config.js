/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './docs/**/*.md',
    './docs/.vitepress/**/*.{js,ts,vue}',
    // Inclure les composants de la librairie pour capter leurs classes
    '../lib/src/**/*.{vue,js}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
