import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlanetList from './pages/PlanetList';
import PlanetInfo from './components/PlanetInfo.jsx';
import Cargando from './components/Cargando.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import Home from './pages/home/Home.jsx';
import About from './pages/About/About.jsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';

export const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planetas" element={<PlanetList />} />
          <Route path="/planeta/:nombre" element={<PlanetInfo />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<div>Página no encontrada</div>} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
};