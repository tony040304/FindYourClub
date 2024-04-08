
import logo from '../Img/FINDYOURLOG1.png'
import { useNavigate } from 'react-router-dom'
import Userpage from '../UserPage/FindClubs/Userpage';

const Navbar = () => {
  
    
  //const handleLogout = () => {
    // Lógica para cerrar sesión
    // Puedes redirigir al usuario a la página anterior usando history.goBack()
    //history.goBack();
  //};

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="page-name">FIND YOUR CLUB 
        <a href='./components/Userpage.js' target="_blank" rel="noopener noreferrer"></a>
       
        </span>
        
        <span className="nav-item">Inicio</span>

        <span className="nav-item">Buscar</span>
      </div>
      <div className="navbar-right">
        <button onClick={''} className="logout-button">
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Navbar;
