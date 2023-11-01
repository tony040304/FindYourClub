import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const TraerJugadoresID = () => {
    const [UsuarioId, setUserId] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = () => {
    setLoading(true);

    fetch(`http://localhost:7102/api/Admin/BorrarJugador/${UsuarioId}`)
      .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((userData) => {
        setUser(userData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Hubo un error al obtener los datos del usuario:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (UsuarioId) {
      fetchUser();
    }
  }, [UsuarioId]);
  console.log(UsuarioId)
  return (
    <div>
      <h1>Borrar jugador por ID</h1>
      <input
        type="text"
        placeholder="Ingrese el ID del usuario"
        onChange={(e) => setUserId(e.target.value)}
        value={UsuarioId}
      />
      <Button onClick={fetchUser} class='btn btn-danger'>Borrar</Button>
      {loading && <p>Cargando...</p>}
      {user && (
        <div>
          <h2>Jugador borrado correctamente</h2>        
        </div>
      )}
    </div>
  );
}



export default TraerJugadoresID