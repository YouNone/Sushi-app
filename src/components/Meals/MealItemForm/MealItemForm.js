import { useRef, useState } from "react";
import Input from "../../UI/Input/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [isAmountValid, setAmountValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const inputAmount = amountInputRef.current.value;
    if (
      inputAmount.trim().length === 0 ||
      inputAmount < 1 ||
      +inputAmount > 10
    ) {
      setAmountValid(false);
      return;
    }

    props.onAddToCart(+inputAmount);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="quantity:"
        id={props.id}
        input={{
          id: props.id,
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!isAmountValid && <p>Please enter amount from 1 to 10</p>}
    </form>
  );
};
export default MealItemForm;
