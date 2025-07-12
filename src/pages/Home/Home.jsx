import React, { useEffect, useState } from "react";
import styles from './Home.module.css';
import Slide from '../../components/Slider/Slider';
import ContactForm from '../../components/ContactForm/ContactForm';
import VisitaArgentina from "../../components/HomePage/VisitaArgentina";
import VisitaBrasil from "../../components/HomePage/VisitaBrasil";
import VisitaEuropa from "../../components/HomePage/VisitaEuropa";

const heroImages = [
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', // playa
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470', // montañas
  'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0', // bosque otoñal
];

function Home() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // cambia cada 5 segundos
    return () => clearInterval(interval);
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
      {/* Hero dinámico */}
      <section
        className={styles.hero}
        style={{ backgroundImage: `url(${heroImages[backgroundIndex]})` }}
      >
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Tu Próxima Aventura Empieza Acá</h1>
          <p className={styles.heroText}>
            Viajes únicos, al mejor precio y sin complicaciones.<br />
            Planeá, descubrí y viví experiencias que vas a recordar toda la vida.
          </p>
        </div>
      </section>

      {/* Cards de destinos */}
      <section className={styles.destinations}>
        <div className={styles.destination}>
          <img src="https://images.unsplash.com/photo-1704835951668-f38c06b44834?q=80&w=2080" alt="Destino 1" />
          <h3>VARIEDAD</h3>
          <p>Desde clásicos imperdibles hasta joyas escondidas. Tenemos el destino ideal para cada viajero.</p>
        </div>
        <div className={styles.destination}>
          <img src="https://images.unsplash.com/photo-1465188035480-cf3a60801ea5?q=80&w=2080" alt="Destino 2" />
          <h3>EXPERIENCIA</h3>
          <p>Nos encargamos de cada detalle. Tu única preocupación: disfrutar.</p>
        </div>
        <div className={styles.destination}>
          <img src="https://chavotur.com.ar/wp-content/uploads/2015/05/Cabalgata-por-Alumin%C3%A9-500x400.jpg" alt="Destino 3" />
          <h3>PRECIO JUSTO</h3>
          <p>Calidad, confianza y precios accesibles. Porque todos merecen viajar bien.</p>
        </div>
      </section>

      <VisitaArgentina />
      <VisitaBrasil />
      <VisitaEuropa />
      <ContactForm />
    </div>
  );
}

export default Home;
