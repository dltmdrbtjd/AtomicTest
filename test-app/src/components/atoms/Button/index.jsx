import React from 'react';
import * as S from './style';

function Button({ children, className, onClick, ...props }) {
  return (
    <S.Button className={className} onClick={onClick} {...props}>
      {children}
    </S.Button>
  )
}

export default Button