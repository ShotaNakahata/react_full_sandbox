/* eslint-disable no-undef */
import React from 'react'

function StateLogin() {
    const [enteredVal, setEnteredVal] = useState({
        enteredEmail: "",
        enteredPassword: ""
    })
    function handleInputValue(identify, event) {
        setEnteredVal(prev => ({
            ...prev,
            [identify]: event.target.value
        }))
    }
    return (
        <div>StateLogin</div>
    )
}

export default StateLogin