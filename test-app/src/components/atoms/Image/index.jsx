import React from 'react';
import * as S from './style';

function Img({src, className, onClick}) {
  return (
    <>
      <S.Image src={src} className={className} onClick={onClick}/>
    </>
  )
}

export default Img