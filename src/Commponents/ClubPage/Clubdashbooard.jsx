import React, { useState, useEffect } from 'react';
import PlayerCard from './Playercard';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ClubFilter from './Clubfilter';
import Navbar from '../Navbar/Navbar';

const ClubDashboard = () => {
  const [players, setPlayers] = useState([]);
  const [acceptedPlayers, setAcceptedPlayers] = useState([]);
  const [rejectedPlayers, setRejectedPlayers] = useState([]);
  const [filter, setFilter] = useState({
    positionJug: '',
  });

  const nav = useNavigate('');

  useEffect(() => {
    // Realizar la solicitud GET al montar el componente
    fetchData();
  }, []); // El segundo parámetro [] asegura que useEffect solo se ejecute una vez al montar el componente

  const fetchData = async () => {
    try {
      const response = await fetch('https://localhost:7102/api/Equipo/GetPostulacionListaxEquipo');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setPlayers(jsonData);
    } catch (error) {
      console.error('Hubo un error al obtener los datos del servidor:', error);
    }
  };
  console.log(players)
  const goBack = () => {
    nav('/app/ClubPage');
  };

  const handleAccept = (item) => {
    setAcceptedPlayers([...acceptedPlayers, item]);
    setPlayers(players.filter((p) => p !== item));
  };

  const filteredPlayers = players.filter((item) => {
    const positionMatch = filter.positionJug ? item.positionJug === filter.positionJug : true;
    return positionMatch;
  });

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleReject = (item) => {
    setRejectedPlayers([...rejectedPlayers, item]);
    setPlayers(players.filter((p) => p !== item));
  };

  return (
    <div className="App">
      <Navbar />
      <h1 className="h-post">Postulaciones</h1>
      <ClubFilter onFilterChange={handleFilterChange} />
      <div className="club-container">
        {filteredPlayers.map((item, index) => (
          <PlayerCard key={index} player={item} onAccept={handleAccept} onReject={handleReject} />
        ))}
      </div>

      <div className="club-dashboard">
        <div className="players">
          {filteredPlayers.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              onAccept={handleAccept}
              onReject={handleReject}
            />
          ))}
        </div>
      </div>

      <Button className="bt-back" onClick={goBack}>
        Volver a la pagina del club
      </Button>
    </div>
  );
};

export default ClubDashboard;
