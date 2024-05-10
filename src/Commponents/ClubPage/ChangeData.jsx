import { useState } from "react"
import React from 'react'
import { Button } from "react-bootstrap";
import Cookies from "universal-cookie";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const ChangeData = () => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [posiciónRequerida, setPosicion] = useState('');
    const [liga, setLiga] = useState('');
    const cookies = new Cookies();
    const token = cookies.get("tokenTeam")
    const navigate = useNavigate('')

    const handleSubmit = () => {
          fetch('https://localhost:7102/api/Equipo/UpdateInfo', {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ nombre, descripcion, posiciónRequerida, liga  }),
          })
          .then((response) => {
            toast.success('Datos cambiados satisfactoriamente', {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            if (!response.ok) {
              throw new Error('Error al responder');
            }
            setTimeout(() => {
              navigate("..", { relative: "path" });
            }, 1500);
          })
          .catch(error => {
            console.error('Error al cambiar la contraseña:', error.message);
          })
      }

  return (
    <>
    <Navbar/>
    <div className="login">
        <div className="form scale-up-center form-login ">
            <h2>Cambia los datos que desees</h2>
            <form >
                <div>
                    <input className="usuario_estilo form-control" value={nombre} onChange={(e)=>setNombre(e.target.value)} type="text" placeholder='Cambiar nombre' />
                </div>
                <div>
                    <input className="usuario_estilo form-control" value={descripcion} onChange={(e)=>setDescripcion(e.target.value)} type="text" placeholder='Cambiar descripcion' />
                </div>
                <div>
                    <select className="usuario_estilo form-control" value={posiciónRequerida} onChange={(e)=>setPosicion(e.target.value)}>
                        <option value="">Posicion</option>
                        <option value="DFC">DFC</option>
                        <option value="LD">LD</option>
                        <option value="LI">LI</option>
                        <option value="MC">MC</option>
                        <option value="MCD">MCD</option>
                        <option value="MCO">MCO</option>
                        <option value="EI">EI</option>
                        <option value="ED">ED</option>
                        <option value="DC">DC</option>
                    </select>
                </div>
                <div>
                    <select value={liga} onChange={(e)=>setLiga(e.target.value)} className="usuario_estilo form-control">
                        <option value="">Liga</option>
                        <option value="Liga Cañadiense de Futbol">Liga Cañadiense De Futbol</option>
                        <option value="Liga Rosarina Profesional">Liga Rosarina Profesional</option>
                    </select>
                </div>
            </form>
            <Button onClick={handleSubmit} type="submit">Guardar cambios</Button>
        </div>
        <ToastContainer/>
    </div>
    </>
  )
}

export default ChangeData