import { useState } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const token = cookies.get("tokenAdmin")

function TraerEquipoID({ render }) {
  const [equipoNombre, setEquipoNombre] = useState('');
  const [equipo, setEquipo] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchEquipo = () => {
    setLoading(true);

    fetch(`https://localhost:7102/api/Admin/GetEquipoByName/${equipoNombre}`,{
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
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

  

  return render({ equipoNombre, equipo, loading, setEquipoNombre, fetchEquipo });
}

export default TraerEquipoID;