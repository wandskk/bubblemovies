import React from "react";
import { useLocation } from "react-router-dom";
import { MenuItem } from "../../types/menuItem.types";
import styles from "../../styles/NavMenuItem/NavMenuItem.module.scss";

const NavMenuItem: React.FC<MenuItem> = ({ title, label, link }) => {
  const [active, setActive] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === link) setActive(true);
  }, [location]);

  return (
    <li className={styles.navMenuItem}>
      <a
        href={link}
        title={title}
        className={`${styles.navMenuItem__link} ${
          active === true ? styles.navMenuItem__active : ""
        }`}
      >
        {label}
      </a>
    </li>
  );
};

export default NavMenuItem;
