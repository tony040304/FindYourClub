import React from 'react'
import { useState } from 'react';
import Cookies from 'universal-cookie';
import "../../../../index.css"
import { useNavigate } from 'react-router-dom';

const ContractCard = ({ Data }) => {
  const [applied, setApplied] = useState(false);
  const cookies = new Cookies();
  const token = cookies.get("token");
  const navigate = useNavigate()


  const handleDelete =()=>{
    let idContrato = Data.idContrato
    console.log(idContrato);
    fetch(`https://localhost:7102/api/Jugador/BorrarContrato/${idContrato}`, {
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
        setTimeout(() => {
          navigate('/app/UserPage');
        }, 1000);
      }
    })
    .catch((error) => {
      console.error('Hubo un error al obtener los datos:', error);
      // Puedes manejar el error aquí si es necesario
    });
  }

  if (!Data || Data.length === 0) {
    return <div>No hay contratos disponibles</div>;
  }

  return (
    <div>
      <div className="card-container-team">
        <div className="card-content">
          <h3>Nombre equipo: {Data.nombreEquipo}</h3>
          <p>Liga: {Data.liga}</p>
          <p>Salario: {Data.salarioJugador}</p>
          <p>Fecha: {Data.fechaContrato}</p>
        </div>
        {applied ? (
          <p>¡Contrato borrado!</p>
        ) : (
          <button type="submit" onClick={handleDelete}>Borrar contrato</button>
        )}
      </div>
    </div>
  )
}


export default ContractCard