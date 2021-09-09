import React from 'react';
import * as S from './style';

function Container({children, className}) {
  return (
    <S.Container className={className}>
      {children}
    </S.Container>
  )
}

export default Container