import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DestinationsGrid.module.css';

const destinations = [
  { id: 'bariloche', name: 'Bariloche', image: 'https://www.patagoniaandina.com/wp-content/uploads/2020/05/Bariloche-postada-833x471.jpg' },
  { id: 'Mendoza', name: 'Buenos Aires', image: 'https://media.staticontent.com/media/pictures/77797799-6ce3-42b4-92b4-38d73009e47b' },
  { id: 'Salta', name: 'El Calafate', image: 'https://www.tangol.com/blog/Fotos/Galeria/el-calafate_0_202008311216560.PNG' },
 
];

function DestinationsGrid() {
  return (
    <div className={styles.grid}>
      {destinations.map((destination) => (
        <div key={destination.id} className={styles.card}>
          <img src={destination.image} alt={destination.name} />
          <h3>{destination.name}</h3>
          <Link to={`/argentina/${destination.id}`}>Ver más</Link>
        </div>
      ))}
    </div>
  );
}

export default DestinationsGrid;