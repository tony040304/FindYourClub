/* eslint-disable react/prop-types */

import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'universal-cookie';

const ContractCards = ({ Data }) => {
  const [applied, setApplied] = useState(false);
  const cookies = new Cookies();
  const token = cookies.get('tokenTeam');

  const handleDelete = () => {
    let id = Data.id;
    fetch(`https://localhost:7102/api/Equipo/BorrarContrato/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'text/plain',
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (!response.ok) {
        setApplied(false)
        throw new Error('Error al responder');
      }
      toast.success(("Contrato borrado"))
      setApplied(true)
      if (!applied && Data.success !== false) {
        setApplied(true);
      }
    })
    .catch((error) => {
      console.error('Hubo un error al obtener los datos:', error);
    });
  };

  const formattedDate = new Date(Data.fechaContrato).toLocaleDateString();
console.log(Data)
  return (
    <div>
      <div className="card-container">
        <div className="card-content">
          <h3>Nombre jugador: {Data.nombreApellido}</h3>
          <p>Posición: {Data.posicion}</p>
          <p>Fecha: {formattedDate}</p>
          <p>Salario jugador: ${Data.salarioJugador}</p>
          <p>Categoria: {Data.categoriaEquipo}</p>
        </div>
        {applied ? (
          <p className="p-submit">¡Contrato borrado!</p>
        ) : (
          <button type="cancel" onClick={handleDelete}>
            Borrar contrato
          </button>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContractCards