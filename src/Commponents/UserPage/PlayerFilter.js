import  { useState } from 'react';

const PlayerFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({ position: '', league: '' });

  const handleFilterChange = () => {
    onFilterChange(filters);
  };

  return (
    <div className="filter">
      <h2>Filters</h2>
      <select
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
        value={filters.league}
        onChange={(e) => setFilters({ ...filters, league: e.target.value })}
      >
        <option value="">League</option>
        <option value="Liga Caniadiense de Futbol">Liga Caniadiense De Futbol</option>
        <option value="Liga Rosarina Profesional">Liga Rosarina Profesional</option>
      </select>
      <button onClick={handleFilterChange}>Aplicar Filtros</button>
    </div>
  );
};

export default PlayerFilter;
