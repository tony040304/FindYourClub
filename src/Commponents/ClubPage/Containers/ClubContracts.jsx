import React from 'react'
import Navbar from '../../Navbar/Navbar';
import ClubFilter from '../Clubfilter';
import Contratos from '../Get/Contratos';
import ContractCards from '../Cards/ContractCards';
import { useState } from 'react';

export const ClubContracts = () => {
  const [acceptedPlayers, setAcceptedPlayers] = useState([]);
  const [filter, setFilter] = useState({});
  const [data, setData] = useState([]);


  const handleAccept = (item) => {
    setAcceptedPlayers([...acceptedPlayers, item.nombreApellido]);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredPlayers = data.filter((item) => {
    const positionMatch = filter.posisionJugador ? item.posisionJugador === filter.posisionJugador : true;
    return positionMatch && !acceptedPlayers.includes(item.nombreApellido);
  });

  return (
    <div>
        <Navbar/>
        <ClubFilter onFilterChange={handleFilterChange} onApply={handleAccept}/>
        <Contratos
            setData={setData}
            render={()=>(
                <div>
                    {data.length === 0 ? (
              <div className="card-container-team">
              <div className="card-content">
                <h3>Ningun jugador tiene contrato con tu equipo...</h3>
              </div>
            </div>
            ) : (
              <ul>
                {filteredPlayers.map((item, index) => (
                  <ContractCards
                    key={index}
                    Data={item}
                    onApply={handleAccept}
                  />
                ))}
              </ul>
            )}
                </div>
            )}
        />
    </div>
  )
}
