import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const initialCartState = {
    items: [],
    totalQuantity: 0
}
const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        addItemtoCart(state, action) {
            console.log("action.payload :", action.payload)
            const newItem = action.payload;
            console.log("newItem: ", newItem)
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

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: "pending",
            title: "Senfing",
            message: "Sending cart data!"
        }))
        const sendRequest = async () => {
            const response = await fetch("https://reactfullsandbox-default-rtdb.firebaseio.com/cart.json", {
                method: "PUT",
                body: JSON.stringify(cart)
            })
            if (!response.ok) {
                throw new Error("Sending cart data is faild")
            }
        }
        try {
            await sendRequest()
            dispatch(uiActions.showNotification({
                status: "success",
                title: "Succes!",
                message: "Sent cart data succesflly!"
            }))
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: "error",
                title: "Error!",
                message: "Sending cart data failed!"
            }))
        }
    }
}

export default cartSlice.reducer
export const cartActions = cartSlice.actions

