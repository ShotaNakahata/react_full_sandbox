/* eslint-disable react/react-in-jsx-scope */
import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';

const CartButton = () => {
  const totalQuantity=useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch()
  function toggleCartHandler() {
    dispatch(uiActions.toggle())
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
