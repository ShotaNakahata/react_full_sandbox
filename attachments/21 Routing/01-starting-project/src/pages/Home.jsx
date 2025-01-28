import React from 'react'
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <h1>My Home Page</h1>
      <p>Go to <Link to="/products">the list of product</Link></p>
    </>

  )
}

export default Home