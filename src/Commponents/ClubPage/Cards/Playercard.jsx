/* eslint-disable react/prop-types */
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'universal-cookie';

const PlayerCard = ({ Data }) => {
  const [applied, setApplied] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [salarioJugador, setSalarioJugador] = useState('');
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

  const handleSubmitFirstDivition = (event) => {
    event.preventDefault();
    let id = Data.idUser;
    fetch(`https://localhost:7102/api/Equipo/CrearContratoPrimera?idUser=${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'text/plain',
        Authorization: `Bearer ${token}`, // Incluir el token JWT en el encabezado de autorización          
      },
      body: JSON.stringify({ salarioJugador: salarioJugador }) // Enviar un objeto con el salario
    })
    .then((response) => {
      if (!response.ok) {
        setApplied(false);
        throw new Error('Error al responder');
      }
      setApplied(true);
      if (response.ok) {
        toast.success('Jugador contratado satisfactoriamente', {
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
      if (!response.ok) {
        toast.error('Error al generar contrato', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    })
    .catch((error) => {
      console.error('Hubo un error al obtener los datos:', error);
      // Puedes manejar el error aquí si es necesario
    });
    setShowPopup(false);
  };

  const handleSubmitReserve = (event) => {
    event.preventDefault();
    let id = Data.idUser;
    fetch(`https://localhost:7102/api/Equipo/CrearContratoReserva?idUser=${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'text/plain',
        Authorization: `Bearer ${token}`, // Incluir el token JWT en el encabezado de autorización          
      },
      body: JSON.stringify({ salarioJugador: salarioJugador }) // Enviar un objeto con el salario
    })
    .then((response) => {
      if (!response.ok) {
        setApplied(false);
        throw new Error('Error al responder');
      }
      setApplied(true);
      if (response.ok) {
        toast.success('Jugador contratado satisfactoriamente', {
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
      if (!response.ok) {
        toast.error('Error al generar contrato', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    })
    .catch((error) => {
      console.error('Hubo un error al obtener los datos:', error);
      // Puedes manejar el error aquí si es necesario
    });
    setShowPopup(false);
  };

  const mailto = `mailto:${Data.mail}`;
  return (
    <div>
      <div className="card-container">
        <div className="card-content">
          <h3>Nombre jugador: {Data.nombreApellido}</h3>
          <p>Posición: {Data.posisionJugador}</p>
          <p>Fecha: {formattedDate}</p>
          <p>Mail:
          <a href={mailto} target="blank" style={{ color: "white" }}>
           {Data.mail}
          </a>
          </p>
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
              <input type="number" value={salarioJugador} onChange={(e) => setSalarioJugador(e.target.value)} /> <br />
              <button onClick={handleSubmitFirstDivition} type="submit">Contrato primera division</button> 
              <button onClick={handleSubmitReserve} type='submit'>Contrato reserva</button> <br />
            <button type="cancel" onClick={() => setShowPopup(false)}>Cancelar</button>
          </div>
        </div>
      )}
      <ToastContainer/>
    </div>
  );
};

export default PlayerCard;
