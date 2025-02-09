/* eslint-disable react/prop-types */
import React from 'react'

function AccordionItem({ children,className }) {
    return (
        <li className={className}>
            {children}
        </li>
    )
}

export default AccordionItem