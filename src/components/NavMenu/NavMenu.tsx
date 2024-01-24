import React from "react";
import NavMenuItem from "../NavMenuItem/NavMenuItem";
import { menuItems } from "../../resources/utils/menuItems";
import { MenuItem } from "../../types/menuItem.types";
import { MdOutlineMenu } from "react-icons/md";
import styles from "../../styles/NavMenu/NavMenu.module.scss";

const NavMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMobileMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navMenu}>
      <div className={styles.navMenu__toggle} onClick={toggleMobileMenu}>
        <MdOutlineMenu />
      </div>
      <ul
        className={`${styles.navMenu__list} ${
          isOpen ? styles["navMenu__list--showMobile"] : ""
        }`}
      >
        {menuItems.map((item: MenuItem, index: number) => (
          <NavMenuItem
            key={index}
            title={item.title}
            label={item.label}
            link={item.link}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
