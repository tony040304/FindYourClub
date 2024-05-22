import React, { useState, useEffect } from 'react';
import Navbar from '../../Navbar/Navbar';
import Plantel from '../Get/Plantel';

const positionOrder = {
  'PO': 1,
  'DFC': 2,
  'DFI': 3,
  'DFD': 4,
  'MCD': 5,
  'MC': 6,
  'MI': 7,
  'MD': 8,
  'EI': 9,
  'ED': 10,
  'MCO': 11,
  'DC': 12
};

const PlantelPage = () => {
  const [data, setData] = useState([]);
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSortByName = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.nombreJugador < b.nombreJugador) {
        return sortDirection === 'asc' ? -1 : 1;
      }
      if (a.nombreJugador > b.nombreJugador) {
        return sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });

    console.log('Sorted by name:', sortedData);
    setData(sortedData);
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  const handleSortByPosition = () => {
    const sortedData = [...data].sort((a, b) => {
      const positionA = positionOrder[a.posicion] || Number.MAX_SAFE_INTEGER;
      const positionB = positionOrder[b.posicion] || Number.MAX_SAFE_INTEGER;
      return sortDirection === 'asc' ? positionA - positionB : positionB - positionA;
    });

    console.log('Sorted by position:', sortedData);
    setData(sortedData);
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  const handleSortByAge = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.edad < b.edad) {
        return sortDirection === 'asc' ? -1 : 1;
      }
      if (a.edad > b.edad) {
        return sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });

    console.log('Sorted by age:', sortedData);
    setData(sortedData);
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  useEffect(() => {
    console.log('Data updated:', data);
  }, [data]);

  return (
    <div>
      <Navbar />
      <Plantel setData={setData} render={() => (
        <div>
          {data.length === 0 ? (
            <div className="card-container-team">
              <div className="card-content">
                <h3>Ningún jugador tiene contrato con tu equipo...</h3>
              </div>
            </div>
          ) : (
            <div className="card-container-list">
              <h2>Plantel de Jugadores</h2>
              <table className='list-container'>
                <thead>
                  <tr>
                    <th onClick={handleSortByName}>Nombre</th>
                    <th onClick={handleSortByPosition}>Posición</th>
                    <th onClick={handleSortByAge}>Edad</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((jugador, index) => (
                    <tr key={index}>
                      <td>{jugador.nombreJugador}</td>
                      <td>{jugador.posicion}</td>
                      <td>{jugador.edad}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )} />
    </div>
  );
};

export default PlantelPage;
