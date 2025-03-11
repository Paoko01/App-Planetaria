import React from 'react';
import { Link } from 'react-router-dom';
import viaLactea from '../../assets/images/vialactea.jpg';

const About = () => {
  return (
    <div>
      <h1>Acerca de esta Aplicación</h1>
      <img src={viaLactea} alt="Vista Panorámica Vía Láctea" />
      <p>
        Esta aplicación fue creada para explorar y aprender sobre los planetas de nuestro sistema solar.
      </p>
      <p>
        Utilizamos la API de Wikipedia para obtener información sobre los planetas y mostrarla de forma clara y concisa.
      </p>
      <p>
        ¡Esperamos que disfrutes explorando el sistema solar con nosotros!
      </p>
      <Link to="/planetlist">Ver la lista de planetas</Link>
    </div>
  );
};

export default About;
