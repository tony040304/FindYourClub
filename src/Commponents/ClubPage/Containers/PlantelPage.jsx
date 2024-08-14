import { useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import Plantel from '../Get/Plantel';
import PlantelResrva from '../Get/PlantelReserva';
import FirstDivitionCard from '../Cards/FirstDivitionCard';
import ReservaTeamCard from '../Cards/ReservaTeamCard'


const PlantelPage = () => {
  const [data, setData] = useState([]);
  const [dataReserva, setDataReserva] = useState([]);

  return (
    <>
    <div>
      <Navbar />
      <Plantel setData={setData} render={() => (
    <div>
      {data.length === 0 ? (
        <div className="card-container-team">
          <div className="card-content">
            <h3>Ningún jugador de primera tiene contrato con tu equipo...</h3>
          </div>
        </div>
      ) : (
        <FirstDivitionCard data={data} />
      )}
    </div>
)} />

    </div>
    <div>
    <PlantelResrva setData={setDataReserva} render={() => (
        <div>
          {dataReserva.length === 0 ? (
            <div className="card-container-team">
              <div className="card-content">
                <h3>Ningún jugador de reserva tiene contrato con tu equipo...</h3>
              </div>
            </div>
          ) : (
            <div>
            {dataReserva.map((item, index) => (
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
