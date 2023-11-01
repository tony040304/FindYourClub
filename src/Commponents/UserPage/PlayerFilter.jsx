import  { useState } from 'react';
import './playerfilter.css'
const PlayerFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({ position: '', league: '' });

  const handleFilterChange = () => {
    onFilterChange(filters);
  };

  return (
    <div className="filte-container">
      <div className='hamburger-button'></div>
      <h2 className='filter-title'>Filters</h2>
      <select
        className='filter-select'
        value={filters.position}
        onChange={(e) => setFilters({ ...filters, position: e.target.value })}
      >
        <option value="">Position</option>
        <option value="DFC">DFC</option>
        <option value="LD">LD</option>
        <option value="LI">LI</option>
        <option value="MC">MC</option>
        <option value="MCD">MCD</option>
        <option value="MCO">MCO</option>
        <option value="EI">EI</option>
        <option value="ED">ED</option>
        <option value="DC">DC</option>
      </select>
      <select
      className='filter-select'
        value={filters.league}
        onChange={(e) => setFilters({ ...filters, league: e.target.value })}
      >
        <option value="">League</option>
        <option value="Liga Caniadiense de Futbol">Liga Caniadiense De Futbol</option>
        <option value="Liga Rosarina Profesional">Liga Rosarina Profesional</option>
      </select>
      <button className='filter-button' onClick={handleFilterChange}>Aplicar Filtros</button>
      
    </div>
  );
};

export default PlayerFilter;
