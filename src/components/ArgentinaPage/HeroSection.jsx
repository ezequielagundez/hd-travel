import React from 'react';
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <div className={styles.hero}>
      <h1>Descubre Argentina</h1>
      <p>
        Argentina es un país lleno de maravillas naturales y culturales. Desde las cataratas del Iguazú hasta la Patagonia, 
        hay algo para todos los viajeros.
      </p>
    </div>
  );
}

export default HeroSection;