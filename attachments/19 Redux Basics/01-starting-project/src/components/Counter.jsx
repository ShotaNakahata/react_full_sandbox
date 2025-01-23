/* eslint-disable react/react-in-jsx-scope */
import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)
  const toggleShow = useSelector((state) => state.showCounter)
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" })
  };

  const increamentHandler = () => {
    dispatch({ type: "increament" })
  }
  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 })
  }
  const decreamentHandler = () => {
    dispatch({ type: "decreament" })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggleShow && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increamentHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decreamentHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
