import { useState } from "react";
import Cookies from 'universal-cookie';


const ClubCard = ({ Data, onApply }) => {
  const [applied, setApplied] = useState(false);
  const cookies = new Cookies();
  const token = cookies.get("token");

  const formattedDate = new Date(Data.fechaPostulaciones).toLocaleDateString();

  const handleDelete =()=>{
    let id_psotu = Data.id
    fetch(`https://localhost:7102/api/Jugador/BorrarPostulacion/(id)?id=${id_psotu}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'text/plain',
        Authorization: `Bearer ${token}`, // Incluir el token JWT en el encabezado de autorización          
      },

    })
    .then((response) => {
      if (!response.ok) {
        setApplied(false)
        throw new Error('Error al responder');
      }
      setApplied(true)
      if (!applied && Data.success !== false) {
        setApplied(true);
      }
    })
    .catch((error) => {
      console.error('Hubo un error al obtener los datos:', error);
      // Puedes manejar el error aquí si es necesario
    });
  }


  return (
    <div>
      <div className="card-container">
        <div className="card-content">
          <h3>Nombre equipo: {Data.nombre}</h3>
          <p>Liga: {Data.liga}</p>
          <p>Posición: {Data.posiciónRequerida}</p>
          <p>Fecha: {formattedDate}</p>
          <p>Id: {Data.id}</p>
        </div>
        {applied ? (
          <p>¡Postulación borrada!</p>
        ) : (
          <button type="submit" onClick={handleDelete}>Borrar postulacion</button>
        )}
      </div>
    </div>
  );
};

export default ClubCard;