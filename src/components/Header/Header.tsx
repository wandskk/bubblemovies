import React from "react";
import Logo from "../Logo/Logo";
import styles from "../../styles/Header/Header.module.scss";
import SearchBar from "../SearchBar/SearchBar";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__content}`}>
        <Logo />
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
