import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartIconContainerDiv, ItemCountSpan, ShoppingIcon } from './CartIcon.styles';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainerDiv onClick={toggleCart}>
      <ShoppingIcon />
      <ItemCountSpan>{cartCount}</ItemCountSpan>
    </CartIconContainerDiv>
  );
};

export default CartIcon;
