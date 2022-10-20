/* eslint-disable react/prop-types */
import {
  CartItemContainerDiv,
  ItemDetailsDiv,
  NameSpan,
  PriceSpan,
} from './CartItem.styles';

const CartItem = ({ cartItem }) => {
  const {
    name, price, imageUrl, quantity,
  } = cartItem;

  return (
    <CartItemContainerDiv>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetailsDiv>
        <NameSpan>{name}</NameSpan>
        <PriceSpan>
          {quantity}
          {' '}
          x
          {' '}
          {price}
        </PriceSpan>
      </ItemDetailsDiv>
    </CartItemContainerDiv>
  );
};

export default CartItem;
