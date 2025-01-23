import { createStore } from "redux";
import { createSlice,configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increament(state) {
            state.counter++
        },
        decreament(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.amount
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

const store = configureStore({
    reducer:counterSlice.reducer
})

export default store
//reducerを登録したのはわかるのですがstoreはどこに行ったのの？どうやって参照するの？