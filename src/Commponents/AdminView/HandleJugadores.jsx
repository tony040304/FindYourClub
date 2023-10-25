import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const HandleJugadores = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate('')


        useEffect(()=>{
            fetch('http://localhost:5222/api/Admin/GetJugadores')
            .then((response) =>{
                if(!response.ok){
                    throw new Error('Error al responder')
                }
                return response.json()
            })
            .then((data) => {
                setData(data); 
                setLoading(false); 
              })
              .catch((error) => {
                console.error('Hubo un error al obtener los datos:', error);
                setLoading(false);
              });
        }, [])

    const goBack =()=>{
      navigate('/app/adminview')
    }

  return (
    <div>
      <form action="form-login">
        <h1>Jugadore resgistrados:</h1>
            {loading ? (
            <p>Cargando...</p>
          ) : (
            <ul>
              {data.map((item) => (
              <li key={item.jugadorId}>{item.jugadorId}, {item.nombre}, {item.apellido}, {item.descripcion}, {item.posicion}</li>
              ))}
            </ul>
          )}
          <Button onClick={goBack}>Volver a la vista admin</Button>
      </form>
    </div>
  )
}

export default HandleJugadores