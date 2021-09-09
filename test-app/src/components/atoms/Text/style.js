import styled from 'styled-components'

export const Text = styled.p`
  font-size: ${(props) => props.theme.fontSize[props.fs]};
  font-weight: ${(props) => props.theme.fontWeight[props.fw]};
`
