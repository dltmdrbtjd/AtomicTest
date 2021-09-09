import React from 'react';
import * as S from './style';

function OrderItem({ items, onClick }) {
  return (
    <S.OrderItem>
      <S.OrderItemId>No.{items.id}</S.OrderItemId>
      <S.RightBox>
        <S.OrderItemName>{items.itemName}</S.OrderItemName>
        <S.DetailBtn onClick={onClick}>상세보기</S.DetailBtn>
      </S.RightBox>
    </S.OrderItem>
  )
}

export default OrderItem;