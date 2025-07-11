import React from "react";
import styles from "./VisitaBrasil.module.css";
import { Link } from "react-router-dom";

const destinos = [
  { src: "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Río de Janeiro" },
  { src: "https://images.unsplash.com/photo-1544991337-95176b5233c4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Salvador de Bahía" },
  { src: "https://images.unsplash.com/photo-1515700281303-5a0a73d9c584?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Amazonas" },
  { src: "https://images.unsplash.com/photo-1593854586136-2edae149504c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Pantanal" },

];

const VisitaBrasil = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>VISITÁ BRASIL</h2>
      <div className={styles.separator}></div>

      <div className={styles.gallery}>
        {destinos.map((destino, i) => (
          <div key={i} className={styles.card}>
            <img src={destino.src} alt={destino.alt} />
            <div className={styles.overlay}>
              <p>{destino.alt}</p>
            </div>
          </div>
        ))}
      </div>

        
      <Link className={styles.button} to="/brasil">MÁS INFORMACIÓN</Link>
    </section>
  );
};

export default VisitaBrasil;
