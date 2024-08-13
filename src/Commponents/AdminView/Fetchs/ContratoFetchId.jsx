import { useState } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const token = cookies.get("tokenAdmin")

function ContratoFetchId({ render }) {
  const [userClubNombre, setUserClubNombre] = useState('');
  const [userClub, setUserClub] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = (e) => {
    setLoading(true);

    if (!userClubNombre.trim()) {
      alert("Ingrese un nombre")
      return
    }else{
    e.preventDefault()
    fetch(`https://localhost:7102/api/Admin/GetContratoByName?nombre=${userClubNombre}`,{
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then((response) => {
        if (!response.ok) {
          alert("Contrato inexistente");
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((userData) => {
        if (Array.isArray(userData) && userData.length === 0) {
            alert("No se encontraron contratos con ese nombre.");
        } else {
            setUserClub(userData.length > 0 ? userData[0] : userData);
        }
        setLoading(false);
    })
      .catch((error) => {
        console.error('Hubo un error al obtener los datos del usuario:', error);
        setLoading(false);
      });
    }
  };

  return render({ userClubNombre, userClub, loading, setUserClubNombre, fetchUser });
}

export default ContratoFetchId;