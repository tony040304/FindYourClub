/* eslint-disable react/prop-types */

import {useState} from 'react'
import Cookies from 'universal-cookie';
import { ToastContainer, toast } from 'react-toastify';


const PostulacionCard = ({ Data }) => {
    const [applied, setApplied] = useState(false);
    const cookies = new Cookies();
    const token = cookies.get("tokenAdmin");

    const handleDelete = () => {
        let id = Data.id
        fetch(`https://localhost:7102/api/Admin/BorrarPostulacion/${id}`, {
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

      const formattedDate = new Date(Data.fechaPostulaciones).toLocaleDateString();

  return (
    <div>
        <div className='Admin-container'>
            <div >
                <h3>Nombre equipo: {Data.nombre}</h3>
                <p>Nombre jugador: {Data.nombreApellido}</p>
                <p>Posición jugador: {Data.posisionJugador}</p>
                <p>Liga: {Data.liga}</p>
                <p>Fecha Postulacion: {formattedDate}</p>
            </div>
            {applied ? (
          <p>Postulacion borrado!</p>
        ) : (
          <button type="cancel" onClick={handleDelete}>Borrar postulacion</button>
        )}
        </div>
        <ToastContainer/>
    </div>
  )
}

export default PostulacionCard