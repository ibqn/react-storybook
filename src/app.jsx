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

const Section = styled.section`
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

    <Section>
      <Title>App</Title>
      <PrimaryButton>primary</PrimaryButton>
      <SecondaryButton>secondary</SecondaryButton>
      <TertiaryButton>tertiary</TertiaryButton>
    </Section>

    <Section>
      <Title>Disabled</Title>
      <PrimaryButton disabled>Hello world</PrimaryButton>
      <SecondaryButton disabled>Goodbye world</SecondaryButton>
      <TertiaryButton disabled>Hey world</TertiaryButton>
    </Section>
  </ThemeProvider>
)

export default App
