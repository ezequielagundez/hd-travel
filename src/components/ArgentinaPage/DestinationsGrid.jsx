import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaBus } from 'react-icons/fa';
import { GoogleSheetsData } from '../GoogleSheets/GoogleSheetsData';
import styles from './DestinationsGrid.module.css';

function DestinationsGrid({ country }) {
  const { destinations, loading, error } = GoogleSheetsData(country);

  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.spinner}></div>
        <p className={styles.loadingText}>Cargando destinos...</p>
      </div>
    );
  }

  if (error) return <h2>{error}</h2>;

  return (
    <div className={styles.contentDestinations}>
      {Object.values(destinations).map((destination) => (
        <div key={destination.name} className={styles.card}>
          <img
            src={destination.images[0]}
            alt={destination.name}
            className={styles.image}
          />
          <div className={styles.cardBody}>
            <h3 className={styles.title}>{destination.name}</h3>
            <div className={styles.info}>
              <FaClock className={styles.icon} />
              <span>{destination.duration_days} días</span>
            </div>
            <div className={styles.info}>
              <FaBus className={styles.icon} />
              <span>{destination.transport}</span>
            </div>
          </div>
          <Link
            to={`/${country.toLowerCase()}/${destination.name.toLowerCase()}`}
            className={styles.button}
          >
            Ver más
          </Link>
        </div>
      ))}
    </div>
  );
}

export default DestinationsGrid;
