import React from 'react';
import styles from './HeroSection.module.css';

function HeroSection({lugar,descripcion}) {
  return (
    <div className={styles.hero}>
      <h1>{lugar}</h1>
      <p>
        {descripcion}
      </p>
    </div>
  );
}

export default HeroSection;