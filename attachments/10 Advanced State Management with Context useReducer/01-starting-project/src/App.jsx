import { useState } from "react";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import Product from "./components/Product.jsx";
import { CartContext } from "./store/shopping-cart-context.jsx";

function App() {
  

  return (
    <CartContext.Provider value={ctxValue}>
      <Header
        // cart={shoppingCart}
        // onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
      />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContext.Provider>
  );
}

export default App;
