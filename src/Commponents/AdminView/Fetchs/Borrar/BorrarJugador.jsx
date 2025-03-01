import { useState } from 'react'
import { Button } from 'react-bootstrap';

const TraerJugadoresID = () => {
    const [UsuarioId, setUserId] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = () => {
    setLoading(true);

    fetch(`https://localhost:7102/api/Admin/BorrarJugador/${UsuarioId}`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
      },
      })
      .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        alert("Borrado correctamente")
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
    </div>
  );
}



export default TraerJugadoresID