import React from 'react';
import { useSelector } from 'react-redux';
import MainItem from '../../components/organisms/MainItem';
import { history } from '../../redux/configureStore';
import * as S from './style'

function MainPage() {
  const token = useSelector(state => state.auth.token);

  function Order() {
    if(!token) {
      window.alert('로그인을 먼저 해주세요 !')
      history.push('/sign-up');
    } else {
      window.alert('주문에 성공했습니다 !')
    }
  }
  return (
    <S.MainContainer>
      <MainItem />
      <S.OrderBtn onClick={Order}>주문하기</S.OrderBtn>
    </S.MainContainer>
  )
}

export default MainPage