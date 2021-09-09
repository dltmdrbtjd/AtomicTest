import React from 'react';
import { useDispatch } from 'react-redux';
import { LoginApi } from '../../../libs/api';
import { history } from '../../../redux/configureStore';
import { AuthToken } from '../../../redux/modules/auth';
import { OrderCreators } from '../../../redux/modules/order';
import * as S from './style';

function LoginInput() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = React.useState({
    email: '',
    password: '',
  });

  function UserInputHandler(e){
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }
  const {email, password} = inputs;

  function Login(){
    if(!email) {
      window.alert('이메일을 입력해주세요.')
      return;
    }
    LoginApi({email,password})
    .then((res) => {
      const token = res.data.token;
      dispatch(AuthToken(token))
      dispatch(OrderCreators.fetchOrderLoad())
    })
    .then(() => {
      history.push('/')
    })
    .catch((err) => {
      if(err.response.status === 401) {
        window.alert('비밀번호를 다시 확인해주세요.')
      }
    })
  }

  return (
    <S.InputBox>
      <S.Label>이메일</S.Label>
      <S.LoginInput name='email' type='email' value={email} placeholder='이메일을 입력해주세요.' onChange={UserInputHandler}/>
      <S.Label>비밀번호</S.Label>
      <S.LoginInput name='password' type='password' value={password} placeholder='비밀번호를 입력해주세요.' onChange={UserInputHandler}/>
      <S.LoginBtn onClick={Login}>로그인</S.LoginBtn>
    </S.InputBox>
  )
}

export default LoginInput;