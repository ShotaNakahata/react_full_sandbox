/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from '../../store/cart-slice';

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch()

  function handleAddItem() {
    dispatch(
      cartActions.addItemtoCart({
        title,
        price,
        description,
        id
      }))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddItem}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
