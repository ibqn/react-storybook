import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'

import theme from './theme'

import { GlobalStyles } from './components'
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from './components/button'

import '@fontsource/roboto-mono'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 64px;

  & > button {
    margin: 5px;
  }
`

const Title = styled.h1``

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />

    <Main>
      <Title>App</Title>
      <PrimaryButton>primary</PrimaryButton>
      <SecondaryButton>secondary</SecondaryButton>
      <TertiaryButton>tertiary</TertiaryButton>
    </Main>
  </ThemeProvider>
)

export default App
