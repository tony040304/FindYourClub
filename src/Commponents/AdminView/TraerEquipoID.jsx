import React, { useState, useEffect } from 'react';

function TraerEquipoID({ render }) {
  const [equipoId, setEquipoId] = useState('');
  const [equipo, setEquipo] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchEquipo = () => {
    setLoading(true);

    fetch(`http://localhost:5222/api/Admin/GetEquipoById/${equipoId}`)
      .then((response) => {
        if (!response.ok) {
          alert("Equipo inexistente");
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((equipoData) => {
        setEquipo(equipoData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Hubo un error al obtener los datos del equipo:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (equipoId) {
      fetchEquipo();
    }
  }, [equipoId]);

  return render({ equipoId, equipo, loading, setEquipoId, fetchEquipo });
}

export default TraerEquipoID;