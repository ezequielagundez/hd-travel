import React from "react";
import { useParams } from "react-router-dom";

const destinationData = {
  bariloche: {
    name: "Bariloche",
    description: "Conocido por sus paisajes nevados, montañas y lagos impresionantes.",
    image: "https://example.com/bariloche.jpg",
  },
  iguazu: {
    name: "Cataratas del Iguazú",
    description: "Una de las maravillas naturales más impresionantes del mundo.",
    image: "https://example.com/iguazu.jpg",
  },
  mendoza: {
    name: "Mendoza",
    description: "Famosa por su vino y las espectaculares vistas de la Cordillera de los Andes.",
    image: "https://example.com/mendoza.jpg",
  },
  salta: {
    name: "Salta",
    description: "Conocida por su arquitectura colonial y paisajes montañosos.",
    image: "https://example.com/salta.jpg",
  },
};

function DestinationDetails() {
  const { destinationId } = useParams();
  const destination = destinationData[destinationId];

  if (!destination) {
    return <h2>Destino no encontrado</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{destination.name}</h1>
      <p>{destination.description}</p>
      <img src={destination.image} alt={destination.name} style={{ width: "100%", maxWidth: "600px" }} />
    </div>
  );
}

export default DestinationDetails;
