// dev - npx serve
// dev - npx tailwindcss -o ./style.css --watch
// production - npx tailwindcss -o ./style.css --minify   

module.exports = {
  content: ["./**/*.{html}"],
  mode: 'jit',
  purge: [
    './**/*.html',
  ],
  theme: {
    "fontFamily": {
      'headline': ['Playfair Display', 'serif'],
      'body': ['Source Sans Pro', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}