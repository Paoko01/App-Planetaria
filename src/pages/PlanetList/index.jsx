import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ActionAreaCard from '../../components/ActionAreaCard';

const PlanetList = () => {
    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchPlanets = async () => {
        setLoading(true);
        try {
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
          const planetData = await Promise.all(
            planetNames.map(async (nombre) => {
              const response = await axios.get(
                `https://es.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${nombre}&exintro=1`
              );
              const pageId = Object.keys(response.data.query.pages)[0];
              return {
                nombre,
                descripcion: response.data.query.pages[pageId].extract,
                imagen: `url_de_la_imagen_${nombre.toLowerCase()}`, // Reemplaza con la lógica para obtener la imagen
              };
            })
          );
          setPlanets(planetData);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching planets:', error);
          setLoading(false);
        }
      };
      fetchPlanets();
    }, []);
  
    if (loading) {
      return <div>Cargando...</div>;
    }
  
    return (
      <div className="planet-list">
        {planets.map((planet) => (
          <ActionAreaCard
            key={planet.nombre}
            nombre={planet.nombre}
            imagen={planet.imagen}
            descripcion={planet.descripcion}
          />
        ))}
      </div>
    );
  };
  
  export default PlanetList;