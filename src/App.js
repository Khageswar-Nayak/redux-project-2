import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "./store/cart-slice";

function App() {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle.toggle);
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  useEffect(() => {
    fetch("https://redux-cart-e80d3-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart),
    });
  }, [cart]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://redux-cart-e80d3-default-rtdb.firebaseio.com/cart.json"
        );
        const data = await response.json();
        console.log(data);
        if (data.items) {
          dispatch(cartAction.setCart(data));
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {toggle && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
