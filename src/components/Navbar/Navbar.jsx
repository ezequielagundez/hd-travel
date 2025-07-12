import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/1.png';
import styles from "./Navbar.module.css";

function Navbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link to="/" onClick={closeMobileMenu}>
          <img
            height="50px"
            width="50px"
            src={logo}
            alt="Logo"
            className={styles.logo}
          />
          <span className={styles.brandName}></span>
        </Link>
      </div>

      {/* Links para desktop */}
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
                <li><Link to="/argentina">Argentina</Link></li>
                <li><Link to="/brasil">Brasil</Link></li>
                <li><Link to="/caribe">Caribe</Link></li>
                <li><Link to="/europa">Europa</Link></li>
                <li><Link to="/exoticos">Exóticos</Link></li>
              </ul>
            </div>
          )}
        </li>
        <li className={styles.nav_li}>
          <Link to="/about">Nosotros</Link>
        </li>

      </ul>

      <div className={styles.authButtons}>
        <Link to="/signup" className={styles.signUp}>Contacto</Link>
      </div>

      {/* Ícono hamburguesa para móvil */}
      <div className={styles.hamburger} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Menú móvil desplegable */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            <li><Link to="/" onClick={closeMobileMenu}>Inicio</Link></li>
            <li>
              <span>Destinos</span>
              <ul>
                <li><Link to="/argentina" onClick={closeMobileMenu}>Argentina</Link></li>
                <li><Link to="/brasil" onClick={closeMobileMenu}>Brasil</Link></li>
                <li><Link to="/caribe" onClick={closeMobileMenu}>Caribe</Link></li>
                <li><Link to="/europa" onClick={closeMobileMenu}>Europa</Link></li>
                <li><Link to="/exoticos" onClick={closeMobileMenu}>Exóticos</Link></li>
              </ul>
            </li>
            <li><Link to="/about" onClick={closeMobileMenu}>Nosotros</Link></li>
          </ul>
          <Link to="/signup" className={styles.signUp} onClick={closeMobileMenu}>Contacto</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
