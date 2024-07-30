/* eslint-disable react/prop-types */
import {useState} from 'react'

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
  

const FirstDivitionCard = ({ Data, index }) => {
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
        const positionA = positionOrder[a.posicion] || Number.MAX_SAFE_INTEGER;
        const positionB = positionOrder[b.posicion] || Number.MAX_SAFE_INTEGER;
        return sortDirection === 'asc' ? positionA - positionB : positionB - positionA;
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
 console.log(Data)
  return (
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
                    <tr key={index}>
                      <td>{Data.nombreJugador}</td>
                      <td>{Data.posicion}</td>
                      <td>{Data.edad}</td>
                    </tr>
                </tbody>
              </table>
            </div>
  )
}

export default FirstDivitionCard