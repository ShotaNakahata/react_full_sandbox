import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        increament(state) {
            state.counter++
        },
        decreament(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        }
    }
})
// const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "increament": {
//             return {
//                 counter: state.counter + 1,
//                 showCounter: state.showCounter
//             }
//         }
//         case "increase": {
//             return {
//                 counter: state.counter + action.amount,
//                 showCounter: state.showCounter
//             }
//         }
//         case "decreament": {
//             return {
//                 counter: state.counter - 1,
//                 showCounter: state.showCounter
//             }
//         }
//         case "toggle": {
//             return {
//                 showCounter: !state.showCounter,
//                 counter: state.counter
//             }
//         }
//         default:
//             return state
//     }
// }
const initialAuthState = {
    isAuthentication: false
}
const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthentication = true
        },
        logout(state) {
            state.isAuthentication = false
        }
    }
})
const store = configureStore({
    reducer: {
        counter:counterSlice.reducer,
        auth:authSlice.reducer
    }
})
export const countActions = counterSlice.actions
export const authActions = authSlice.actions
export default store
//reducerを登録したのはわかるのですがstoreはどこに行ったのの？どうやって参照するの？