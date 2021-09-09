import styled from 'styled-components'
import Container from '../../../components/atoms/Container'
import Button from '../../../components/atoms/Button'

export const OrderDetailContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
`

export const OrderMoreBtn = styled(Button)`
  width: 300px;
  height: 50px;
  margin-top: 40px;
  border-radius: 50px;
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
`
