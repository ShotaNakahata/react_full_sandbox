/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { createContext, useState } from "react";

const userProgressContext = createContext({
    process: "",  // "cart" "checkout"
    showCart: () => { },
    hideCart: () => { },
    showCheckout: () => { },
    hideCheckout: () => { }
})

export function UserProgressProvider({ children }) {
    const [userProgress, setUserProgress] = useState("")
    function showCart() {
        setUserProgress("cart")
    }
    function hideCart() {
        setUserProgress("")
    }
    function showCheckout() {
        setUserProgress("checkout")
    }
    function hideCheckout() {
        setUserProgress("")
    }
    const userProgressCtx = {
        process: userProgress,
        showCart, hideCart, showCheckout, hideCheckout
    }
    return <userProgressContext.Provider value={userProgressCtx}>{children}</userProgressContext.Provider>
}

export default userProgressContext