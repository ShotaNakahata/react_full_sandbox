/* eslint-disable react/prop-types */
import React from 'react'

function Input({label,id,...props}) {
  return (
    <p className='control'>
        <label htmlFor="id">{label}</label>
        <input  id={id} name={id} {...props}/>
    </p>
  )
}

export default Input