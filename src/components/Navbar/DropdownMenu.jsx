import React, { useState } from "react";
import styles from "./DropdownMenu.module.css"; // Crear un archivo CSS para estilos

const DropdownMenu = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  return (
    <div
      className={styles.menuContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={styles.menuTitle}>Destinos</span>
      {isDropdownVisible && (
        <div className={styles.dropdown}>
          <ul>
            <li>Argentina</li>
            <li>Brasil</li>
            <li>Caribe</li>
            <li>Europa</li>
            <li>Exóticos</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
