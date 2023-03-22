import { useContext } from "react";
import CartIcon from "../../../assets/CartIcon.js";
import CartContext from "../../../store/CartContext.js";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  const cartItemsCount = cartContext.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={styles.badge}>{cartItemsCount}</span>
    </button>
  );
};
export default HeaderCartButton;
