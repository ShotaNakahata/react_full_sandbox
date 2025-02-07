/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
'use client';

import { useState } from 'react';

export default function ClientDemo({ children }) {
    const [count, setCount] = useState(0); // <- this is why it's a client component

    console.log('ClientDemo rendered');
    return (
        <div className="client-cmp">
            <h2>A React Client Component</h2>
            <p>
                Will be rendered on the client <strong>AND</strong> the server.
            </p>
            {/* <p>
                <button onClick={onclick = () => { setCount((prev) => prev + 1) }}>Increase</button>
            </p>
            <span>{count}</span> */}
            {children}
        </div>
    );
}