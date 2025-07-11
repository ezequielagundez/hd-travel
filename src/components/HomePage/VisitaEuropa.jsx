import React from "react";
import styles from "./VisitaEuropa.module.css";
import { Link } from "react-router-dom";

const destinos = [
  { src: "https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "París, Francia" },
  { src: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Roma, Italia" },
  { src: "https://images.unsplash.com/photo-1589708532758-ddd0753b0f2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Barcelona, España" },
  { src: "https://images.unsplash.com/photo-1459679749680-18eb1eb37418?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Ámsterdam, Países Bajos" },
  { src: "https://images.unsplash.com/photo-1529784237789-45cc21f5705b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Praga, República Checa" },

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
