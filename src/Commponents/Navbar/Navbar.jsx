/* eslint-disable react/prop-types */
import React from 'react';
import Cookies from 'universal-cookie';
import { useTheme } from '../../Hook/useTheme';
import { TbSunMoon } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import logo from '../Img/FindYOUR.png'

const Navbar = ({ nombre }) => {
  const nav = useNavigate('')
  const cookies = new Cookies()


  const goBack =()=>{
    nav("..", { relative: "path" });
  }
  const goLogin =()=>{
    cookies.remove("tokenTeam", {path: '/'})
    cookies.remove("tokenAdmin", {path: '/'})
    cookies.remove("token", {path: '/'})
    localStorage.clear()
    nav('/app/login')
  }

  const [theme, handleChange] = useTheme('dark');

  return (
    <div className="navbar">
      <div className="navbar-left" onClick={goBack}>
        <img src={logo}  alt="Logo" className="logo" />
        <span className="page-name">FIND YOUR CLUB</span>
        <span className="nav-item">Inicio</span>
        <span className="nav-item" style={{"color": "#a6ff00"}}>{nombre}</span>
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
