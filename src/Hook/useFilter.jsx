import { useState } from 'react'

const useFilter = ({ data }) => {
  const [filters, setFilters] = useState({
      position: '',
      league: '',
  });
  const [appliedClubs, setAppliedClubs] = useState([]);
  
  const filteredData = data.filter((item) => {
      const positionMatch = filters.position 
          ? item.posiciónRequerida.split(',').includes(filters.position) 
          : true;
      const leagueMatch = filters.league ? item.liga === filters.league : true;
    
      return positionMatch && leagueMatch && !appliedClubs.includes(item.nombre);
  });

  const handleFilterChange = (newFilters) => {
      setFilters(newFilters);
  };

  const handleApply = (clubData) => {
      setAppliedClubs([...appliedClubs, clubData.nombre]);
  };

  return [filters, filteredData, handleFilterChange, handleApply];
}

export default useFilter;
