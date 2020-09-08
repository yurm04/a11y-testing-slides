import { github } from '@code-surfer/themes'

const colorWhite = '#fff'
const vibePurple = '#6D5ADF'

export default {
  ...github,
  googleFont: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap',
  colors: {
    background: "#221D40",
    text: colorWhite,
  },
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Montserrat, sans-serif'
  },
  styles: {
    h1: {
      fontFamily: 'Montserrat, sans-serif',
      textShadow: '0px 4px 4px #000000',
    },
    p: {
      color: colorWhite
    },
    li: {
      color: colorWhite
    },
    a: {
      color: vibePurple,
    }
  }
}
