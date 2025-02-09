/* eslint-disable react/prop-types */
import React from 'react'
import { useAccordionContext } from './Accordion'

function AccordionTitle({ children,className,id }) {
    const { toggleItem } = useAccordionContext()
    return (
        <h3 className={className} onClick={() => toggleItem(id)}>{children}</h3>
    )
}

export default AccordionTitle