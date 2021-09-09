import React from 'react';
import * as S from './style'

function List({children, className, onClick}){
  return (
    <S.List className={className} onClick={onClick}>
      {children}
    </S.List>
  )
}

export default List;