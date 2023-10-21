
import PropTypes from 'prop-types';
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
    <div className="Club-card">
      {Data.clubLogo && 
      (
        <img src={Data.clubLogo} alt={Data.clubName} />
      )}
      <h3>{Data.clubName}</h3>
      <p>Liga: {Data.league}</p>
      {applied ? (
        <p>¡Postulación enviada!</p>
      ) : (
        <button onClick={handleApply}>Postularse</button>
      )}
      
    </div>
  );
}; 

ClubCard.propTypes = {
  Data: PropTypes.object.isRequired, 
  onApply: PropTypes.func.isRequired, 
};

export default ClubCard;