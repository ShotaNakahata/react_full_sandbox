/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        />
      </ul>
    </section>
  );
};

export default Products;
