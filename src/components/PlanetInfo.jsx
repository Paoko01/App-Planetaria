import React, { useState, useEffect } from 'react';
import Cargando from './Cargando.jsx';
import axios from 'axios';

const planetNames = [
  'Mercurio',
  'Venus',
  'Tierra',
  'Marte',
  'Júpiter',
  'Saturno',
  'Urano',
  'Neptuno',
];

const PlanetInfo = () => {
  const [planetsData, setPlanetsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlanetsData = async () => {
      setLoading(true);
      try {
        const promises = planetNames.map(async (nombre) => {
          // Obtener el extracto del planeta
          const response = await axios.get(
            '/w/api.php?action=query&format=json&prop=extracts&titles=${nombre}&exintro=1'
          );
          const pageId = Object.keys(response.data.query.pages)[0];
          const extract = response.data.query.pages[pageId].extract;

          // Obtener la URL de la imagen del planeta
          const imageResponse = await axios.get(
            `https://es.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&titles=${nombre}&pithumbsize=500`
          );
          const imagePageId = Object.keys(imageResponse.data.query.pages)[0];
          const imageUrl = imageResponse.data.query.pages[imagePageId]?.thumbnail?.source;

          return {
            nombre,
            extract,
            imageUrl,
          };
        });
        const results = await Promise.all(promises);
        setPlanetsData(results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching planets data:', error);
        setLoading(false);
      }
    };
    fetchPlanetsData();
  }, []);

  if (loading) {
    return <Cargando />;
  }

  return (
    <div>
      {planetsData.map((planet) => (
        <div key={planet.nombre}>
          <h2>{planet.nombre}</h2>
          {planet.imageUrl && (
            <img src={planet.imageUrl} alt={planet.nombre} style={{ maxWidth: '300px' }} />
          )}
          <div dangerouslySetInnerHTML={{ __html: planet.extract }} />
        </div>
      ))}
    </div>
  );
};

export default PlanetInfo;