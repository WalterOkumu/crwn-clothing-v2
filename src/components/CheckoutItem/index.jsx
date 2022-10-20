/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import {
  CheckoutItemContainerDiv,
  ImageContainerDiv,
  Span,
  QuantitySpan,
  Arrow,
  RemoveIcon,
} from './CheckoutItem.styles';

const CheckoutItem = ({ cartItem }) => {
  const {
    name, imageUrl, price, quantity,
  } = cartItem;

  const { addToCart, removeFromCart, clearItemFromCart } = useContext(CartContext);

  const removeFromCartHandler = () => clearItemFromCart(cartItem);
  const removeItemHandler = () => removeFromCart(cartItem);
  const addItemHandler = () => addToCart(cartItem);

  return (
    <CheckoutItemContainerDiv>
      <ImageContainerDiv>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainerDiv>
      <Span>{name}</Span>
      <QuantitySpan>
        <Arrow onClick={removeItemHandler}>
          &#10094;
          {'  '}
        </Arrow>
        {quantity}
        <Arrow onClick={addItemHandler}>
          {'  '}
          &#10095;
        </Arrow>
      </QuantitySpan>
      <Span>{price}</Span>
      <RemoveIcon onClick={removeFromCartHandler}>
        &#10005;
      </RemoveIcon>
    </CheckoutItemContainerDiv>
  );
};

export default CheckoutItem;
