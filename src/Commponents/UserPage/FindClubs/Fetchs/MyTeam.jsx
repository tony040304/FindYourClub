import React, { useState, useEffect } from 'react'
import Navbar from '../../../Navbar/Navbar';
import Cookies from 'universal-cookie';
import ContractCard from '../Cards/ContractCard';

const MyTeam = () => {
    const [data, setData] = useState([]);
    const cookies = new Cookies();
    const token = cookies.get("token");
  
    useEffect(() => {
      // Llamar a la función que realiza la solicitud al backend cuando se monta el componente
      fetchData();
    }, []); // El segundo parámetro [] asegura que useEffect solo se ejecute una vez al montar el componente
  
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:7102/api/Jugador/MiEquipo', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
  
        if (!response.ok) {
          throw new Error('Error al responder');
        }
  
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error('Hubo un error al obtener los datos:', error);
      }
    };
  
    return (
      <div>
        <Navbar/>
        <div>
          {data.length === 0 ? (
            <div className="card-container-team">
            <div className="card-content">
              <h3>No tienes contrato con ningun equipo...</h3>
            </div>
          </div>
          ) : (
            data.map((item, index) => (
              <ContractCard
                key={index}
                Data={item}
              />
            ))
          )}
        </div>
      </div>
    )
  }
  
  export default MyTeam;
  