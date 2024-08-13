import { useState } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const token = cookies.get("tokenAdmin")

function TraerJugadoresIDRenderProps({ render }) {
  const [userNombre, setUserNombre] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = (e) => {
    setLoading(true);
    e.preventDefault()
    fetch(`https://localhost:7102/api/Admin/GetJugadoresById/${userNombre}`,{
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then((response) => {
        if (!response.ok) {
          alert("Usuario inexistente");
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

  console.log(user)
  return render({ userNombre, user, loading, setUserNombre, fetchUser });
}

export default TraerJugadoresIDRenderProps;