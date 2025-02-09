/* eslint-disable react/prop-types */
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import AccordionItem from './AccordionItem'
import AccordionTitle from './AccordionTitle'
import AccordionContent from "./AccordionContent";

const AccordionContext = createContext()

export function useAccordionContext() {
    const ctx = useContext(AccordionContext)
    if (!ctx) {
        throw new Error("must use in <Accordion>")
    }
    return ctx
}

function Accordion({ children, className }) {
    const [openItemId, setOpenItemId] = useState(null)
    const contextVal = {
        openItemId,
        toggleItem
    }
    function toggleItem(id) {
        setOpenItemId((prev) => prev === id ? null : id)

    }
    return (
        <AccordionContext.Provider value={contextVal}>
            <ul className={className}>
                {children}
            </ul>
        </AccordionContext.Provider>
    )
}

export default Accordion

Accordion.item = AccordionItem
Accordion.title = AccordionTitle
Accordion.content = AccordionContent