import  { useState } from 'react';
import PlayerCard from './Playercard';
import Data from '../UserPage/Data';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ClubDashboard = () => {
  const [players, setPlayers] = useState(Data);
  const [acceptedPlayers, setAcceptedPlayers] = useState([]);
  const [rejectedPlayers, setRejectedPlayers] = useState([]);
  const [filterPosition, setFilterPosition] = useState('');
  const nav = useNavigate("")
  const handleAccept = (players) => {
    setAcceptedPlayers([...acceptedPlayers, players]);
    setPlayers(players.filter((p) => p !== players));
  };

  const goBack =()=>{
    nav("/app/ClubPage")
  }
  const handleReject = (player) => {
    setRejectedPlayers([...rejectedPlayers, players]);
    setPlayers(players.filter((p) => p !== player));
  };

  const filteredPlayers = filterPosition
    ? players.filter((player) => player.position === filterPosition)
    : players;

  return (
    <div className="club-dashboard">
      <h1>Postulaciones</h1>
      <div className="filter">
        <select
          value={filterPosition}
          onChange={(e) => setFilterPosition(e.target.value)}
        >
          <option value="">Filtrar por posición</option>
          <option value="DFC">DFC</option>
          <option value="LD">LD</option>
          <option value ="LI">LI</option>
          <option value ="MC">MC</option>
          <option value ="MCD">MCD</option>
          <option value ="MCO">MCO</option>
          <option value ="EI">EI</option>
          <option value ="ED">ED</option>
          <option value ="DC">DC</option>
          
          {}
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
      <Button onClick={goBack}>Volver a la pagina del club</Button>
    </div>
  );
};

export default ClubDashboard;
