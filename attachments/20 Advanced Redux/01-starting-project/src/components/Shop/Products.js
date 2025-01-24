/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODCUTS = [{
  id: "1",
  price: 6,
  title: "My first book",
  description: "This is a first product - amazing!"
}, {
  id: "2",
  price: 4,
  title: "My second book",
  description: "This is a second product - amazing!"
}]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODCUTS.map((item) => (
          <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />))}
      </ul>
    </section>
  );
};

export default Products;
