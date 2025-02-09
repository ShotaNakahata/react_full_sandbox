/* eslint-disable react/prop-types */
import React from 'react'
import { useAccordionContext } from './Accordion'
import { useAccordionItemContext } from './AccordionItem'

function AccordionTitle({ children, className }) {
    const { toggleItem } = useAccordionContext()
    const id  = useAccordionItemContext()
    return (
        <h3 className={className} onClick={() => toggleItem(id)}>{children}</h3>
    )
}

export default AccordionTitle