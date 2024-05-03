import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'universal-cookie';

const PlayerCard = ({ Data, onApply }) => {
  const [applied, setApplied] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [salary, setSalary] = useState('');
  const cookies = new Cookies();
  const token = cookies.get("tokenTeam");

  const formattedDate = new Date(Data.fechaPostulaciones).toLocaleDateString();

  const handleDelete = () => {
    let id_psotu = Data.idPostulacion;
    fetch(`https://localhost:7102/api/Equipo/BorrarPostulacion/${id_psotu}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'text/plain',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          setApplied(false);
          throw new Error('Error al responder');
        }
        setApplied(true);
        if (!applied && Data.success !== false) {
          setApplied(true);
        }
      })
      .catch((error) => {
        console.error('Hubo un error al obtener los datos:', error);
      });
  };

  const handleContract = () => {
    setShowPopup(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let id = Data.idUser;
    fetch(`https://localhost:7102/api/Equipo/CrearContrato?idUser=${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'text/plain',
        Authorization: `Bearer ${token}`, // Incluir el token JWT en el encabezado de autorización          
      },
      body: JSON.stringify({ salarioJugador: salary }) // Enviar un objeto con el salario
    })
    .then((response) => {
      if (!response.ok) {
        setApplied(false);
        console.log(response)
        throw new Error('Error al responder');
      }
      setApplied(true);
      if (!applied && Data.success !== false) {
        toast.success('Logeado satisfactoriamente', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(()=>{
          setApplied(true);
          window.location.reload();
        }, 1500)
      }
    })
    .catch((error) => {
      console.error('Hubo un error al obtener los datos:', error);
      // Puedes manejar el error aquí si es necesario
    });
    setShowPopup(false);
  };

  return (
    <div>
      <div className="card-container">
        <div className="card-content">
          <h3>Nombre jugador: {Data.nombreApellido}</h3>
          <p>Posición: {Data.posisionJugador}</p>
          <p>Fecha: {formattedDate}</p>
        </div>
        {applied ? (
          <p className='p-submit'>¡Postulación borrada!</p>
        ) : (
          <>
            <button type="cancel" onClick={handleDelete}>Borrar postulación</button>
            <button type="submit" onClick={handleContract}>Contratar jugador</button>
          </>
        )}
        
      </div>
      {showPopup && (
        <div className="popUp-container">
          <div className="popUp-containerr">
            <h2 className='popUp-h2'>Ingresa el salario del jugador ({Data.nombreApellido}) que deseas contratar:</h2>
            <form onSubmit={handleSubmit}>
              <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} />
              <button type="submit">Enviar</button>
            </form>
            <button type="cancel" onClick={() => setShowPopup(false)}>Cancelar</button>
          </div>
        </div>
      )}
      <ToastContainer/>
    </div>
  );
};

export default PlayerCard;