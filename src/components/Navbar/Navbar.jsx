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
      <div className={styles.logoContainer}>
        <Link to="/">
          <img
            height="50px"
            width="50px"
            src={logo}
            alt="Logo"
            className={styles.logo}
          />
          <span className={styles.brandName}>HD Viajes</span>
        </Link>
      </div>
      
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
          <Link to="/about">Nosotros</Link>
        </li>
        <li className={styles.nav_li}>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
      
      <div className={styles.authButtons}>
        <Link to="/signup" className={styles.signUp}>Contacto</Link>
      </div>
    </nav>
  );
}

export default Navbar;