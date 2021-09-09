import React from 'react';
import * as S from './style';

import { useDispatch } from 'react-redux';
import { EmailRegExp } from '../../../libs/validation';
import { RegisterApi } from '../../../libs/api';
import { AuthToken } from '../../../redux/modules/auth';
import { history } from '../../../redux/configureStore';

function RegisterInput() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = React.useState({
    email: '',
    password: '',
    passwordCheck: '',
    phoneNum: '',
  });

  const [mailCheck,setMailCheck] = React.useState(false);
  const [pwCheck, setPwCheck] = React.useState(false);

  const EmailRef = React.useRef();
  const PwRef = React.useRef();

  const { email, password, phoneNum, passwordCheck } = inputs;

  function UserInputHandler(e){
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })

    if(name === 'password' && value.length < 8){
      setPwCheck(true);
    } else if (password.length >= 7) {
      setPwCheck(false);
    }
  }

  function FocusHandler() {
    if(!EmailRegExp.test(email)){
      setMailCheck(true);
    } else {
      setMailCheck(false);
    }
  }

  const RegisterData = {
    email,
    password,
    mobile: phoneNum,
  }

  function Register(){
    if(!EmailRegExp.test(email)) {
      window.alert('이메일 형식을 다시 확인해주세요!')
      EmailRef.current.focus()
      return;
    } else if(password.length < 8) {
      window.alert('비밀번호를 8~15자 사이로 다시 입력해주세요!')
      return
    } else if(password !== passwordCheck) {
      window.alert('비밀번호가 일치하지 않습니다!')
      return
    } else if(!phoneNum){
      window.alert('휴대폰 번호를 다시 입력해주세요!')
      return
    } else {
      RegisterApi(RegisterData)
      .then((res) => {
        const token = res.data.token;
        dispatch(AuthToken(token))
      })
      .then(() => {
        history.push('/')
      })
      .catch(err => console.error(err))
    }
  }

  React.useEffect(() => {
    if(EmailRef.current) {
      EmailRef.current.focus()
    }
  },[])

  return (
    <S.InputBox>
      <S.Label>이메일</S.Label>
      <S.RegisterInput className={mailCheck ? 'danger':''} name="email" type='email' placeholder='아이디를 입력해주세요.' value={email} onChange={UserInputHandler} inputRef={EmailRef}/>
      <S.Label>비밀번호</S.Label>
      <S.RegisterInput className={pwCheck ? 'danger':''}name="password" type='password' placeholder='비밀번호를 입력해주세요.' value={password} onFocus={FocusHandler} onChange={UserInputHandler} inputRef={PwRef}/>
      <S.Label>비밀번호 확인</S.Label>
      <S.RegisterInput name="passwordCheck" type='password' placeholder='비밀번호를 입력해주세요.' value={passwordCheck} onFocus={FocusHandler} onChange={UserInputHandler}/>
      <S.Label>연락처</S.Label>
      <S.RegisterInput name="phoneNum" type='number' placeholder='비밀번호를 입력해주세요.' value={phoneNum} onFocus={FocusHandler} onChange={UserInputHandler}/>
      <S.RegisterBtn onClick={Register}>회원가입</S.RegisterBtn>
    </S.InputBox>
  )
}

export default RegisterInput;