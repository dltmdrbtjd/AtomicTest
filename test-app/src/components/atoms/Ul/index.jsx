import React from 'react';
import * as S from './style';

function Ul({children, className}) {
  return (
    <S.Ul className={className}>
      {children}
    </S.Ul>
  )
}

export default Ul