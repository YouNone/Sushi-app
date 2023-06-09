import React from "react";
import headerImg from "../../../assets/flat-lay-sushi.jpg";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1 className={styles.name}>Japantown</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={headerImg} alt="sushi header"></img>
      </div>
    </React.Fragment>
  );
};
export default Header;
