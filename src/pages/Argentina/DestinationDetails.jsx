import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { GoogleSheetsData } from '../../components/GoogleSheets/GoogleSheetsData';
import styles from './DestinationDetails.module.css';

function DestinationDetails() {
  const { destinationId } = useParams();
  const { destinations, loading, error } = GoogleSheetsData();

  const [selectedImage, setSelectedImage] = useState(null);

  if (loading) return <h2>Cargando...</h2>;
  if (error) return <h2>{error}</h2>;

  const destination = destinations[destinationId];
  if (!destination) return <h2>Destino no encontrado</h2>;

  return (
    <div className={styles.container}>
      {/* Sección de detalles */}
      <div className={styles.details}>
        <h1 className={styles.title}>{destination.name}</h1>
        <p className={styles.description}>{destination.description}</p>
        <div className={styles.infoGrid}>
          <p><strong>Ciudad:</strong> {destination.city}</p>
          <p><strong>Provincia:</strong> {destination.province}</p>
          <p><strong>País:</strong> {destination.country}</p>
          <p><strong>Duración:</strong> {destination.duration_days} días</p>
          <p><strong>Transporte:</strong> {destination.transport}</p>
          <p><strong>Disponibilidad:</strong> {destination.availability}</p>
        </div>
        <p className={styles.price}>Precio: ${destination.price}</p>
        <button className={styles.button}>Reservar</button>
      </div>

      {/* Sección de imágenes */}
      <div className={styles.imagesContainer}>
        {destination.images.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt={`${destination.name} ${index}`} 
            className={styles.image} 
            onClick={() => setSelectedImage(img)} 
          />
        ))}
      </div>

      {/* Modal para mostrar la imagen en grande */}
      {selectedImage && (
        <div className={styles.modal} onClick={() => setSelectedImage(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Imagen ampliada" className={styles.modalImage} />
            <button className={styles.closeButton} onClick={() => setSelectedImage(null)}>×</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DestinationDetails;
