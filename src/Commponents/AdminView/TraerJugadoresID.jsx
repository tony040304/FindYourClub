import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const TraerJugadoresID = () => {
    const [userId, setUserId] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = () => {
    setLoading(true);

    fetch(`http://localhost:5222/api/Admin/GetJugadoresById/${userId}`)
      .then((response) => {
        if (!response.ok) {
            alert("Usuario inexistente")
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
    if (userId) {
      fetchUser();
    }
  }, [userId]);

  return (
    <div>
      <h1>Buscar usuario por ID</h1>
      <input
        type="text"
        placeholder="Ingrese el ID del usuario"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={fetchUser}>Buscar</button>
      {loading && <p>Cargando...</p>}
      {user && (
        <div>
          <h2>Detalles del usuario</h2>
          <p>ID: {user.usuarioId}</p>
          <p>Nombre: {user.nombre}</p>
          <p>Apellido: {user.apellido}</p>
        </div>
      )}
    </div>
  );
}



export default TraerJugadoresID