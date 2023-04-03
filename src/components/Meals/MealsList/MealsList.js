import { useEffect, useState } from "react";
import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import styles from "./MealsList.module.css";

const MealsList = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [httpError, setHttpErrorMessage] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      setIsloading(true);
      const responce = await fetch(
        "https://react-course-http-jokes-default-rtdb.firebaseio.com/meals.json"
      );
      if (!responce.ok) {
        throw new Error("Failed to fetch data");
      }
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
      setIsloading(false);
    };
    fetchMeals().catch((err) => {
      setIsloading(false);
      setHttpErrorMessage(err.message);
    });
  }, []);

  if (isLoading && !httpError) {
    return (
      <section className={styles.loading}>
        <p>Fetching data from server..</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={styles.error}>
        <p>{httpError}</p>
      </section>
    );
  }

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
