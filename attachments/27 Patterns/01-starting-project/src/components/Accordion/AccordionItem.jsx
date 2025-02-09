/* eslint-disable react/prop-types */
import React from 'react'

function AccordionItem({children,title,className}) {
  return (
    <li className={className}>
        <h3>{title}</h3>
        <div>
            {children}
        </div>
    </li>
  )
}

export default AccordionItem