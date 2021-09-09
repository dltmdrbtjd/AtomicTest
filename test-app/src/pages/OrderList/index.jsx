import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrderItem from '../../components/organisms/OrderItem';
import { OrderCreators } from '../../redux/modules/order';
import * as S from './style'
import { CircularProgress } from '@material-ui/core';
import { history } from '../../redux/configureStore';

function OrderListPage() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token)
  const totalPage = useSelector(state => state.order.totalPages);
  const pageNum = useSelector(state => state.order.currentPage);
  const Items = useSelector(state => state.order.content); 
  const is_loading = useSelector(state => state.order.loading);

  function MoreOrderList() {
    dispatch(OrderCreators.fetchOrderLoad())
  }

  React.useEffect(() => {
    if(!token){
      history.replace('/login')
    }
  })

  return (
    <S.OrderContainer>
      <S.OrderSection>
        <S.OrderTitle>주문목록</S.OrderTitle>
        {Items.map((item, idx) => {
          return <OrderItem items={item} key={idx} onClick={() => history.push(`/mypage/order/${item.id}`)}/>
        })}
        <div style={{margin:'30px'}}>
        {is_loading ? <CircularProgress /> : null}
        </div>
        {totalPage <= pageNum ? '' : 
        <S.OrderMoreBtn onClick={MoreOrderList}>더 보기</S.OrderMoreBtn>}
      </S.OrderSection>
    </S.OrderContainer>
  )
}

export default OrderListPage;