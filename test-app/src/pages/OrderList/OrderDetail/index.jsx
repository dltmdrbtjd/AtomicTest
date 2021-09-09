import React from 'react';
import * as S from './style';
import DetailOrderItem from '../../../components/organisms/DetailOrderItem';
import { history } from '../../../redux/configureStore';
import { DetailOrderLoad } from '../../../libs/api';
import { CircularProgress } from '@material-ui/core';

function OrderDetailPage(props) {
  const id = Number(props.match.params.id)
  const [loading, setLoading] = React.useState(false);
  const [itemId, setItemId] = React.useState('');
  const [name, setName] = React.useState('');

  const item = {
    id:itemId,
    itemName:name,
  }

  React.useEffect(() => {
    setLoading(true);

    DetailOrderLoad(id)
    .then(async res => {
      await setItemId(res.data.id)
      await setName(res.data.itemName)
      setLoading(false);
    })
    .catch(err => console.error(err)) 
  },[])

  return (
    <S.OrderDetailContainer>
      {loading ? <CircularProgress /> : <DetailOrderItem item={item}/> }
      <S.OrderMoreBtn onClick={() => history.goBack()}>뒤로가기</S.OrderMoreBtn>
    </S.OrderDetailContainer>
  )
}

export default OrderDetailPage;