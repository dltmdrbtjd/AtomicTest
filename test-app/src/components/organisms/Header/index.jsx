import React from 'react';
import { history } from '../../../redux/configureStore';
import Logo from '../../molecules/Logo';
import Navigation from '../../molecules/Navigation';
import * as S from './style.js'

function Header() {
  return (
    <S.Header>
      <S.InnerBox>
        <Logo onClick={() => history.push('/')}/>
        <Navigation />
      </S.InnerBox>
    </S.Header>
  )
}

export default Header;