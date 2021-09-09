import React from 'react';
import * as S from './style';

function Strong({children, className, ...props}){
  return (
    <S.Strong className={className} {...props}>
      {children}
    </S.Strong>
  )
}

Strong.defaultProps = {
  fs: 'md',
  fw: 'bold'
}

export default Strong