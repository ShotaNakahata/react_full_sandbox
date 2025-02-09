/* eslint-disable react/prop-types */
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

const AccordionContext = createContext()

export function useAccordionContext() {
    const ctx = useContext(AccordionContext)
    if(!ctx){
        throw new Error("must use in <Accordion>")
    }
    return ctx
}

function Accordion({ children, className }) {
    const [openItemId, setOpenItemId] = useState(null)
    const contextVal = {
        openItemId,
        openItem,
        closeItem
    }
    function openItem(id) {
        setOpenItemId(id)
    }
    function closeItem() {
        setOpenItemId(null)
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