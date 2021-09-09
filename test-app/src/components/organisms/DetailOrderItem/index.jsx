import React from 'react';
import * as S from './style';

function DetailOrderItem({item}) {
  return (
    <S.DetailItem>
      <S.DetailItemId>No.{item.id}</S.DetailItemId>
      <S.DetailItemName>{item.itemName}</S.DetailItemName>
    </S.DetailItem>
  )
}

export default DetailOrderItem;