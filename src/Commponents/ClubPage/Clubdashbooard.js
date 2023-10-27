import  { useState } from 'react';
import PlayerCard from './Playercard';
import data from '../data/players';

const ClubDashboard = () => {
  const [players, setPlayers] = useState(data);
  const [acceptedPlayers, setAcceptedPlayers] = useState([]);
  const [rejectedPlayers, setRejectedPlayers] = useState([]);
  const [filterPosition, setFilterPosition] = useState('');

  const handleAccept = (player) => {
    setAcceptedPlayers([...acceptedPlayers, player]);
    setPlayers(players.filter((p) => p !== player));
  };

  const handleReject = (player) => {
    setRejectedPlayers([...rejectedPlayers, player]);
    setPlayers(players.filter((p) => p !== player));
  };

  const filteredPlayers = filterPosition
    ? players.filter((player) => player.position === filterPosition)
    : players;

  return (
    <div className="club-dashboard">
      <h1>Mis Postulaciones</h1>
      <div className="filter">
        <select
          value={filterPosition}
          onChange={(e) => setFilterPosition(e.target.value)}
        >
          <option value="">Filtrar por posición</option>
          <option value="DFC">DFC</option>
          <option value="LD">LD</option>
          {/* Agrega más opciones de posición aquí */}
        </select>
      </div>
      <div className="players">
        <h2>Postulaciones Pendientes</h2>
        {filteredPlayers.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            onAccept={handleAccept}
            onReject={handleReject}
          />
        ))}
      </div>
      <div className="accepted-players">
        <h2>Postulaciones Aceptadas</h2>
        {acceptedPlayers.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
      <div className="rejected-players">
        <h2>Postulaciones Rechazadas</h2>
        {rejectedPlayers.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default ClubDashboard;
