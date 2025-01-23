import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true }

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "increament": {
            return {
                counter: state.counter + 1,
                showCounter: state.showCounter
            }
        }
        case "increase": {
            return {
                counter: state.counter + action.amount,
                showCounter: state.showCounter
            }
        }
        case "decreament": {
            return {
                counter: state.counter - 1,
                showCounter: state.showCounter
            }
        }
        case "toggle": {
            return {
                showCounter: !state.showCounter,
                counter: state.counter
            }
        }
        default:
            return state
    }
}

const store = createStore(counterReducer)

export default store