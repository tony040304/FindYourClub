import React, { useState, useEffect } from 'react';

function TraerEquipoID({ render }) {
  const [equipoNombre, setEquipoNombre] = useState('');
  const [equipo, setEquipo] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchEquipo = (e) => {
    e.preventDeafult()
    setLoading(true);

    fetch(`https://localhost:7102/api/Admin/GetEquipoById/${equipoNombre}`)
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
    if (equipoNombre) {
      fetchEquipo();
    }
  }, [equipoNombre]);

  return render({ equipoNombre, equipo, loading, setEquipoNombre, fetchEquipo });
}

export default TraerEquipoID;