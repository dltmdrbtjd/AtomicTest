import React from 'react';
import * as S from './style'

function Grid({children, className}){
  return (
    <S.Grid className={className}>
      {children}
    </S.Grid>
  )
}

export default Grid;