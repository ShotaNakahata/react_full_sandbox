import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    items: [],
    totalQuantity: 0
}
const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        addItemtoCart(state, action) {
            console.log("action.payload :",action.payload)
            const newItem = action.payload;
            console.log("newItem: ",newItem)
            const existingItem = state.items.find((item) => item.id === newItem.id)
            state.totalQuantity++
            if (!existingItem) {
                state.items.push({
                    name: newItem.title,
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    toalPrice: newItem.price
                })
            } else {
                existingItem.quantity++
                existingItem.toalPrice = existingItem.toalPrice + newItem.price
            }
        },
        removeItemFromCart(state, action) {
            console.log("removeItemFromCart action :", action);
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                state.totalQuantity--; // 総量を減らす
                if (existingItem.quantity === 1) {
                    state.items = state.items.filter((item) => item.id !== id);
                } else {
                    existingItem.quantity--;
                    existingItem.toalPrice -= existingItem.price;
                }
            }
        }
        
    }
})

export default cartSlice.reducer
export const cartActions =  cartSlice.actions