import React, { useState } from 'react'

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
            {!changetext && <p>It is good to see you</p>}
            {changetext && <p>Changed</p>}
            <button onClick={handleChangeText}>Change text</button>
            <button onClick={handleCounter}>Button</button>
            <p>{counter}</p>
        </div>
    )
}

export default Greeting