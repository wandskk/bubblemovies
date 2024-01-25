import React from "react";
import styles from "../../styles/Footer/Footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>BubbleMovies - Your favorite movies site</p>

      <a
        className={styles.footer__link}
        href="http://www.bolha.com.br"
        target="black"
      >
        Bolha Copyrights @ {year}
      </a>
    </footer>
  );
};

export default Footer;
