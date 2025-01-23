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
            const existingCartItem = state.items[existingCartItemIdx]
            console.log("form removeItem state :",state)
            const updatedItems = [...state.items];
            if (existingCartItem.quantity === 1) {
                updatedItems.splice(existingCartItemIdx, 1);
            } else {
                const updatedItem = {
                    ...existingCartItem, quantity: existingCartItem.quantity - 1
                };
                updatedItems[existingCartItemIdx] = updatedItem
            }
            return { ...state, items: updatedItems };
        }
        case "CART-RESET": {
            return { ...state, items: [] };
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
    function clearCart() {
        dispatchCartAction({ type: "CART-RESET"})
    }

    const contextValue = {
        items: cart.items,
        addItem,
        removeItem,
        clearCart
    };
    console.log("contextValue :", contextValue)

    return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}
