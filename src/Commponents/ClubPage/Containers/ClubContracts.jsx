import React, { useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import ClubFilter from '../Clubfilter';
import Contratos from '../Get/Contratos';
import ContractCards from '../Cards/ContractCards';

export const ClubContracts = () => {
  const [filters, setFilters] = useState({
    position: '',
    categoriaEquipo: ''
  });
  const [appliedClubs, setAppliedClubs] = useState([]);
  const [data, setData] = useState([]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleApply = (clubData) => {
    setAppliedClubs([...appliedClubs, clubData.nombreApellido]);
  };


  const filteredData = data.filter((item) => {
    const positionMatch = filters.position ? item.posicion === filters.position : true;
    const categoriaMatch = filters.categoriaEquipo ? item.categoriaEquipo === filters.categoriaEquipo : true
    return positionMatch && categoriaMatch && !appliedClubs.includes(item.nombreApellido);
  });

  return (
    <div>
      <Navbar />
      <ClubFilter onFilterChange={handleFilterChange} />
      <Contratos
        setData={setData} // Pasar la función setData para actualizar los datos del fetch
        render={() => (
          <div>
            {data.length === 0 ? (
              <div className="card-container-team">
                <div className="card-content">
                  <h3>No te has postulado a ningun equipo...</h3>
                </div>
              </div>
            ) : (
              <ul className='ul-card'>
                {filteredData.map((item, index) => (
                  <ContractCards
                    key={index}
                    Data={item}
                    onApply={handleApply}
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