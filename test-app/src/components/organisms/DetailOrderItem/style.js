import styled from 'styled-components'
import Grid from '../../atoms/Grid'
import Text from '../../atoms/Text'

export const DetailItem = styled(Grid)`
  max-width: 540px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.color.gray};
`

export const DetailItemId = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`
export const DetailItemName = styled(Text)`
  font-weight: ${({ theme }) => theme.fontWeight.light};
`
