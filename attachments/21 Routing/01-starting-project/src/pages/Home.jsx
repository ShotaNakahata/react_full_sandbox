import React from 'react'
import { Link, useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate()
  function handleNavigate(params) {
    navigate("/products")
  }
  return (
    <>
      <h1>My Home Page</h1>
      <p>Go to <Link to="/products">the list of product</Link></p>
      <p>
        <button onClick={handleNavigate}>
          Go to Products Page
        </button>
      </p>
    </>

  )
}

export default Home