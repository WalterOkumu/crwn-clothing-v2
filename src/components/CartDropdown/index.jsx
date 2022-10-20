import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Button from '../Button';
import CartItem from '../CartItem';
import { CartDropDownContainerDiv, EmptyMessageSpan, CartItemsDiv } from './CartDropdown.styles';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <CartDropDownContainerDiv>
      <CartItemsDiv>
        {
          cartItems.length ? (cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          )))
            : <EmptyMessageSpan>Your cart is empty</EmptyMessageSpan>
        }
      </CartItemsDiv>
      <Button onClick={() => navigate('/checkout')}>Checkout</Button>
    </CartDropDownContainerDiv>
  );
};

export default CartDropdown;
