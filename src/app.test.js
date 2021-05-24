import { render, screen } from '@testing-library/react'
import App from './app'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/App/i)
  expect(linkElement).toBeInTheDocument()
})
