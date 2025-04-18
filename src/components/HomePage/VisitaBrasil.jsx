import React from "react";
import styles from "./VisitaBrasil.module.css";
import { Link } from "react-router-dom";

const destinos = [
  { src: "https://media.urgente24.com/p/ed128c19791c8aafd3d47d9a3f0ad3e2/adjuntos/319/imagenes/002/937/0002937944/brasiljpg.jpg", alt: "Río de Janeiro" },
  { src: "https://media.urgente24.com/p/ed128c19791c8aafd3d47d9a3f0ad3e2/adjuntos/319/imagenes/002/937/0002937944/brasiljpg.jpg", alt: "Salvador de Bahía" },
  { src: "https://media.urgente24.com/p/ed128c19791c8aafd3d47d9a3f0ad3e2/adjuntos/319/imagenes/002/937/0002937944/brasiljpg.jpg", alt: "Amazonas" },
  { src: "https://media.urgente24.com/p/ed128c19791c8aafd3d47d9a3f0ad3e2/adjuntos/319/imagenes/002/937/0002937944/brasiljpg.jpg", alt: "Pantanal" },

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
