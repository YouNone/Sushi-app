import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return <div className={styles}>{props.children}</div>;
};
export default MealItemForm;
