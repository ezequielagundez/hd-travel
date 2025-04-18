import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DestinationsGrid.module.css';
import { GoogleSheetsData } from '../GoogleSheets/GoogleSheetsData';

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
        <div key={destination.name} className={styles.cardDestinations}>
          <img src={destination.images[0]} alt={destination.name} style={{ width: '100%' }} />
          <h3 className={styles.titleCardDestinations}>{destination.name}</h3>
          <Link to={`/${country.toLowerCase()}/${destination.name.toLowerCase()}`}>Ver más</Link>
          </div>
      ))}
    </div>
  );
}

export default DestinationsGrid;

