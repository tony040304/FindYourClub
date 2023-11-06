import React from 'react';

const PlayerCard = ({ player, onAccept, onReject }) => {
  return (
    <div className="player-card">
      <h3>{player.name}</h3>
      <p>Posición: {player.position}</p>
      <button onClick={() => onAccept(player)}>Aceptar</button>
      <button onClick={() => onReject(player)}>Rechazar</button>
    </div>
  );
};

export default PlayerCard;
