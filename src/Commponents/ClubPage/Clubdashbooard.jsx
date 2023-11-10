import  { useState } from 'react';
import PlayerCard from './Playercard';
import Players from './Dataplayers';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ClubFilter from './Clubfilter';
import Navbar from '../Navbar/Navbar';

const ClubDashboard = () => {
  const [players, setPlayers] = useState(Players);
  const [acceptedPlayers, setAcceptedPlayers] = useState([]);
  const [rejectedPlayers, setRejectedPlayers] = useState([]);
 
  const nav = useNavigate("")
  

  const goBack =()=>{
    nav("/app/ClubPage")
  }
  const [filter , setFilter] = useState({
    position: '',
    
  });
 

  //const navegarAlLogin = () => {
  //  navigate('/app/PreviusPage')
  //}

  const handleAccept = (item) => {
    setAcceptedPlayers([...acceptedPlayers, item]);
    setPlayers(players.filter((p) => p !== item));
  };

  const filteredPlayers = Players.filter((item) => {
    const positionMatch = filter.positionJug ? item.positionJug === filter.positionJug : true;
    

    return positionMatch 
  });

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleReject = (item) => {
    setRejectedPlayers([...rejectedPlayers, item]);
    setPlayers(players.filter((p) => p !== item));
  };

 



  return (
    
    <div className="App">
     <Navbar />
     <h1 className='h-post'>Postulaciones</h1>
    <ClubFilter onFilterChange={handleFilterChange} />
    <div className="club-container">
      {filteredPlayers.map((item, index) => (
        <PlayerCard key={index} Players={item} 
        onAccept={handleAccept}
        onReject={handleReject} 
        />
      ))}
    </div>
 

    <div className="club-dashboard">
    
      <div className="players">
        
        {filteredPlayers.map((Players) => (
          <PlayerCard
            key={Players.id}
            player={Players}
            onAccept={handleAccept}
            onReject={handleReject}
          />
        ))}
      </div>
      <div className="accepted-players">
        <h2>Postulaciones Aceptadas</h2>
        {acceptedPlayers.map((Players) => (
          <PlayerCard key={Players.id} Players={Players} />
        ))}
      </div>
      <div className="rejected-players">
        <h2>Postulaciones Rechazadas</h2>
        {rejectedPlayers.map((Players) => (
          <PlayerCard key={Players.id} Players={Players} />
        ))}
      </div>
</div>

      <Button onClick={goBack}>Volver a la pagina del club</Button>
    </div>
  );
};

export default ClubDashboard;
