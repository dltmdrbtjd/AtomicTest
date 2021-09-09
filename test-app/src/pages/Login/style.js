import styled from 'styled-components'
import Button from '../../components/atoms/Button'
import Grid from '../../components/atoms/Grid'

export const LoginTitle = styled.h2`
  margin-bottom: 50px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`

export const LoginBtn = styled(Button)`
  width: 270px;
  height: 40px;
  margin-top: 40px;
  border-radius: 10px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.brandColor};
`

export const LoginBox = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  flex-direction: column;
  padding: 20px;
`
