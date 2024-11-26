tailwind.config = {
  theme: {
    extend: {
      gridTemplateColumns: {
        autos: 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      colors: {
        lightHover: '#fcf4ff',
        darkhover: '#2a004a',
        darkTheme: '#11001f',
      },
      boxShadow: {
        'black': '4px 4px 0 #000',
        'white': '4px 4px 0 #fff'
      },
    },
  },
  darkMode:'selector'
};



