import styles from "./PromoText.module.css";

const PromoText = () => {
  return (
    <section className={styles["promo-text"]}>
      <h2>Online Sushi Restaurant Japantown</h2>
      <p>
        <b>Japantown</b> - is online sushi restaurant with favorite sushi and
        sashimi, rolls and other dishes of national Japanese cuisine are made by
        the team professional chefs.
      </p>
      <p>
        Fast work and quality products, as well as the most real components give
        good taste to dishes, give pleasure from a meal.
      </p>
    </section>
  );
};

export default PromoText;
