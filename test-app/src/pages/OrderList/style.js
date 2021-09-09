import styled from 'styled-components'
import Button from '../../components/atoms/Button'
import Ul from '../../components/atoms/Ul'
import Container from '../../components/atoms/Container'

export const OrderTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 50px;
`

export const OrderContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 100px;
  height: 100%;
`

export const OrderSection = styled(Ul)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 100%;
`
export const OrderMoreBtn = styled(Button)`
  width: 300px;
  height: 50px;
  margin-top: 40px;
  border-radius: 50px;
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
`
