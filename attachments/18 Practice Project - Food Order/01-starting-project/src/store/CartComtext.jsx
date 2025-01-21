/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { createContext, useReducer } from "react";

export const CartContext = createContext({
    items: [],
    // eslint-disable-next-line no-unused-vars
    addItem: (item) => { },
    // eslint-disable-next-line no-unused-vars
    removeItem: (id) => { }
})

function cartReducer(state, action) {
    switch (action.type) {
        case "ADD-ITEM": {
            const existingCartItemIdx = state.items.findIndex((item) => item.id === action.item.id)
            const upDatedItems = [...state.items]
            if (existingCartItemIdx > -1) {
                const existingItem = state.items[existingCartItemIdx]
                const upDatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity + 1
                }
                upDatedItems[existingCartItemIdx] = upDatedItem
            } else {
                upDatedItems.push({ ...action.item, quantity: 1 })
            }
            return { ...state, items: upDatedItems }
        }
        case "REMOVE-ITEM":
            return {}
        default:
            return state
    }
}

export function CartContextProvider({ children }) {
    useReducer(cartReducer, { items: [] })
    return <CartContext.Provider>{children}</CartContext.Provider>
}