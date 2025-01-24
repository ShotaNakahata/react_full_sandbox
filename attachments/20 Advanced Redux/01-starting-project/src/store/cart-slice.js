import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    items: [],
    totalQuantity: 0
}
createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        addItemtoCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id)
            if (!existingItem) {
                state.push({
                    name: newItem.title,
                    itemId: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    toalPrice: newItem.price
                })
            } else {
                existingItem.quantity++
                existingItem.toalPrice = existingItem.toalPrice + newItem.price
            }
        }
    }
})