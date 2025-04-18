import React from "react";
import { Link } from 'react-router-dom';
import styles from "./VisitaArgentina.module.css";

const VisitaArgentina = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>VISITÁ ARGENTINA</h2>
      <div className={styles.separator}></div>

      <div className={styles.gallery}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfl22lwQ2t3ga4R5EGYz8ljbwGJy2DhirfZw&s" alt="Cataratas del Iguazú" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfl22lwQ2t3ga4R5EGYz8ljbwGJy2DhirfZw&s" alt="Ruta en el norte argentino" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfl22lwQ2t3ga4R5EGYz8ljbwGJy2DhirfZw&s" alt="Centro de ski en la Patagonia" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfl22lwQ2t3ga4R5EGYz8ljbwGJy2DhirfZw&s" alt="Obelisco en Buenos Aires" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfl22lwQ2t3ga4R5EGYz8ljbwGJy2DhirfZw&s" alt="Ballena en el sur" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfl22lwQ2t3ga4R5EGYz8ljbwGJy2DhirfZw&s" alt="Viñedos en Mendoza" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfl22lwQ2t3ga4R5EGYz8ljbwGJy2DhirfZw&s" alt="Paisaje de Salta" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfl22lwQ2t3ga4R5EGYz8ljbwGJy2DhirfZw&s" alt="Ushuaia - Fin del Mundo" />
      </div>

      <Link className={styles.button} to="/argentina" >MÁS INFORMACIÓN</Link>
    </section>
  );
};

export default VisitaArgentina;
