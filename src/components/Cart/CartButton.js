import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleAuction } from "../../store/toggle-slice";

const CartButton = (props) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  console.log(totalQuantity);
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggleAuction.isToggle());
  };
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
