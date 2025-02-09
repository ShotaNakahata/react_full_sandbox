/* eslint-disable react/prop-types */
import React from 'react'
import { useState } from 'react'

function SerchableList({ items, children, itemKeyFn }) {
  const [searchTerm, setSearchTerm] = useState("")
  const searchResult = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  )
  function handleChange(event) {
    setSearchTerm(event.target.value)
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