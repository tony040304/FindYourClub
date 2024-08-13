/* eslint-disable react/prop-types */
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "../../../../index.css"
import Cookies from 'universal-cookie';


const ClubCard = ({ Data, onApply }) => {
  const [applied, setApplied] = useState(false);

  const cookies = new Cookies();
  const token = cookies.get("token");

  const handleApply = () => {
    if (applied) return; // Si ya se postuló, no hacer nada

    let nombre = Data.nombre;
    fetch('https://localhost:7102/api/Jugador/CrearPostulacionJugador', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'text/plain',
        Authorization: `Bearer ${token}`,          
      },
      body: JSON.stringify({ nombre: nombre })
    })
    .then((response) => {
      if (!response.ok) {
        setApplied(false);
        throw new Error('Error al responder');
      }

      toast.success('Te has postulado!!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setApplied(true); // Desactivar el botón después de postularse

      if (!applied && Data.success !== false) {
        setTimeout(() => {
          onApply(Data);
          setApplied(true);
        }, 3000);
      }
    })
    .catch((error) => {
      console.error('Hubo un error al obtener los datos:', error);
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
        <button 
          className='card-button' 
          onClick={handleApply} 
          disabled={applied} // Deshabilitar el botón si ya se ha postulado
        >
          {applied ? "Postulado" : "Postularse"}
        </button>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default ClubCard;
