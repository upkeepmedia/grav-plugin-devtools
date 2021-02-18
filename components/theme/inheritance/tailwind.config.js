module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      fontFamily:{
        heading: ['Raleway', 'sans-serif']
      },
      colors:{
        primary: 'orange',
        secondary: 'gray',
        heading: 'gray',
        accent: 'orange'
      },
      container: {
        padding: '2rem',
      },
    }
  },
  variants: {
    extend: {
      display: ['hover', 'focus', 'group-hover'],
      backgroundColor: ['odd'],
    },
  },
  plugins: [
  
  ],
}
