module.exports = {
  purge: [
    './dist/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        'sm':'640px',
        'lg':'1024px',
        'md':'768px',
        'xl':'1200px',
      },
      colors:{
        '#888': '#888',
        '#2367EC':'#2367EC',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
