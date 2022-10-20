/* eslint-disable react/prop-types */
import { createContext, /* useState, useEffect, */ useReducer } from 'react';
import createAction from '../../utils/reducer/reducer.utils';

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

const initialState = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  total: 0,
};

export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
};

const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };

    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

export const CartProvider = ({ children }) => {
  // const [isCartOpen, setIsCartOpen] = useState(false);
  // const [cartItems, setCartItems] = useState([]);
  // const [cartCount, setCartCount] = useState(0);
  // const [total, setTotal] = useState(0);

  const [{
    cartItems,
    isCartOpen,
    cartCount,
    total,
  }, dispatch] = useReducer(cartReducer, initialState);

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

    const newCartTotal = newCartItems.reduce((total, cartItem) => (
      total + cartItem.price * cartItem.quantity
    ), 0);

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        total: newCartTotal,
        cartCount: newCartCount,
      }),
    );
  };

  const addToCart = (product) => {
    const newCartItems = addCartItems(cartItems, product);
    updateCartItemsReducer(newCartItems);
  };

  const removeFromCart = (product) => {
    const newCartItems = reduceCartQuantity(cartItems, product);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemFromCart = (product) => {
    const newCartItems = removeItemFromCart(cartItems, product);
    updateCartItemsReducer(newCartItems);
  };

  // useEffect(() => {
  //   const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

  //   setCartCount(newCartCount);
  // }, [cartItems]);

  // useEffect(() => {
  //   const newCartTotal = cartItems.reduce((total, cartItem) => (
  //     total + cartItem.price * cartItem.quantity
  //   ), 0);

  //   setTotal(newCartTotal);
  // }, [cartItems]);

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
  };

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
