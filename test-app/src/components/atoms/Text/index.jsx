import React from 'react';
import * as S from './style'

function Text({children, className, ...props}) {
  return (
    <S.Text className={className} {...props}>
      {children}
    </S.Text>
  )
}

export default Text