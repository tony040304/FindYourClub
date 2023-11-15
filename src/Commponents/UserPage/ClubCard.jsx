import { useState } from "react";
import "../../index.css"

const ClubCard = ({ Data, onApply }) => {
  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    if (!applied) {
      onApply(Data);
      setApplied(true);
    }
  };


  return (
    <div className="card-container">
    <div className="card-content">
      <h3>Nombre: {Data.nombre}</h3>
      <p>Posición Requerida: {Data.posicionRequerida}</p>
      <p>Liga: {Data.liga}</p>
      <p>Descripción: {Data.descripcion}</p>
    </div>
    {applied ? (
        <p>¡Postulación enviada!</p>
      ) : (
        <button className='card-button' onClick={handleApply}>Postularse</button>
      )}
    </div>

  );
};

export default ClubCard;
