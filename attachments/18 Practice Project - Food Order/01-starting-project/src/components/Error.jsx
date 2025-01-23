/* eslint-disable react/prop-types */
import React from 'react'

function Error({ title, message }) {
    return (
        <div className='error'>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    )
}

export default Error