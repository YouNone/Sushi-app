import { useContext } from "react";
import CartContext from "../../../store/CartContext";
import MealItemForm from "../MealItemForm/MealItemForm";
import styles from "./MealItem.module.css";

const MealItem = (props) => {
  const cartContext = useContext(CartContext);
  const formattedPrice = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <div>
        <div className={styles.form}>
          <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
        </div>
      </div>
    </li>
  );
};
export default MealItem;
