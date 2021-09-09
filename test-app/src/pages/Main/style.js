import styled from 'styled-components'
import Button from '../../components/atoms/Button'
import Container from '../../components/atoms/Container'

export const OrderBtn = styled(Button)`
  width: 360px;
  height: 50px;
  margin-top: 40px;
  border-radius: 10px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.brandColor};
`

export const MainContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`
