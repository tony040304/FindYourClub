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
  

  const FirstDivitionCard = ({ data }) => {
    const [sortedData, setSortedData] = useState(data);
    const [sortDirection, setSortDirection] = useState('asc');

    const handleSortByName = () => {
      const newSortedData = [...sortedData].sort((a, b) => {
        return sortDirection === 'asc' ? a.nombreJugador.localeCompare(b.nombreJugador) : b.nombreJugador.localeCompare(a.nombreJugador);
      });
      setSortedData(newSortedData);
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    };

    const handleSortByPosition = () => {
      const newSortedData = [...sortedData].sort((a, b) => {
        const positionA = positionOrder[a.posicion] || Number.MAX_SAFE_INTEGER;
        const positionB = positionOrder[b.posicion] || Number.MAX_SAFE_INTEGER;
        return sortDirection === 'asc' ? positionA - positionB : positionB - positionA;
      });
      setSortedData(newSortedData);
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    };

    const handleSortByAge = () => {
      const newSortedData = [...sortedData].sort((a, b) => sortDirection === 'asc' ? a.edad - b.edad : b.edad - a.edad);
      setSortedData(newSortedData);
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    };

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
                    {sortedData.map((player, index) => (
                        <tr key={index}>
                            <td>{player.nombreJugador}</td>
                            <td>{player.posicion}</td>
                            <td>{player.edad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};



export default FirstDivitionCard