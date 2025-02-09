/* eslint-disable react/prop-types */
import React from 'react'

function SerchableList({items}) {
  return (
    <div className='searchable-list'>
        <input type="serch" placeholder='serch'/>
        <ul>
            {items.map((item,index)=>{
                return(<li key={index}>{item.toString()}</li>)
            })}
        </ul>
    </div>
  )
}

export default SerchableList