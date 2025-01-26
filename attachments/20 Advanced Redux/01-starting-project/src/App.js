/* eslint-disable react/react-in-jsx-scope */
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { } from "@reduxjs/toolkit";
import { useEffect } from 'react';


function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible)
  const cart = useSelector((state)=>state.cart)
  useEffect(()=>{
    fetch("https://reactfullsandbox-default-rtdb.firebaseio.com/cart.json",{
      method:"PUT",
      body:JSON.stringify(cart)
    })
  },[cart])
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
