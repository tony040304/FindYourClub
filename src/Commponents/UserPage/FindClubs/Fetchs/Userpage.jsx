import React, { useState, useEffect } from 'react';
import Navbar from '../../../Navbar/Navbar.jsx';
import PlayerFilter from '../PlayerFilter.jsx';
import ClubCard from '../Cards/ClubCard.jsx';
import Cookies from 'universal-cookie';

const Userpage=()=> {
  const [filters, setFilters] = useState({
    position: '',
    league: '',
  });
  const [appliedClubs, setAppliedClubs] = useState([]);
  const [data, setData] = useState([]);
  const cookies = new Cookies();
  const token = cookies.get("token")
  useEffect(() => {
    // Llamar a la función que realiza la solicitud al backend cuando se monta el componente
    fetchData();
  }, []); // El segundo parámetro [] asegura que useEffect solo se ejecute una vez al montar el componente

  const fetchData = async () => {
    try {
      const response = await fetch('https://localhost:7102/api/Jugador/ListaEquipo', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`, // Incluir el token JWT en el encabezado de autorización
        },
      });
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
      <PlayerFilter onFilterChange={handleFilterChange} onApply={handleApply} />
      <div>
        {data.length === 0 ? (
          <div className="card-container-team">
          <div className="card-content">
            <h3>No hay equipos que requieran postulaciones...</h3>
          </div>
        </div>
        ) : (
          <div className="cards-container">
        {filteredData.map((item, index) => (
          <ClubCard
          key={index}
          Data={item}/>
        ))}
      </div>
        )}
      </div>
    </div>
  );
}

export default Userpage;
