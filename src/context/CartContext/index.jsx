/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';

const checkCartItems = (cartItems, product) => {
  // find if cartItems contains products
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === product.id);

  // if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) => (cartItem.id === product.id ? {
      ...cartItem,
      quantity: cartItem.quantity + 1,
    }
      : cartItem));
  }

  // return new array with modified cartItems/new cart item
  return [...cartItems, { ...product, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addToCart: () => { },
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (product) => {
    setCartItems(checkCartItems(cartItems, product));
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

    setCartCount(newCartCount);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    addToCart,
    cartItems,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
