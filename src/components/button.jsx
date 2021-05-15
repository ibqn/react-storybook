import styled from 'styled-components'

const Button = styled.button`
  padding: 8px 12px;
  font-size: ${(props) => props.theme.typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${(props) => props.theme.primaryFont};

  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }
`

const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColorOnPrimary};
  border: 2px solid transparent;
`

const SecondaryButton = styled(Button)`
  border: 2px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryColor};
`

const TertiaryButton = styled(Button)`
  border: 2px solid transparent;
  color: ${(props) => props.theme.primaryColor};
`

export { Button, PrimaryButton, SecondaryButton, TertiaryButton }
