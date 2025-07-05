import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const handleRefresh = () => {
    setCurrentTime(new Date()); // Simula una actualización de contenido
    // Aquí es donde en el futuro se podría llamar a una función para buscar noticias
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Xisco!
        </p>
        <p>
          La fecha y hora actuales son: {currentTime.toLocaleString()}
        </p>
        <button onClick={handleRefresh}>Actualizar Contenido</button>

        <div style={{ marginTop: '20px' }}>
          <h2>Últimas Noticias</h2>
          <ul>
            <li>
              <a href="https://transporte3.com/noticia/22212-moeve-suministra-diesel-renovable-hvo100-a-south-europe-ground-services-south/" target="_blank" rel="noopener noreferrer">
                Moeve suministra diésel renovable HVO100 a South Europe Ground Services (SOUTH)
              </a>
              <p>SOUTH, empresa de servicios de asistencia en tierra, apuesta por la sostenibilidad con el uso de diésel 100% renovable.</p>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
