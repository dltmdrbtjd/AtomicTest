import styled from 'styled-components'
import Grid from '../../atoms/Grid'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'

export const RegisterInput = styled(Input)`
  width: 260px;
  height: 35px;

  &.danger {
    border-color: ${({ theme }) => theme.color.danger};
  }
`

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`

export const InputBox = styled(Grid)`
  display: flex;
  flex-direction: column;
  label {
    &:nth-child(3),
    &:nth-child(5),
    &:nth-child(7) {
      margin-top: 30px;
    }
  }
`
export const RegisterBtn = styled(Button)`
  width: 270px;
  height: 40px;
  margin-top: 40px;
  border-radius: 10px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.brandColor};
`
