import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { Button } from 'react-bootstrap'


const CreatePlayer = () => {
    const [Nombre, setNombre] = useState('')
    const [Apellido, setApellido] = useState('')
    const [Descripcion, setDescripcion] = useState('')
    const [Posicion, setPosicion] = useState('')
    const usuarioId = 24
    const handleSubmit = (e)=>{
        e.preventDefault()
          let PlayerData = {Nombre, Apellido, Descripcion, Posicion, usuarioId}
          
          fetch("https://localhost:7102/api/Jugador/InsertarDatosJugador",{
            method: "POST", 
            mode: "cors", 
            cache: "no-cache",
            credentials: "same-origin", 
            headers: { "Content-Type": "application/json" },
            redirect: "follow", 
            referrerPolicy: "no-referrer", 
            body: JSON.stringify(PlayerData),
          }).then((response)=>{
              const isJson = response.headers.get('content-type')?.includes('application/json');
              const data = isJson ? response.json() : null;
              if (!response.ok) {
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
              }
              toast.success('Registrado satisfactoriamente', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            console.log(response)
            return response.json()
          }).catch(err => {
              toast.error("Usuario existente, error:" + err, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
          })
      }

  return (
    <div>
        <label htmlFor="">Ingrese su nombre:</label>
        <input type="text"
         value={Nombre} onChange={(e)=>setNombre(e.target.value)} />
        <label htmlFor="">Ingrese su apellido:</label>
        <input type="text" value={Apellido} onChange={(e)=>setApellido(e.target.value)} />
        <label htmlFor="">Ingrese una descripcion de su estilo de juego (Ej: pierna habil, equipos donde jugo, etc):</label>
        <input type="text" value={Descripcion} onChange={(e)=>setDescripcion(e.target.value)} />
        <label htmlFor="">Ingrese su posicion preferida:</label>
        <input type="text" value={Posicion} onChange={(e)=>setPosicion(e.target.value)} />
        <Button onClick={handleSubmit}>Guardar cambios</Button>
        <ToastContainer/>
    </div>
  )
}

export default CreatePlayer