import logo from '../Img/FINDYOURLOG1.png'
import { useNavigate } from 'react-router-dom'
import Userpage from '../UserPage/FindClubs/Containers/Userpage';

const Navbar = () => {
  const nav = useNavigate('')
    
  const goBack =()=>{
    nav("..", { relative: "path" });
  }

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
        
        <span onClick={goBack} className="nav-item">Inicio</span>
      </div>
      <div className="navbar-right">
        <button className="logout-button">
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Navbar;
