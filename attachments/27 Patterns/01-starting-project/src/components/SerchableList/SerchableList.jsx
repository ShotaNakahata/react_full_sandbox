/* eslint-disable react/prop-types */
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

function SerchableList({ items, children, itemKeyFn }) {
  const [searchTerm, setSearchTerm] = useState("")
  const lastChange = useRef()
  const searchResult = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  )
  function handleChange(event) {
    if (lastChange.current) {
      clearInterval(lastChange.current)
    }
    lastChange.current = setInterval(() => {
      lastChange.current = null
      setSearchTerm(event.target.value)
    }, 500);
  }
  return (
    <div className='searchable-list'>
      <input type="serch" placeholder='serch' onChange={handleChange} />
      <ul>
        {searchResult.map((item) => {
          // return (<li key={index}>{item.toString()}</li>)
          return (<li key={itemKeyFn(item)}>
            {children(item)}
          </li>)
          // return (<li key={index}>{JSON.stringify(item)}</li>)
        })}
      </ul>
    </div>
  )
}

export default SerchableList