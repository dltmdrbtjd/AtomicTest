import React from 'react'
import * as S from './style'
import LogoImage from '../../../assets/logoImg.png'

function Logo({onClick}){
  return (
    <S.LogoImage src={LogoImage} onClick={onClick}/>
  )
}

export default Logo