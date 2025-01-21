/* eslint-disable react/react-in-jsx-scope */
import Cart from "./components/Cart";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressProvider } from "./store/UserProgressContext";
function App() {
  return (
    <>
      <UserProgressProvider>
        <CartContextProvider>
          <Header />
          <Meals />
          <Cart></Cart>
        </CartContextProvider>
      </UserProgressProvider>
    </>
  );
}

export default App;
