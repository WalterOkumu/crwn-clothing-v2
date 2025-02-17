import styled from 'styled-components';
import { BaseButton, GoogleSignInButton, InvertedButton } from '../Button/Button.styles';

export const CartDropDownContainerDiv = styled.div`
  position: absolute;
  // width: 240px;
  width: auto;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessageSpan = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsDiv = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`;

export default { CartDropDownContainerDiv, EmptyMessageSpan, CartItemsDiv };

/*
.cart-dropdown-container {
  position: absolute;
  // width: 240px;
  width: auto;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  .empty-message {
    font-size: 18px;
    margin: 50px auto;
  }

  .cart-items {
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
  }

  button {
    margin-top: auto;
  }
}
*/
