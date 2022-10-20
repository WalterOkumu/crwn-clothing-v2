import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CheckoutItem from '../CheckoutItem';
import {
  CheckoutContainerDiv,
  CheckoutHeader,
  HeaderBlockDiv,
  TotalSpan,
} from './Checkout.styles';

const Checkout = () => {
  const { cartItems, total } = useContext(CartContext);

  return (
    <CheckoutContainerDiv>
      <CheckoutHeader>
        <HeaderBlockDiv>
          <span>Product</span>
        </HeaderBlockDiv>
        <HeaderBlockDiv>
          <span>Description</span>
        </HeaderBlockDiv>
        <HeaderBlockDiv>
          <span>Quantity</span>
        </HeaderBlockDiv>
        <HeaderBlockDiv>
          <span>Price</span>
        </HeaderBlockDiv>
        <HeaderBlockDiv>
          <span>Remove</span>
        </HeaderBlockDiv>
      </CheckoutHeader>
      {
        cartItems.map((item) => <CheckoutItem key={item.id} cartItem={item} />)
      }
      <TotalSpan>
        Total:
        {' '}
        KES
        {' '}
        {total}
      </TotalSpan>
    </CheckoutContainerDiv>
  );
};

export default Checkout;
