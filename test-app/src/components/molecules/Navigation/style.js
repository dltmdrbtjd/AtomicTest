import styled from 'styled-components'
import List from '../../atoms/List'
import Ul from '../../atoms/Ul'

export const NavBox = styled(Ul)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavList = styled(List)`
  cursor: pointer;
  margin-left: 15px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${(props) =>
    props.className === 'Click' ? props.theme.color.brandColor : ''};
`
