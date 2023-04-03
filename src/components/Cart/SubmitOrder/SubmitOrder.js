import styles from "./SubmitOrder.module.css";

const SubmitOrder = (props) => {
  const confirmOrderHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={confirmOrderHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div className={styles.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <div className={styles.control}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" />
      </div>
      <button>Submit order</button>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
    </form>
  );
};
export default SubmitOrder;
