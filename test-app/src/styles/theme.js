const calRem = (size) => `${size / 16}rem`

const fontSize = {
  sm: calRem(14),
  md: calRem(16),
  lg: calRem(18),
  xl: calRem(24),
}

const fontWeight = {
  light: 300,
  regular: 400,
  semibold: 600,
  bold: 700,
  extraBold: 800,
}

const color = {
  brandColor: '#FF9900',
  black: '#2C2C2C',
  white: '#FDFDFD',
  danger: '#FF0005',
  safe: '#00C314',
  gray: '#C4C4C4',
}

const theme = {
  fontSize,
  fontWeight,
  color,
}

export default theme
