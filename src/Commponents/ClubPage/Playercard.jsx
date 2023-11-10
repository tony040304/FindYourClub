import Players from './Dataplayers';
import { useState } from 'react'; 
const PlayerCard = ({ Players, onAccept, onReject }) => {
  


      if (!Players) {
        return null;
      }

  return (
    <div className="player-card">
      <img className='card-logo' src={Players.photo} alt='' />
      <h3>{Players.name}</h3>
      <p>Posición: {Players.positionJug}</p>
      <button onClick={() => onAccept(Players)}>Aceptar</button>
      <button onClick={() => onReject(Players)}>Rechazar</button>
    </div>
  );
};

export default PlayerCard;
