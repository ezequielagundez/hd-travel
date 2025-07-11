import React from "react";
import { Link } from 'react-router-dom';
import styles from "./VisitaArgentina.module.css";

const VisitaArgentina = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>VISITÁ ARGENTINA</h2>
      <div className={styles.separator}></div>

      <div className={styles.gallery}>
        <img src="https://images.unsplash.com/photo-1716810369959-7d7b8ecbc59c?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cataratas del Iguazú" />
        <img src="https://images.unsplash.com/photo-1686530598367-abcf2840ab50?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Ruta en el norte argentino" />
        <img src="https://images.unsplash.com/photo-1668701664163-52da7f766077?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Centro de ski en la Patagonia" />
        <img src="https://images.unsplash.com/photo-1660510337449-ad1925aefcc3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Obelisco en Buenos Aires" />
      </div>

      <Link className={styles.button} to="/argentina" >MÁS INFORMACIÓN</Link>
    </section>
  );
};

export default VisitaArgentina;
