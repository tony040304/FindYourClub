import { useState } from 'react';
import PlayerCard from '../Cards/Playercard';
import ClubFilter from '../Clubfilter';
import Navbar from '../../Navbar/Navbar';
import Postulaciones from '../Get/Postulaciones';

const ClubDashboard = () => {
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
      <Navbar />
      <ClubFilter onFilterChange={handleFilterChange} onApply={handleAccept}/>
      <Postulaciones
        setData={setData} // Pasar la función setData para actualizar los datos del fetch
        render={() => (
          <div>
            {data.length === 0 ? (
              <div className="card-container-team">
              <div className="card-content">
                <h3>Ningun jugador se postulo a tu equipo...</h3>
              </div>
            </div>
            ) : (
              <ul className='ul-card'>
                {filteredPlayers.map((item, index) => (
                  <PlayerCard
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
  );
};

export default ClubDashboard;
