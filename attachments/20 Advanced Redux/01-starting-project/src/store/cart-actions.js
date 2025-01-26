import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch("https://reactfullsandbox-default-rtdb.firebaseio.com/cart.json")
            if (!response.ok) {
                throw new Error("could not fetch data")
            }
            const data = response.json()
            return data
        }

        try {
            const cartData = await fetchData()
            console.log("in fetchCartData try")
            dispatch(cartActions.replaceCart(cartData)) //このreplaceが何をしているのか、なんで必要なのかが知りたい
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: "error",
                title: "Error!",
                message: "Feting cart data failed!"
            }))
        }
    }
}


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
