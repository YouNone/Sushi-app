import { useEffect, useState } from "react";
import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import styles from "./MealsList.module.css";

const MealsList = (props) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const responce = await fetch(
        "https://react-course-http-jokes-default-rtdb.firebaseio.com/meals.json"
      );
      const data = await responce.json();
      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          price: data[key].price,
          description: data[key].description,
        });
      }
      setMeals(loadedMeals);
    };
    fetchMeals();
  }, []);

  const MealList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      description={meal.description}
      price={meal.price}
      key={meal.id}
      name={meal.name}
    />
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
