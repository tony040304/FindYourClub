import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import PlayerFilter from './PlayerFilter.jsx';
import ClubCard from './ClubCard.jsx';

function Userpage() {
  const [filters, setFilters] = useState({
    position: '',
    league: '',
  });
  const [appliedClubs, setAppliedClubs] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Llamar a la función que realiza la solicitud al backend cuando se monta el componente
    fetchData();
  }, []); // El segundo parámetro [] asegura que useEffect solo se ejecute una vez al montar el componente

  const fetchData = async () => {
    try {
      const response = await fetch('https://localhost:7102/api/Jugador/GetListaEquipoXJugadores');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Hubo un error al obtener los datos del servidor:', error);
    }
  };
  console.log(data)
  const filteredData = data.filter((item) => {
    const positionMatch = filters.position ? item.posiciónRequerida === filters.position : true;
    const leagueMatch = filters.league ? item.liga === filters.league : true;
  
    return positionMatch && leagueMatch && !appliedClubs.includes(item.nombre);
  });
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleApply = (clubData) => {
    setAppliedClubs([...appliedClubs, clubData.clubName]);
  };

  return (
    <div className="App">
      <Navbar />
      <PlayerFilter onFilterChange={handleFilterChange} />
      <div className="cards-container">
        {filteredData.map((item, index) => (
          <ClubCard
          key={index}
          Data={item}
          onApply={handleApply}
        />
        ))}
      </div>
    </div>
  );
}

export default Userpage;
