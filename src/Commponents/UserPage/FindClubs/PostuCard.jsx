import { useState } from "react";
import "../../../index.css"

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
      <h3>Nombre equipo: {Data.nombre}</h3>
      <p>Liga: {Data.liga}</p>
      <p>Posición: {Data.posicion}</p>
      <p>Fecha: {Data.fechaPostulaciones}</p>
      <p>Id: {Data.id}</p>
    </div>
    </div>

  );
};

export default ClubCard;