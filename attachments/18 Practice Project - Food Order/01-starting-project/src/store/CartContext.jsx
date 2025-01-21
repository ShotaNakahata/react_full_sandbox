/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { createContext, useReducer } from "react";

export const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD-ITEM": {
      const existingCartItemIdx = state.items.findIndex((item) => item.id === action.item.id);
      const updatedItems = [...state.items];
      if (existingCartItemIdx > -1) {
        const existingItem = state.items[existingCartItemIdx];
        updatedItems[existingCartItemIdx] = { ...existingItem, quantity: existingItem.quantity + 1 };
      } else {
        updatedItems.push({ ...action.item, quantity: 1 });
      }
      return { ...state, items: updatedItems };
    }
    case "REMOVE-ITEM": {
      const existingCartItemIdx = state.items.findIndex((item) => item.id === action.id);
      const updatedItems = [...state.items];
      updatedItems.splice(existingCartItemIdx, 1);
      return { ...state, items: updatedItems };
    }
    default:
      return state;
  }
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: "ADD-ITEM", item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE-ITEM", id });
  }

  const contextValue = {
    items: cart.items,
    addItem,
    removeItem,
  };
  console.log("contextValue :",contextValue)

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}
