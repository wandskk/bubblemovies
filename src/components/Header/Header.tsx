import React from "react";
import Logo from "../Logo/Logo";
import NavMenu from "../NavMenu/NavMenu";
import styles from "../../styles/Header/Header.module.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__content}`}>
        <Logo />
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;
