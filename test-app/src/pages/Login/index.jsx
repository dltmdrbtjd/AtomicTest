import React from 'react';
import LoginInput from '../../components/molecules/LoginInput';
import * as S from './style';

function LoginPage() {
  return (
    <S.LoginBox>
      <S.LoginTitle>로그인</S.LoginTitle>
      <LoginInput />
    </S.LoginBox>
  )
}

export default LoginPage;