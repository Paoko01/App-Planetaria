import React from 'react';
import PlanetList from '../PlanetList';

const Home = () => {
  return (
    <div>
      <h1>Bienvenido al Sistema Solar</h1>
      <p>
        Explora los planetas de nuestro sistema solar y descubre información fascinante sobre cada uno de ellos.
      </p>
      <PlanetList />
    </div>
  );
};

export default Home;