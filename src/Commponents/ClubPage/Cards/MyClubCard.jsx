import React, { useState } from 'react';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const MyClubCard = ({ Data }) => {
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    return (
        <div>
      <div className="card-container">
        <h2>Mis datos</h2>
        <div className="card-content">
          <h3>Nombre: {Data.nombre}</h3>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ marginRight: '10px' }}>Contraseña:</p>
            {showPassword ? (
              <span>{Data.password}</span>
            ) : (
              <span>*********</span>
            )}
            <div onClick={togglePasswordVisibility} style={{ marginLeft: '10px', cursor: 'pointer' }}>
              {showPassword ? <IoEyeOff style={{ fontSize: '20px' }} /> : <IoEye style={{ fontSize: '20px' }} />}
            </div>
          </div>
          <p>Descripción: {Data.descripcion}</p>
          <p>Posición requerida: {Data.posiciónRequerida}</p>
          <p>Liga: {Data.liga}</p>
        </div>
      </div>
    </div>
  );
};

    
    
    export default MyClubCard;