// DestinationsGrid.js

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DestinationsGrid.module.css'; // Importa el CSS Module
import { GoogleSheetsData } from '../GoogleSheets/GoogleSheetsData'; // Importa el componente

function DestinationsGrid() {
  const { destinations, loading, error } = GoogleSheetsData(); // Usamos el hook que devuelve los datos

  if (loading) return <h2>Cargando destinos...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className={styles.contentDestinations}>
      {Object.values(destinations).map((destination) => (
        <div key={destination.name} className={styles.cardDestinations}>
          <img src={destination.images[0]} alt={destination.name} style={{ width: '100%' }} />
          <h3 className={styles.titleCardDestinations}>{destination.name}</h3>
          <Link to={`/argentina/${destination.name.toLowerCase()}`}>Ver más</Link>
        </div>
      ))}
    </div>
  );
}

export default DestinationsGrid;
