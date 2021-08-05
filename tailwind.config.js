const palette = require('./palette');

module.exports = {
  theme: {
    extend: {
      colors: palette,
      boxShadow: {
        '2xl': '0px 32px 64px rgba(0,0,0,0.50), 0px 16px 32px rgba(0,0,0,0.25)',
        '1xl': '6px 1px 16px #e5e7eb'
      },
      height: {
        lg: '90vh',
        card: '500px'
       } 
    },
    fontFamily: {
      'oxygen': 'Oxygen',
      'merienda': 'Merienda'
    }
  }
}