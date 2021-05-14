import { ThemeProvider } from 'styled-components'

import theme from './theme'

import { GlobalStyles } from './components'
import { PrimaryButton } from './components/button'

import '@fontsource/roboto-mono'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div>App</div>
    <PrimaryButton>primary</PrimaryButton>
  </ThemeProvider>
)

export default App
