// GoogleSheetsData.js

import React, { useState, useEffect } from 'react';

// Configuración de Google Sheets
const SHEET_ID = '1bMaSp5lT4BgVdsvM8Nc2dfGvh1ztrfBs3YDjO1QFt6o';
const API_KEY = 'AIzaSyDQ7y7x-T54IXD2N5ya9E_OCfSUJMa1FqE';
const RANGE = 'A2:K'; // Rango de datos

// Función para obtener destinos de Google Sheets
export const GoogleSheetsData = () => {
  const [destinations, setDestinations] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
      try {
        const response = await fetch(url);
        const data = await response.json();

        // Procesamos los datos de la hoja de Google Sheets
        const destinationsData = {};
        data.values.forEach(([id, name, description, images, price,city,province,country,duration_days,transport,availability]) => {
          destinationsData[id] = {
            name,
            description,
            images: images.split(',').map((img) => img.trim()), // Convertir a array de imágenes
            price: parseFloat(price),
            city,
            province,
            country,
            duration_days,
            transport,
            availability // Convertir a número
          };
        });

        setDestinations(destinationsData);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener datos de Google Sheets:', error);
        setError('No se pudieron cargar los destinos');
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  return {
    destinations,
    loading,
    error,
  };
};
