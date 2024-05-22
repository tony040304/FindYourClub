import { useState } from 'react';
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const ClubFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({ position: '' });
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const handleFilterChange = (e) => {
    const newFilters = { ...filters, position: e.target.value };
    setFilters(newFilters);
    console.log('Updated Filters:', newFilters); // Depuración
    onFilterChange(newFilters);
  };

  return (
    <>
      <div className={`filter-container ${isFilterVisible ? 'active' : ''}`}>
        <h2 className="filter-title">Buscar</h2>
        <select
          className="filter-select"
          value={filters.position}
          onChange={handleFilterChange}
        >
          <option value="">Posicion</option>
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
        <button className="filter-button" onClick={() => onFilterChange(filters)}>
          Aplicar Filtros
        </button>
      </div>
      <div className="hamburger-button" onClick={toggleFilterVisibility}>
        <FaArrowRightArrowLeft />
      </div>
    </>
  );
};

export default ClubFilter;
