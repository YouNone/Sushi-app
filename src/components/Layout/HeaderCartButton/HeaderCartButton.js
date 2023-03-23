import { useContext, useEffect, useState } from "react";
import CartIcon from "../../../assets/CartIcon.js";
import CartContext from "../../../store/CartContext.js";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  const [isButtonAnimated, setButtonAnimation] = useState(false);
  const cartItemsCount = cartContext.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  const buttonClasses = `${styles.button} ${
    isButtonAnimated ? styles.bump : ""
  }`;

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setButtonAnimation(true);
    setTimeout(() => {
      setButtonAnimation(false);
    }, 300);
  }, [cartContext.items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={styles.badge}>{cartItemsCount}</span>
    </button>
  );
};
export default HeaderCartButton;
