import React from 'react';
import { FaRegMoneyBillAlt, FaRegCalendarAlt, FaHeadset } from 'react-icons/fa';
import styles from './WhyUs.module.css';

function WhyUs() {
  return (
    <div className={styles.container}>
      <h2>¿Por qué elegirnos?</h2>
      <div className={styles.items}>
        <div className={styles.item}>
          <FaRegMoneyBillAlt className={styles.icon} />
          <p>Precios accesibles</p>
        </div>
        <div className={styles.item}>
          <FaRegCalendarAlt className={styles.icon} />
          <p>Fechas flexibles</p>
        </div>
        <div className={styles.item}>
          <FaHeadset className={styles.icon} />
          <p>Atención personalizada</p>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
