/* eslint-disable react/prop-types */

import {useState} from 'react'
import Cookies from 'universal-cookie';
import { ToastContainer, toast } from 'react-toastify';

const ContratoCard = ({ Data }) => {
    const [applied, setApplied] = useState(false);
    const cookies = new Cookies();
    const token = cookies.get("tokenAdmin");


      const handleDelete = () => {
        let id = Data.id
        fetch(`https://localhost:7102/api/Admin/BorrarContrato/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'accept': 'text/plain',
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
            toast.error('Ocurrio un error: '+ error, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              })
        });
      };

      const formattedDate = new Date(Data.fechaContrato).toLocaleDateString();

  return (
    <div>
        <div className='Admin-container'>
            <div >
                <h3>Nombre equipo: {Data.nombreEquipo}</h3>
                <p>Nombre jugador: {Data.nombreApellido}</p>
                <p>Posición jugador: {Data.posicion}</p>
                <p>Liga: {Data.liga}</p>
                <p>Fecha contrato: {formattedDate}</p>
                <p>Salario jugador: {Data.salarioJugador}</p>
            </div>
            {applied ? (
          <p>Usuario borrado!</p>
        ) : (
          <button type="cancel" onClick={handleDelete}>Borrar contrato</button>
        )}
        </div>
        <ToastContainer/>
    </div>
  )
}

export default ContratoCard