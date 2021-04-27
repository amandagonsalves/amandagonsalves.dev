const palette = require('./palette');

module.exports = {
  theme: {
    extend: {
      colors: palette,
      boxShadow: {
        '2xl': '0px 32px 64px rgba(0,0,0,0.50), 0px 16px 32px rgba(0,0,0,0.25)',
      },
      height: {
        lg: '90vh',
        card: '500px'
       } 
    },
    fontFamily: {
      'lora': 'Lora',
      'nunito': 'Nunito',
      'oxygen': 'Oxygen',
      'quando': 'Quando',
      'reggae': 'ReggaeOne',
      'merienda': 'Merienda'
    }
  }
}