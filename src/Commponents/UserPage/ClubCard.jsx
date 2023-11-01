
import PropTypes from 'prop-types';
import "../../index.css"
import { useState } from 'react';
const ClubCard = ({ Data , onApply }) => {
    const [applied, setApplied] = useState(false);
 
    const handleApply = () => {
        if (!applied) {
          onApply(Data);
          setApplied(true);
        }
      };

    if (!Data) {
    return null;
  }

  return (
    <div className="card-container">
      {Data.clubLogo && 
      (
        <img className='card-logo' src={Data.clubLogo} alt={Data.clubName} />
      )}
      <div className='card-content'>
      <h3>{Data.clubName}</h3>
      <p>Liga: {Data.league}</p>
      </div>
      {applied ? (
        <p>¡Postulación enviada!</p>
      ) : (
        <button className='card-button' onClick={handleApply}>Postularse</button>
      )}
      
    </div>
  );
}; 

ClubCard.propTypes = {
  Data: PropTypes.object.isRequired, 
  onApply: PropTypes.func.isRequired, 
};

export default ClubCard;