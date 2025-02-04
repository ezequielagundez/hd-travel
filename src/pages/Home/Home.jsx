import React from "react";
import styles from './Home.module.css'
import Slide from '../../components/Slider/Slider'
import ContactForm from '../../components/ContactForm/ContactForm'
import Argentina  from "../Argentina/Argentina";


function Home() {
  return (
    <div className={styles.home} >

    {/* Hero Section */}

    <section className={styles.hero}>
      <div className="hero-container">
        <h1 className={styles["hero h1"]}>¡Bienvenidos a HD Travel!</h1>
        <p>Explora los destinos más increíbles con nosotros. Tu aventura comienza aquí.</p>
        
      </div>
    </section>
    
    <Slide />
    <Argentina />
    <ContactForm />
    
    </div>);
}

export default Home;