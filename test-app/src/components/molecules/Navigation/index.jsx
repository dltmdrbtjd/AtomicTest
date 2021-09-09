import React from 'react';
import * as S from './style';
import { useLocation } from 'react-router';
import { history } from '../../../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import { AuthToken } from '../../../redux/modules/auth';

function Navigation(){
  const dispatch = useDispatch();
  const path = useLocation().pathname;
  const token = useSelector((state) => state.auth.token);

  return (
    <S.NavBox>
      <S.NavList onClick={() => {
        history.push('/')
        }} className={path === '/' ? 'Click':''}>서비스</S.NavList>
      <S.NavList onClick={() => {
        if(token){
          history.push('/mypage/order')
        } else {
          history.push('/sign-up')
        }
        }} className={path.includes('/sign-up') || path.includes('/mypage/order') ? 'Click':''}>{token?'마이페이지':'회원가입'}</S.NavList>
      <S.NavList onClick={() => {
        if(token){
          dispatch(AuthToken(''))
          history.push('/login')
        } else {
          history.push('/login')
        }
        }} className={path.includes('/login')? 'Click':''}>{token? '로그아웃':'로그인'}</S.NavList>
    </S.NavBox>
  )
}

export default Navigation;