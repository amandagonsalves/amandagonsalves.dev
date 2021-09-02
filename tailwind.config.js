const palette = require('./palette');

module.exports = {
  theme: {
    extend: {
      flex: {
        '25': '25%'
      },
      colors: palette,
      boxShadow: {
        '2xl': '0px 32px 64px rgba(0,0,0,0.50), 0px 16px 32px rgba(0,0,0,0.25)',
        '1xl': '6px 1px 16px #e5e7eb'
      },
      height: {
        lg: '90vh',
        card: '500px',
        '104': '45rem',
        'full-h': '100vh',
      },
      inset: {
        'medium': '50%',
        '1/6': '5%',
        '1/5': '10%'
      },
      width: {
        '40': '40rem',
        '30': '30rem'
      },
      maxWidth: {
        '25': '25rem',
        '25p': '25%'
      },
      gridTemplateColumns: {
       'seamless': 'repeat(auto-fit, minmax(200px, 1fr))',
      }
    },
    fontFamily: {
      'oxygen': 'Oxygen',
      'merienda': 'Merienda',
      'poppins': 'Poppins'
    },
  }
}