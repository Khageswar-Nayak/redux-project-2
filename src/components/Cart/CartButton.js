import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { toggleAuction } from "../../store/toggle-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggleAuction.isToggle());
  };
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
