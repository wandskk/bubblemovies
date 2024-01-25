import React from "react";
import logoImage from "../../assets/images/logo_white.png";
import styles from "../../styles/Logo/Logo.module.scss";

const Logo = () => {
  return <img src={logoImage} alt="BubbleMovies" className={styles.logo} />;
};

export default Logo;
