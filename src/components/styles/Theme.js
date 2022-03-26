const theme = {
  logo: {
    img: 'url(./img/logo.png)',
    color: '#9c36b5',
    color_2: '#be4bdb',
  },
  font: {
    fontFamily: 'poppins',
    primaryText: '#495057',
    secondaryText: '#343a40'
  },
  color: {
    backgroundColor: '#f8f9fa',
    switch: '#e9ecef'
  },
  modal: {
    primaryColor: '#f1f3f5',
    secondaryColor: '#dee2e6'
  }
}
const invertTheme = {
  logo: {
    img: 'url(./img/logo_2.png)',
    color: '#f8f9fa',
  },
  font: {
    fontFamily: 'poppins',
    primaryText: '#f8f9fa',
    secondaryText: '#ced4da'
  },
  color: {
    backgroundColor: '#212529',
    switch: 'teal'
  },
  modal: {
    primaryColor: '#343a40',
    secondaryColor: '#495057'
  }
}

export const Theme = { theme, invertTheme }