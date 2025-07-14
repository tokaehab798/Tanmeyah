module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Main-image': "url('assets/images/mainBackground.svg')",
        'black-gradient': 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))',


      },
      fontFamily: {
        font1: ['font1', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },


      colors: {
        primary: '#EC2227',
        yellow: '#EBBC24',
        grey: '#F6F6F6',
        darkgrey:'#666666',
      }
    },
  },

}
