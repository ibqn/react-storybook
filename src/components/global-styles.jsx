import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

const styled = { createGlobalStyle }

const GlobalStyles = styled.createGlobalStyle`
  ${normalize()}

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: ${(props) => props.theme.primaryFont};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default GlobalStyles
