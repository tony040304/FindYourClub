import { useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import Plantel from '../Get/Plantel';
import PlantelResrva from '../Get/PlantelReserva';
import FirstDivitionCard from '../Cards/FirstDivitionCard';
import ReservaTeamCard from '../Cards/ReservaTeamCard'


const PlantelPage = () => {
  const [data, setData] = useState([]);

  return (
    <>
    <div>
      <Navbar />
      <Plantel setData={setData} render={() => (
        <div>
          {data.length === 0 ? (
            <div className="card-container-team">
              <div className="card-content">
                <h3>Ningún jugador tiene contrato con tu equipo...</h3>
              </div>
            </div>
          ) : (
            <div>
            {data.map((item, index) => (
              <FirstDivitionCard
              key={index}
              Data={item} 
              />
            ))}
            </div>
          )}
        </div>
      )} />
    </div>
    <div>
    <PlantelResrva setData={setData} render={() => (
        <div>
          {data.length === 0 ? (
            <div className="card-container-team">
              <div className="card-content">
                <h3>Ningún jugador tiene contrato con tu equipo...</h3>
              </div>
            </div>
          ) : (
            <div>
            {data.map((item, index) => (
              <ReservaTeamCard
              key={index}
              Data={item} 
              />
            ))}
            </div>
          )}
        </div>
      )} />
    </div>
    </>
  );
};

export default PlantelPage;
