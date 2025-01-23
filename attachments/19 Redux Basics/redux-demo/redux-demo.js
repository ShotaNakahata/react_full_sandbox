const redux = require("redux")

const counterReducer = (state = { counter: 0 }, action) => {
    switch (action.type) {
        case "increment": {
            return { counter: state.counter + 1 }
        }
        case "decrement": {
            return { counter: state.counter - 1 }
        }
        default:
            break;
    }
    return {
        counter: state.counter + 1
    }
}
const store = redux.createStore(counterReducer)
console.log("from root(inital)", store.getState())

const counterSubscriber = () => {
    const latestStore = store.getState()
    console.log("from counterSubscriber : ", latestStore);
}

store.subscribe(counterSubscriber)
store.dispatch({ type: "increment" })
store.dispatch({ type: "decrement" })