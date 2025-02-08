/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
"use client"
import { use, useState } from 'react';

function UsePromiseDemo({ userPromise }) {
    const users= use(userPromise);
    const [count, setCount] = useState(0)
    return (
        <div className='rsc'>
            <p>use async await for data fetching</p>
            <p>
                <button onClick={() => setCount((prev) => prev + 1)}>
                    Increament
                </button>
                <span>{count}</span>
            </p>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name}({user.title})
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UsePromiseDemo