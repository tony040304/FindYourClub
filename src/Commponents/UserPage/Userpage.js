import  { useState } from 'react';

import PlayerFilter from './PlayerFilter';
import Clubcard from '../UserPage./ClubCard.js';
import Data from './Data'; 

function Userpage()   {
  const [filters, setFilters] = useState({
    position: '',
    league: '',
  });
  const [appliedClubs, setAppliedClubs] = useState([]);


  const filteredData = Data.filter((item) => {
    const positionMatch = filters.position ? item.position === filters.position : true;
    const leagueMatch = filters.league ? item.league === filters.league : true;

    return positionMatch && leagueMatch && !appliedClubs.includes(item.clubName);
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleApply = (clubData) => {
    setAppliedClubs([...appliedClubs, clubData.clubName]);
  };


  return (
    <div className="App">
      <PlayerFilter onFilterChange={handleFilterChange} />
      <div className="cards-container">
        {filteredData.map((item, index) => (
          <Clubcard key={index} Data={item} onApply={handleApply} />
        ))}
      </div>
    </div>
  );
}

export default Userpage;

