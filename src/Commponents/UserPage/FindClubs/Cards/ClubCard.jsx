import { useState } from "react";
import "../../../../index.css"
import Cookies from 'universal-cookie';


const ClubCard = ({ Data, onApply }) => {
  const [applied, setApplied] = useState(false);
  const [nombre, setNombre] = useState('');

  const cookies = new Cookies();
  const token = cookies.get("token");

  const handleApply = () => {
    let nombre = Data.nombre
    console.log(nombre);
    fetch('https://localhost:7102/api/Jugador/CrearPostulacionJugador', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'text/plain',
        Authorization: `Bearer ${token}`, // Incluir el token JWT en el encabezado de autorización          
      },
      body: JSON.stringify({ nombre: nombre }) // Enviar un objeto con el nombre
    })
    .then((response) => {
      if (!response.ok) {
        setApplied(false)
        throw new Error('Error al responder');
      }
      setApplied(true)
      if (!applied && Data.success !== false) {
        onApply(Data);
        setApplied(true);
      }
    })
    .catch((error) => {
      console.error('Hubo un error al obtener los datos:', error);
      // Puedes manejar el error aquí si es necesario
    });
  };


  return (
    <div>
      <div className="card-container">
        <div className="card-content">
          <h3>Nombre: {Data.nombre}</h3>
          <p>Posición Requerida: {Data.posiciónRequerida}</p>
          <p>Liga: {Data.liga}</p>
          <p>Descripción: {Data.descripcion}</p>
        </div>
        {applied ? (
          <p className="p-submit">¡Postulación enviada!</p>
        ) : (
          <button className='card-button' onClick={handleApply}>Postularse</button>
        )}
      </div>
    </div>

  

  );
};

export default ClubCard;
