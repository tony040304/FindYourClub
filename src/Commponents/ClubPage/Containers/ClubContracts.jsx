import React, { useState, useEffect } from 'react';
import Navbar from '../../Navbar/Navbar';
import ClubFilter from '../Clubfilter';
import Contratos from '../Get/Contratos';
import ContractCards from '../Cards/ContractCards';

export const ClubContracts = () => {
  const [filters, setFilters] = useState({
    position: ''
  });
  const [appliedClubs, setAppliedClubs] = useState([]);
  const [data, setData] = useState([]);

  const handleFilterChange = (newFilters) => {
    console.log('New filters:', newFilters); // Depuración
    setFilters(newFilters);
  };

  const handleApply = (clubData) => {
    setAppliedClubs([...appliedClubs, clubData.nombreApellido]);
  };

  useEffect(() => {
    console.log('Filters:', filters); // Depuración
  }, [filters]);

  const filteredData = data.filter((item) => {
    const positionMatch = filters.position ? item.posicion === filters.position : true;
    return positionMatch && !appliedClubs.includes(item.nombreApellido);
  });

  useEffect(() => {
    console.log('Filtered Data:', filteredData); // Depuración
  }, [filteredData]);

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