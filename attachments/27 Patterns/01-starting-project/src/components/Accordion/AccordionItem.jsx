/* eslint-disable react/prop-types */
import React from 'react'
import { useContext } from 'react'
import { createContext } from 'react'

const AccordionItemContext = createContext()

export function useAccordionItemContext() {
    const ctx = useContext(AccordionItemContext)
    if(!ctx){
        throw new Error("AccordionItemContext need use in <AccordionItem/>")
    }
    return ctx
}

function AccordionItem({id, children, className }) {
    return (
        <AccordionItemContext.Provider value={id}>
            <li className={className}>
                {children}
            </li>
        </AccordionItemContext.Provider>
    )
}

export default AccordionItem