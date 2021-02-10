import { createGlobalStyle } from 'styled-components'
import COLORS from './colors'
import FONTS from './fonts'

const GlobalStyles = createGlobalStyle`
  :root {
    --color-black: ${COLORS.black};
    --color-blue: ${COLORS.blue};
    --color-gray: ${COLORS.gray};
    --color-gray-darker: ${COLORS.gray2};
    --color-primary: ${COLORS.primary};
    --color-primary-2: ${COLORS.primary2};
    --color-primary-3: ${COLORS.primary3};
    --color-text: ${COLORS.text};
    --color-text-head: ${COLORS.textHead};
    --color-text-parag: ${COLORS.textParag};
    --color-white: ${COLORS.white};
  }

  ::selection {
    background-color: var(----color-blue);
    color: var(---color-blue);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: ${FONTS.primary}, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--color-white);
    color: var(---color-text);
  }
`

export default GlobalStyles