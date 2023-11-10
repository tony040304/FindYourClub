import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

const BorrarContrato = () => {
    const [ContratoId, setContratoId] = useState('');
    const [Contrato, setContrato] = useState(null);
    const [loading, setLoading] = useState(false);

  const fetchUser = () => {
    setLoading(true);

    fetch(`https://localhost:7102/api/Admin/BorrarEquipo/${ContratoId}`)
      .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((userData) => {
        setContrato(userData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Hubo un error al obtener los datos del usuario:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (ContratoId) {
      fetchUser();
    }
  }, [ContratoId]);
  return (
    <div>
      <h1>Borrar equipo por ID</h1>
      <input
        type="text"
        placeholder="Ingrese el ID del usuario"
        onChange={(e) => setContratoId(e.target.value)}
        value={ContratoId}
      />
      <Button onClick={fetchUser} class='btn btn-danger'>Borrar</Button>
      {loading && <p>Cargando...</p>}
      {Contrato && (
        <div>
          <h2>Contrato borrado correctamente</h2>        
        </div>
      )}
    </div>
  );
}



export default BorrarContrato