import styled from 'styled-components'
import GridComponent from '../../atoms/Grid'
import ContainerComponent from '../../atoms/Container'

export const Header = styled(GridComponent)`
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 4px 0 4px rgba(0, 0, 0, 0.2);
  padding: 20px 0;
`

export const InnerBox = styled(ContainerComponent)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
