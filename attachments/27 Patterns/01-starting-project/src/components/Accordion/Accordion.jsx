/* eslint-disable react/prop-types */
import React from 'react'


//ここのclasNameの受け取り方を確認objじゃないの？
function Accordion({children,className}) {
  return (
    <ul className={className}>
        {children}
    </ul>
  )
}

export default Accordion