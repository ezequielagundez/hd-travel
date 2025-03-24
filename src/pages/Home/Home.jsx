import React from "react";
import styles from './Home.module.css';
import Slide from '../../components/Slider/Slider';
import ContactForm from '../../components/ContactForm/ContactForm';
import Argentina from "../Argentina/Argentina";

function Home() {
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
          <img src="https://img.static-af.com/transform/45cb9a13-b167-4842-8ea8-05d0cc7a4d04/" alt="París, Francia" />
          <h3>Destinos</h3>
          <p>La capital del arte, la moda y la cultura gastronómica.</p>
        </div>

        <div className={`${styles.destination} ${styles.specialOffer}`}>
          <img src="https://media.staticontent.com/media/pictures/1a63833d-b999-44da-95bd-6b2582792488" alt="Ofertas especiales" />
          <h3>🔥 Ofertas especiales</h3>
          <p><strong>Reserva antes de fin de mes y aprovecha esta oferta única.</strong></p>
        </div>

        <div className={styles.destination}>
          <img src="https://chavotur.com.ar/wp-content/uploads/2015/05/Cabalgata-por-Alumin%C3%A9-500x400.jpg" alt="Excursiones" />
          <h3>Excursiones</h3>
          <p>Descubre aventuras únicas en cada destino.</p>
        </div>
      </section>

      <Slide />
      <Argentina />
      <ContactForm />
    </div>
  );
}

export default Home;
