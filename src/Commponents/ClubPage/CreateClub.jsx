import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const CreatePlayer = () => {
    const [Nombre, setNombre] = useState('')
    const [Descripcion, setDescripcion] = useState('')
    const [posiciónRequerida, setPosicion] = useState('')
    const usuarioId = 25
    const nav = useNavigate("")

    const goBack =()=>{
      nav("/app/ClubPage")
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
          let PlayerData = {Nombre, Descripcion, posiciónRequerida, usuarioId}
          
          fetch("https://localhost:7102/api/Equipo/InsertarDatosEquipo",{
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
              toast.error("Equipo existente, error:" + err, {
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
        f
        <label htmlFor="">Ingrese su nombre:</label>
        <input type="text"
         value={Nombre} onChange={(e)=>setNombre(e.target.value)} />
        <label htmlFor="">Ingrese una descripcion de su estilo de equipo:</label>
        <input type="text" value={Descripcion} onChange={(e)=>setDescripcion(e.target.value)} />
        <label htmlFor="">Ingrese su posición requerida:</label>
        <input type="text" value={posiciónRequerida} onChange={(e) => setPosicion(e.target.value)}/>
        <Button onClick={handleSubmit}>Guardar cambios</Button>
        <ToastContainer/>
        <Button onClick={goBack}>Voler a la pagina del club</Button>
    </div>
  )
}

export default CreatePlayer