/* eslint-disable react/react-in-jsx-scope */
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { } from "@reduxjs/toolkit";
import { Fragment, useEffect } from 'react';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch()

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status: "pending",
        title: "Senfing",
        message: "Sending cart data!"
      }))
      const response = await fetch("https://reactfullsandbox-default-rtdb.firebaseio.com/cart.json", {
        method: "PUT",
        body: JSON.stringify(cart)
      })
      if (!response.ok) {
        throw new Error("Sending cart data is faild")
      }
      dispatch(uiActions.showNotification({
        status: "success",
        title: "Succes!",
        message: "Sent cart data succesflly!"
      }))
    }
    if (isInitial) {
      isInitial = false
      return
    }
    // eslint-disable-next-line no-unused-vars
    sendCartData().catch((error) => {
      dispatch(uiActions.showNotification({
        status: "error",
        title: "Error!",
        message: "Sending cart data failed!"
      }))
    })
  }, [cart, dispatch])

  return (
    <Fragment>
      {notification &&
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message} />
      }
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
