import React from 'react';
import RegisterInput from '../../components/molecules/RegisterInput';
import * as S from './style';

function RegisterPage() {
  return (
    <S.RegisterBox>
      <S.RegisterTitle>회원가입</S.RegisterTitle>
      <RegisterInput />
    </S.RegisterBox>
  )
}

export default RegisterPage;