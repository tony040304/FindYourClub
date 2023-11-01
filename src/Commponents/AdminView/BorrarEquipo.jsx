import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const BorrarEquipo = () => {
    const [EquipoId, setEquipoId] = useState('');
    const [equipo, setEquipo] = useState(null);
    const [loading, setLoading] = useState(false);

  const fetchUser = () => {
    setLoading(true);

    fetch(`https://localhost:7102/api/Admin/BorrarEquipo/${EquipoId}`)
      .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((userData) => {
        setEquipo(userData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Hubo un error al obtener los datos del usuario:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (EquipoId) {
      fetchUser();
    }
  }, [EquipoId]);
  return (
    <div>
      <h1>Borrar equipo por ID</h1>
      <input
        type="text"
        placeholder="Ingrese el ID del usuario"
        onChange={(e) => setEquipoId(e.target.value)}
        value={EquipoId}
      />
      <Button onClick={fetchUser} class='btn btn-danger'>Borrar</Button>
      {loading && <p>Cargando...</p>}
      {equipo && (
        <div>
          <h2>Equipo borrado correctamente</h2>        
        </div>
      )}
    </div>
  );
}



export default BorrarEquipo