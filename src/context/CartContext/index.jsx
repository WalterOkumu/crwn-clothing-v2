/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';

const addCartItems = (cartItems, product) => {
  // find if cartItems contains products
  const existingCartItem = cartItems.find((item) => item.id === product.id);

  // if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((item) => (item.id === product.id ? {
      ...item,
      quantity: item.quantity + 1,
    }
      : item));
  }

  // return new array with modified cartItems/new cart item
  return [...cartItems, { ...product, quantity: 1 }];
};

const reduceCartQuantity = (cartItems, product) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === product.id);

  // check if quantity is equal to 1, if it is remove the item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== product.id);
  }

  // return back cartItems with matching cart item with reduced quantity
  return cartItems.map((item) => (item.id === product.id ? {
    ...item,
    quantity: item.quantity - 1,
  }
    : item));
};

const removeItemFromCart = (
  cartItems,
  product,
) => cartItems.filter((item) => item.id !== product.id);

export const CartContext = createContext({
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  total: 0,
  setIsCartOpen: () => { },
  addToCart: () => { },
  removeFromCart: () => { },
  clearItemFromCart: () => { },
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    setCartItems(addCartItems(cartItems, product));
  };

  const removeFromCart = (product) => {
    setCartItems(reduceCartQuantity(cartItems, product));
  };

  const clearItemFromCart = (product) => {
    setCartItems(removeItemFromCart(cartItems, product));
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => (
      total + cartItem.price * cartItem.quantity
    ), 0);

    setTotal(newCartTotal);
  }, [cartItems]);

  const value = {
    isCartOpen,
    cartItems,
    cartCount,
    total,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    clearItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
