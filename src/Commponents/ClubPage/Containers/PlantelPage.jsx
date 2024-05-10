import React, {useState} from 'react'
import Navbar from '../../Navbar/Navbar';
import Plantel from '../Get/Plantel';

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
  
      setData(sortedData);
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    };
  
    const handleSortByPosition = () => {
        const sortedData = [...data].sort((a, b) => {
          if (a.posicion < b.posicion) {
            return sortDirection === 'asc' ? -1 : 1;
          }
          if (a.posicion > b.posicion) {
            return sortDirection === 'asc' ? 1 : -1;
          }
          return 0;
        });
    
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
    
        setData(sortedData);
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
      };
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
  

export default PlantelPage