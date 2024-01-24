
import React from "react";
import NavMenuItem from "../NavMenuItem/NavMenuItem";
import { MdOutlineMenu } from "react-icons/md";

import styles from "../../styles/NavMenu/NavMenu.module.scss";

const NavMenu = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className={styles.navMenu}>
      <div className={styles.navMenu__toggle} onClick={toggleMobileMenu}>
        <MdOutlineMenu />
      </div>
      <ul
        className={`${styles.navMenu__list} ${
          isMobileMenuOpen ? styles["navMenu__list--showMobile"] : ""
        }`}
      >
        <NavMenuItem title="Go to home" label="Home" link="/" />
        <NavMenuItem
          title="Go to popular movies"
          label="Popular"
          link="/popular"
        />
        <NavMenuItem
          title="Go to top rated movies"
          label="Top Rated"
          link="/top-rated"
        />
        <NavMenuItem
          title="Go to upcoming movies"
          label="Upcoming"
          link="/upcoming"
        />
        <NavMenuItem
          title="Go to now playing movies"
          label="Now Playing"
          link="/now-playing"
        />
        <NavMenuItem
          title="Go to categories movies"
          label="Categories"
          link="/categories"
        />
      </ul>
    </nav>
  );
};

export default NavMenu;
