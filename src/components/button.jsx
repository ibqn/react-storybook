import styled from 'styled-components'

const Button = styled.button`
  padding: 8px 12px;
  font-size: 1rem;
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: 'Roboto Mono', monospace;
`

const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  color: white;
  border: 2px solid transparent;
`

export { Button, PrimaryButton }
