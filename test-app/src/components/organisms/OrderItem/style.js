import styled from 'styled-components'
import Button from '../../atoms/Button'
import Grid from '../../atoms/Grid'
import List from '../../atoms/List'
import Text from '../../atoms/Text'

export const OrderItem = styled(List)`
  max-width: 540px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};

  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.color.gray};
  }
`
export const OrderItemId = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`
export const OrderItemName = styled(Text)`
  font-weight: ${({ theme }) => theme.fontWeight.light};
`
export const RightBox = styled(Grid)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
`

export const DetailBtn = styled(Button)`
  padding: 5px 10px;
  margin-left: 20px;
  border-radius: 10px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.brandColor};
`
