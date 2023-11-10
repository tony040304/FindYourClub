import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

const BorrarPostulacion = () => {
    const [PostulacionID, setPostulacionID] = useState('');
    const [Postulacion, setPostulacion] = useState(null);
    const [loading, setLoading] = useState(false);

  const fetchUser = () => {
    setLoading(true);

    fetch(`https://localhost:7102/api/Admin/BorrarEquipo/${PostulacionID}`)
      .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((userData) => {
        setPostulacion(userData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Hubo un error al obtener los datos del usuario:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (PostulacionID) {
      fetchUser();
    }
  }, [PostulacionID]);
  return (
    <div>
      <h1>Borrar equipo por ID</h1>
      <input
        type="text"
        placeholder="Ingrese el ID del usuario"
        onChange={(e) => setPostulacionID(e.target.value)}
        value={PostulacionID}
      />
      <Button onClick={fetchUser} class='btn btn-danger'>Borrar</Button>
      {loading && <p>Cargando...</p>}
      {Postulacion && (
        <div>
          <h2>Postulacion borrado correctamente</h2>        
        </div>
      )}
    </div>
  );
}



export default BorrarPostulacion