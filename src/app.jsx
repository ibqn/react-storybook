import { useState } from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'

import { defaultTheme, darkTheme } from './theme'

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

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false)
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <GlobalStyles />

      <button
        style={{
          margin: '0 16px 24px',
          padding: '8px',
          background: 'none',
          cursor: 'pointer',
          border: '2px solid #000',
          marginTop: '60px',
        }}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark theme
      </button>
      <button
        style={{
          margin: '0 16px 24px',
          padding: '8px',
          background: 'none',
          cursor: 'pointer',
          border: '2px solid #000',
          marginTop: '60px',
        }}
        onClick={() => setUseDarkTheme(false)}
      >
        Default theme
      </button>

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

      <Section>
        <Title>Modifiers</Title>
        {/* <PrimaryButton>Hello World</PrimaryButton> */}
        <PrimaryButton modifiers={['small']}>Hello World</PrimaryButton>
        <SecondaryButton modifiers="large">Goodbye World</SecondaryButton>
      </Section>

      <Section>
        <Title>Statuses</Title>
        <PrimaryButton modifiers={['success']}>Success</PrimaryButton>
        <SecondaryButton modifiers={['warning', 'secondaryButtonWarning']}>
          Warning
        </SecondaryButton>
        <TertiaryButton modifiers={['error', 'secondaryButtonError']}>
          Error
        </TertiaryButton>
      </Section>
    </ThemeProvider>
  )
}

export default App
