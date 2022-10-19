/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CheckoutItem.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const {
    name, imageUrl, price, quantity,
  } = cartItem;

  const { addToCart, removeFromCart, clearItemFromCart } = useContext(CartContext);

  const removeFromCartHandler = () => clearItemFromCart(cartItem);
  const removeItemHandler = () => removeFromCart(cartItem);
  const addItemHandler = () => addToCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
          {'  '}
        </div>
        {quantity}
        <div className="arrow" onClick={addItemHandler}>
          {'  '}
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeFromCartHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
