import React from "react";
import styles from "./VisitaEuropa.module.css";
import { Link } from "react-router-dom";

const destinos = [
  { src: "https://travelviajes.net/images/uploads/francia-paris-museo-louvre-234.jpg", alt: "París, Francia" },
  { src: "https://travelviajes.net/images/uploads/francia-paris-museo-louvre-234.jpg", alt: "Roma, Italia" },
  { src: "https://travelviajes.net/images/uploads/francia-paris-museo-louvre-234.jpg", alt: "Barcelona, España" },
  { src: "https://travelviajes.net/images/uploads/francia-paris-museo-louvre-234.jpg", alt: "Ámsterdam, Países Bajos" },
  { src: "https://travelviajes.net/images/uploads/francia-paris-museo-louvre-234.jpg", alt: "Praga, República Checa" },
  { src: "https://travelviajes.net/images/uploads/francia-paris-museo-louvre-234.jpg", alt: "Atenas, Grecia" },
];

const VisitaEuropa = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>VIAJES A EUROPA</h2>
      <p className={styles.subtitle}>Explorá las ciudades más emblemáticas del viejo continente</p>

      <div className={styles.gallery}>
        {destinos.map((destino, index) => (
          <div key={index} className={styles.card}>
            <img src={destino.src} alt={destino.alt} />
            <span>{destino.alt}</span>
          </div>
        ))}
      </div>

      <Link className={styles.button} to="/europa">MÁS INFORMACIÓN</Link>
    </section>
  );
};

export default VisitaEuropa;
