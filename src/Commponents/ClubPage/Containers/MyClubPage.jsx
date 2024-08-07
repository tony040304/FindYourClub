import { useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import MyClub from '../Get/MyClub';
import MyClubCard from '../Cards/MyClubCard';

const MyClubPage = () => {
  const [data, setData] = useState([]);


  return (
    <div>
      <Navbar />
      <MyClub
        setData={setData} // Pasar la función setData para actualizar los datos del fetch
        render={() => (
          <div>
            {data.length === 0 ? (
              <div className="card-container-team">
              <div className="card-content">
                <h3>No pudimos encontrar los datos de tu club...</h3>
              </div>
            </div>
            ) : (
              <ul className='ul-card'>
                {data.map((item, index) => (
                  <MyClubCard
                    key={index}
                    Data={item}
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

export default MyClubPage;
