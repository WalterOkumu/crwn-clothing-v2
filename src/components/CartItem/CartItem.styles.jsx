import styled from 'styled-components';

export const CartItemContainerDiv = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }
`;

export const ItemDetailsDiv = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const NameSpan = styled.span`
  font-size: 16px;
`;

export const PriceSpan = styled.span`
  font-size: 16px;
`;

export default {
  CartItemContainerDiv, ItemDetailsDiv, NameSpan, PriceSpan,
};

/*
.cart-item-container {
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }

  .item-details {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;

    .name {
      font-size: 16px;
    }
  }
}
*/
