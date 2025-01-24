/* eslint-disable react/react-in-jsx-scope */
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { } from "@reduxjs/toolkit";


function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible)
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
