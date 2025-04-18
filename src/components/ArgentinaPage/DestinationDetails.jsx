import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { GoogleSheetsData } from '../GoogleSheets/GoogleSheetsData';
import { FaMapMarkerAlt, FaClock, FaBus, FaGlobe } from 'react-icons/fa';
import MetodosDePago from "../MetodoDePago/PaymentMethods";
import styles from './DestinationDetails.module.css';

function DestinationDetails() {
  const { country, destinationId } = useParams(); // Captura el país y el id del destino desde la URL
  const { destinations, loading, error } = GoogleSheetsData(country); // Llama a Google Sheets con el país dinámico
  const [selectedImage, setSelectedImage] = useState(0);

  if (loading) return <h2 className={styles.loading}>Cargando...</h2>;
  if (error) return <h2 className={styles.error}>{error}</h2>;

  // Busca el destino seleccionado en los datos obtenidos
  const destination = destinations[destinationId];
  if (!destination) return <h2 className={styles.error}>Destino no encontrado</h2>;

  return (
    <div>
      <div className={styles.container}>
        {/* Sección de imagen destacada */}
        <div className={styles.carouselContainer}>
          <img src={destination.images[selectedImage]} alt="Destino" className={styles.mainImage} />
          <div className={styles.thumbnailContainer}>
            {destination.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Imagen ${index + 1}`}
                className={`${styles.thumbnail} ${index === selectedImage ? styles.activeThumbnail : ''}`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        {/* Tarjeta de información */}
        <div className={styles.card}>
          <h1 className={styles.title}>{destination.name}</h1>
          <p className={styles.description}>{destination.description}</p>

          <div className={styles.infoGrid}>
            <div className={styles.infoItem}><FaMapMarkerAlt className={styles.icon} /> <span>Ciudad:</span> {destination.city}</div>
            <div className={styles.infoItem}><FaGlobe className={styles.icon} /> <span>País:</span> {destination.country}</div>
            <div className={styles.infoItem}><FaClock className={styles.icon} /> <span>Duración:</span> {destination.duration_days} días</div>
            <div className={styles.infoItem}><FaBus className={styles.icon} /> <span>Transporte:</span> {destination.transport}</div>
            <div className={styles.infoItem}><strong>Disponibilidad:</strong> {destination.availability ? 'Disponible' : 'No disponible'}</div>
          </div>

          <p className={styles.price}> Precio: <span>${destination.price}</span></p>
          <button className={styles.button}>Reservar ahora</button>
        </div>
      </div>
      <MetodosDePago />
    </div>
  );
}

export default DestinationDetails;
