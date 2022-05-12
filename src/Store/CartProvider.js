import React from 'react';
import CartContext from './Cartcontext';
import { useReducer } from 'react';

const defaultState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];

    let updatedItems;
    if (existingItem) {
      const UpdatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = UpdatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    console.log(updatedTotalAmount);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE') {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];

    const updatedTotalAmount = state.totalAmount - existingItem.price;
    console.log(updatedTotalAmount);

    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const UpdatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = UpdatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'DELETE') {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingItemIndex];

    const updatedTotalAmount =
      state.totalAmount - existingItem.price * existingItem.amount;
    let updatedItems;
    console.log(updatedTotalAmount);

    if (existingItem.id === action.id) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultState;
};

const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, defaultState);

  const addItemToCartHandler = (item) => {
    dispatch({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatch({ type: 'REMOVE', id: id });
  };

  const deleteItemHandler = (id) => {
    dispatch({ type: 'DELETE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeitem: removeItemFromCartHandler,
    deleteItem: deleteItemHandler,
  };

  console.log(cartState);

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
