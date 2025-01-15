import React from 'react'
import { useState } from 'react'

function Quiz() {
    const [activeQueationIdx,setActiveQueationIdx] = useState(0)
    const [uerAnswers,setUerAnswers] = useState([])
  return (
    <p>Currently active Queastion</p>
  )
}

export default Quiz