import logo from '../Img/FindYOUR.png'
import { useTheme } from '../../Hook/useTheme';
import { TbSunMoon } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

const loginNavBar = () => {
  const [theme, handleChange] = useTheme('dark');
  const navigate = useNavigate('')

  return (
    <div className="navbar">
      <div className="navbar-left" onClick={()=>{navigate('/app')}}>
        <img src={logo} alt="Logo" className="logo" />
        <span className="page-name">FIND YOUR CLUB</span>
      </div>
      <div className="container-switch-login">
        <label className="switch">
          <input type="checkbox" onChange={handleChange} checked={theme === 'dark'} className="hidden-input" />
          <span className="slider"></span>
        </label>
        <TbSunMoon className="theme-icon" onClick={handleChange} />
      </div>
    </div>
  );
};

export default loginNavBar;
