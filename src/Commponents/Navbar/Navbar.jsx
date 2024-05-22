import { useNavigate } from 'react-router-dom';
import logo from '../Img/FINDYOURLOG1.png'
import Cookies from 'universal-cookie';
import { useTheme } from '../../Hook/useTheme';
import { TbSunMoon } from "react-icons/tb";

const Navbar = () => {
  const nav = useNavigate('')
  const cookies = new Cookies()


  const goBack =()=>{
    nav("..", { relative: "path" });
  }
  const goLogin =()=>{
    cookies.remove("tokenTeam", {path: '/app/login'})
    cookies.remove("tokenAdmin", {path: '/app/login'})
    cookies.remove("token", {path: '/app/login'})
    nav('/app/login')
  }

  const [theme, handleChange] = useTheme('dark');

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="page-name">FIND YOUR CLUB</span>
        <span onClick={goBack} className="nav-item">Inicio</span>
      </div>
      <div className="container-switch">
        <label className="switch">
          <input type="checkbox" onChange={handleChange} checked={theme === 'dark'} className="hidden-input" />
          <span className="slider"></span>
        </label>
        <TbSunMoon className="theme-icon" onClick={handleChange} />
      </div>
      <div className="navbar-right" onClick={goLogin}>
        <button className="logout-button">
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Navbar;
