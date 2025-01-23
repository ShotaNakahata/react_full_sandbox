/* eslint-disable react/react-in-jsx-scope */
import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)
  const toggleCounterHandler = () => { };

  const increamentHandler = () => {
    dispatch({ type: "increament" })
  }
  const decreamentHandler = () => {
    dispatch({ type: "decreament" })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={increamentHandler}>Increment</button>
        <button onClick={decreamentHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
