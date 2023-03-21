import MealItemForm from "../MealItemForm/MealItemForm";
import styles from "./MealItem.module.css";

const MealItem = (props) => {
  const formattedPrice = `$${props.price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <div>
        <div className={styles.form}>
          <MealItemForm id={props.id} />
        </div>
      </div>
    </li>
  );
};
export default MealItem;
