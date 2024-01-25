"use client";

import React from "react";
import { CSSTransition } from "react-transition-group";
import { MoviesContext } from "../../context/MoviesContext";
import styles from "../../styles/Loading/Loading.module.scss";

const Loading = () => {
  const context = React.useContext(MoviesContext);

  return (
    <CSSTransition
      in={context?.loading}
      timeout={300}
      classNames="fade"
      unmountOnExit
    >
      <div className={`${styles.loading} fade-content`}>
        <div className={styles.loading__content}></div>
        <small className={styles.loading__text}>Plase, wait.</small>
      </div>
    </CSSTransition>
  );
};

export default Loading;
