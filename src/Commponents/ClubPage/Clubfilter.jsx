import React, { useState } from 'react';

const ClubFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({ positionJug: '' });

  const handleFilterChange = () => {
    onFilterChange(filters);
  };
  const ClubFilter = () => {
    const [filterOpen, setFilterOpen] = useState(false);
    
    const toggleFilter = () => {
      setFilterOpen(!filterOpen);
    };

    const filterStyle = {
      left: filterOpen ? '0' : '-250px',
    };
  
  };

  return (
    <div className="filter-container" >
      <div className='hamburger-button' >
      
      </div>
      <h2 className='filter-title'>Filtrar por posición</h2>
      <select
      className='filter-select'
        value={filters.positionJug}
        onChange={(e) => setFilters({ ...filters, positionJug: e.target.value })}
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
     
      <button className='filter-button' onClick={handleFilterChange}>Aplicar Filtros</button>
    </div>
  );
};

export default ClubFilter;
