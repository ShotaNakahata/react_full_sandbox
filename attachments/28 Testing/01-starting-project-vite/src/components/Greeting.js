import React, { useState } from 'react'
import Output from './Output'

function Greeting() {
    const [counter, setCounter] = useState(0)
    const [changetext, setChangeText] = useState(false)
    function handleCounter() {
        setCounter((prev) => prev + 1)
    }
    function handleChangeText() {
        setChangeText((prev) => !prev)
    }
    return (
        <div>
            <h2>Hello World</h2>
            {!changetext && <Output>It is good to see you</Output>}
            {changetext && <Output>Changed</Output>}
            <button onClick={handleChangeText}>Change text</button>
            <button onClick={handleCounter}>Button</button>
            <p>{counter}</p>
        </div>
    )
}

export default Greeting