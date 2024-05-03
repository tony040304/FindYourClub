import React, { useState } from 'react';
import MyPostuFetch from './MyPostuFetch';
import Navbar from '../../../Navbar/Navbar';
import PlayerFilter from '../PlayerFilter';
import PostuCard from '../Cards/MyPostuCard'


export default function Userpag() {
    const [filters, setFilters] = useState({});
    const [appliedClubs, setAppliedClubs] = useState([]);
    const [data, setData] = useState([]);
  
    const handleFilterChange = (newFilters) => {
      setFilters(newFilters);
    };
  
    const handleApply = (clubData) => {
      setAppliedClubs([...appliedClubs, clubData.nombre]);
    };
  
    // Filtrar los datos con los filtros y los clubes aplicados
    const filteredData = data.filter((item) => {
      const positionMatch = filters.position ? item.posiciónRequerida === filters.position : true;
      const leagueMatch = filters.league ? item.liga === filters.league : true;
  
      return positionMatch && leagueMatch && !appliedClubs.includes(item.nombre);
    });
    
    return (
      <div>
        <Navbar />
        <PlayerFilter onChange={handleFilterChange} onApply={handleApply} />
        <MyPostuFetch
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
                <ul>
                  {filteredData.map((item, index) => (
                    <PostuCard
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
  }
