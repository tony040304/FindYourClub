import React, { useState } from 'react';
import MyPostuFetch from '../Fetchs/MyPostuFetch';
import Navbar from '../../../Navbar/Navbar';
import PlayerFilter from '../../PlayerFilter';
import MyPostuCard from '../Cards/MyPostuCard'
import useFilter from '../../../../Hook/useFilter';
import { useEffect } from 'react';


export default function PostuPage() {
  const [data, setData] = useState([]);
  const [filters, filteredData, handleFilterChange, handleApply] = useFilter({ data });
  const [token, setToken] = useState('');


  return (
      <div>
          <Navbar />
          <PlayerFilter onFilterChange={handleFilterChange} onApply={handleApply} />
          <MyPostuFetch
              token={token}
              setData={setData} // Pasar la función setData para actualizar los datos del fetch
              render={(loading, data) => (
                  <div>
                      {loading ? (
                          <div>Cargando...</div>
                      ) : data.length === 0 ? (
                          <div className="card-container-team">
                              <div className="card-content">
                                  <h3>No te has postulado a ningun equipo...</h3>
                              </div>
                          </div>
                      ) : (
                          <ul className='ul-card'>
                              {filteredData.map((item, index) => (
                                  <MyPostuCard
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