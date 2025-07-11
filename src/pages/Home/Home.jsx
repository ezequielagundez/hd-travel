import React, { useEffect, useState } from "react";
import styles from './Home.module.css';
import Slide from '../../components/Slider/Slider';
import ContactForm from '../../components/ContactForm/ContactForm';
import VisitaArgentina from "../../components/HomePage/VisitaArgentina";
import VisitaBrasil from "../../components/HomePage/VisitaBrasil";
import VisitaEuropa from "../../components/HomePage/VisitaEuropa";
import logo from '../../assets/1.png';

function Home() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 1000); // un poco más largo para disfrutar la animación
  
    return () => clearTimeout(timer);
  }, []);
  
  if (showWelcome) {
    return (
      <div className={styles.welcomeContainer}>

        <h1 className={styles.welcomeText}>BIENVENIDO A HD VIAJES</h1>
      </div>
    );
  }

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Descubre los Mejores Lugares</h1>
          <p className={styles.heroText}>
            Explora los destinos más increíbles del mundo al mejor precio. Vive la aventura de tu vida.
          </p>
        </div>
      </section>

      {/* Destinos Destacados */}
      <section className={styles.destinations}>
        <div className={styles.destination}>
          <img src="https://images.unsplash.com/photo-1704835951668-f38c06b44834?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="París, Francia" />
          <h3>¿A DÓNDE IR?</h3>
          <p>Te ofrecemos un abanico completo de experiencias turísticas: desde los destinos más clásicos hasta opciones exclusivas y fuera de lo común. Vos elegís, nosotros lo hacemos posible.</p>
        </div>
        <div className={styles.destination}>
          <img src="https://images.unsplash.com/photo-1465188035480-cf3a60801ea5?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="París, Francia" />
          <h3>CALIDAD</h3>
          <p>Nos enfocamos en cada detalle para que tu viaje sea único. Te acompañamos antes, durante y después de cada aventura, asegurando una experiencia memorable.</p>
        </div>
        <div className={styles.destination}>
          <img src="https://chavotur.com.ar/wp-content/uploads/2015/05/Cabalgata-por-Alumin%C3%A9-500x400.jpg" alt="Excursiones" />
          <h3>ACCESIBLE</h3>
          <p>Trabajamos para conseguirte las mejores opciones, al mejor precio, sin resignar calidad. Porque viajar bien también puede ser accesible.</p>
        </div>
      </section>

      <VisitaArgentina />
      <VisitaBrasil />
      <VisitaEuropa />

      {/* Slider */}
      <ContactForm />
    </div>
  );
}

export default Home;
