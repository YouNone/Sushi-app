import React from "react";
import MealsList from "./MealsList/MealsList";
import PromoText from "./PromoText/PromoText";

const Meals = () => {
  return (
    <React.Fragment>
      <PromoText />
      <MealsList />
    </React.Fragment>
  );
};
export default Meals;
