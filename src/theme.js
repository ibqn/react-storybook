import { blue, neutral } from './colors'
import { primaryFont, typeScale } from './typography'

const defaultTheme = {
  primaryColor: blue[300],
  primaryHoverColor: blue[200],
  primaryActiveColor: blue[100],

  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],

  disabled: neutral[400],
  textOnDisabled: neutral[300],

  primaryFont,
  typeScale,
}

export default defaultTheme
