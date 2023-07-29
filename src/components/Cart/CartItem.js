import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, totalPrice, price } = props.item;

  const cartItemIncreaseHandler = (item) => {
    dispatch(cartAction.addCart(item));
  };

  const cartItemDecreaseHandler = (item) => {
    dispatch(cartAction.removeCart(item));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => cartItemDecreaseHandler(props.item)}>-</button>
          <button onClick={() => cartItemIncreaseHandler(props.item)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
