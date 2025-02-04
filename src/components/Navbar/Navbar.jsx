import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo-hd-travel.jpeg';
import styles from "./Navbar.module.css";

function Navbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  return (
    <nav className={styles.navbar}>
      <img
        height="70px"
        width="70px"
        src={logo}
        alt="Logo"
      />
      <ul className={styles["nav-links"]}>
        <li className={styles.nav_li}>
          <Link to="/">Inicio</Link>
        </li>
        <li
          className={styles.nav_li}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span>Destinos</span>
          {isDropdownVisible && (
            <div className={styles.dropdown}>
              <ul>
                <li>
                  <Link to="/argentina">Argentina</Link>
                </li>
                <li>
                  <Link to="/brasil">Brasil</Link>
                </li>
                <li>
                  <Link to="/caribe">Caribe</Link>
                </li>
                <li>
                  <Link to="/europa">Europa</Link>
                </li>
                <li>
                  <Link to="/exoticos">Exóticos</Link>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li className={styles.nav_li}>
          <Link to="/contact">Eventos</Link>
        </li>
        <li className={styles.nav_li}>
          <Link to="/novedades">Novedades</Link>
        </li>
        <li className={styles.nav_li}>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li className={styles.nav_li}>
          <Link to="/quienes-somos">¿Quiénes somos?</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
