import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const PrevPage = () => {
    const nav = useNavigate();
    const location = useLocation();
    const cookies = new Cookies();

    useEffect(() => {
        const token = location.state?.token || cookies.get("token");
        if (token) {
            console.log('Token disponible:', token);
            localStorage.setItem('token', token);  // Almacenar el token en localStorage
        } else {
            console.log('No hay token disponible');
            nav('/login'); // Redirigir al login si no hay token
        }
    }, [location.state, cookies, nav]);

    const goToPostulaciones = () => {
        nav('/app/UserPage/Postulaciones');
    };

    const goToSearch = () => {
        nav('/app/UserPage/Equipos');
    };

    const goToContract = () => {
        nav('/app/UserPage/Contrato');
    };

    const goToChangePass = () => {
        nav('/app/UserPage/ChangePassword');
    };

    return (
        <>
            <Navbar />
            <div className='userDiv'>
                <form className='userForm'>
                    <h3 className='userH'>Buscar equipo por liga o posición:</h3><br />
                    <Button type='button' onClick={goToSearch}>Buscar equipo</Button>
                </form>
                <form className='userForm'>
                    <h3 className='userH'>Ver mis postulaciones:</h3><br />
                    <Button type='button' onClick={goToPostulaciones}>Postulaciones</Button>
                </form>
            </div>
            <div className='userDiv2'>
                <form className='userForm'>
                    <h3 className='userH'>Mi equipo:</h3><br />
                    <Button type='button' onClick={goToContract}>Ver mi equipo</Button>
                </form>
                <form className='userForm'>
                    <h3 className='userH'>Cambiar mi contraseña:</h3><br />
                    <Button type='button' onClick={goToChangePass}>Cambiar contraseña</Button>
                </form>
            </div>
        </>
    );
};

export default PrevPage;
