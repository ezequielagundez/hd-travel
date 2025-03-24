import React from 'react';
import styles from './PaymentMethods.module.css';

const PaymentMethods = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Formas de pago</h2>
      
      <div className={styles.methodsContainer}>
        {/* Efectivo */}
        <div className={styles.methodItem}>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2331/2331920.png" 
            alt="Efectivo" 
            className={styles.methodIcon} 
          />
          <p className={styles.methodLabel}>Efectivo <sup>1</sup></p>
        </div>
        
        {/* Depósito Bancario */}
        <div className={styles.methodItem}>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/10842/10842175.png" 
            alt="Depósito Bancario" 
            className={styles.methodIcon} 
          />
          <p className={styles.methodLabel}>Depósito Bancario <sup>2</sup></p>
        </div>
        
        {/* Transferencia Bancaria */}
        <div className={styles.methodItem}>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1770/1770992.png" 
            alt="Transferencia Bancaria" 
            className={styles.methodIcon} 
          />
          <p className={styles.methodLabel}>Transferencia Bancaria</p>
        </div>
      </div>
      
      <div className={styles.footnotes}>
        <p><sup>1</sup> De acuerdo a la RG AFIP 3819, para productos internacionales, exclusivamente los pagos en efectivo serán pasibles de un 5% de percepción a cuenta de bienes personales e impuesto a las ganancias.</p>
        <p><sup>2</sup> De acuerdo a la RG AFIP 3819, para productos internacionales, los pagos en efectivo y depósitos bancarios serán pasibles de un 5% de percepción a cuenta de bienes personales e impuesto a las ganancias.</p>
      </div>
    </div>
  );
};

export default PaymentMethods;