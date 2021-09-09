import styled from 'styled-components'
import Button from '../../components/atoms/Button'
import Grid from '../../components/atoms/Grid'

export const RegisterTitle = styled.h2`
  margin-bottom: 50px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`

export const RegisterBox = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  flex-direction: column;
  padding: 20px;
`
