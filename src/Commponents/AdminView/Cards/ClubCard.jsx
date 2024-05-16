import React, {useState} from 'react'
import Cookies from 'universal-cookie';
import { ToastContainer, toast } from 'react-toastify';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const ClubCard = ({ Data }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [applied, setApplied] = useState(false);
    const cookies = new Cookies();
    const token = cookies.get("tokenAdmin");

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

      const handleDelete = () => {
        let id = Data.equipoId
        fetch(`https://localhost:7102/api/Admin/BorrarEquipo/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'accept': 'text/plain',
            Authorization: `Bearer ${token}`, // Incluir el token JWT en el encabezado de autorización          
          },
        })
        .then((response) => {
          if (!response.ok) {
            setApplied(false)
            throw new Error('Error al responder');
          }
          setApplied(true)
          if (!applied && Data.success !== false) {
            setApplied(true);
          }
        })
        .catch((error) => {
            toast.error('El usuario tiene contrato o postulacion'+ error, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              })
        });
      };

  return (
    <div>
        <div className='Admin-container'>
            <div >
                <h3>Nombre: {Data.nombre}</h3>
                <p>Descripcion: {Data.descripcion}</p>
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
                <p>Posición requerida: {Data.posiciónRequerida}</p>
                <p>Liga: {Data.liga}</p>
            </div>
            {applied ? (
          <p>Usuario borrado!</p>
        ) : (
          <button type="cancel" onClick={handleDelete}>Borrar usuario</button>
        )}
        </div>
        <ToastContainer/>
    </div>
  )
}

export default ClubCard