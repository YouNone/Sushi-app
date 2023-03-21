import Card from "../../UI/Card/Card";
import styles from "./MealsList.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: 'Roll "Naomi"',
    description:
      "Philadelphia cheese, chicken fillet, masago, tomato, cucumber, sesame",
    price: 11.99,
  },
  {
    id: "m2",
    name: "Spice in salmon",
    description: "Rice, salmon, spicy sauce",
    price: 3.99,
  },
  {
    id: "m3",
    name: "Sushi with eel",
    description: "Smoked eel, unagi sauce, sesame",
    price: 4.99,
  },
  {
    id: "m4",
    name: 'Salad "Poke with salmon"',
    description: "Rice, salmon, cucumber, chuka, nori, tuna chips, nut sauce",
    price: 7.99,
  },
];

const MealsList = (props) => {
  const MealList = DUMMY_MEALS.map((meal) => (
    <li key={meal.id}>{meal.name}</li>
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{MealList}</ul>
      </Card>
    </section>
  );
};
export default MealsList;
