import React, { useState, useEffect } from 'react';

function TraerJugadoresIDRenderProps({ render }) {
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = (e) => {
    e.preventDefault()
    setLoading(true);

    fetch(`https://localhost:7102/api/Admin/GetJugadoresById/${userId}`)
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

  useEffect(() => {
    if (userId) {
      fetchUser();
    }
  }, [userId]);

  return render({ userId, user, loading, setUserId, fetchUser });
}

export default TraerJugadoresIDRenderProps;