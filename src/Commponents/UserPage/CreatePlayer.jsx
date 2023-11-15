import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const CreatePlayer = () => {
    const [Nombre, setNombre] = useState('')
    const [Apellido, setApellido] = useState('')
    const [Descripcion, setDescripcion] = useState('')
    const [Posicion, setPosicion] = useState('')
    const nav = useNavigate("")
    const goBack =()=>{
      nav("/app/UserPage")
    }
    const usuarioId = 2035
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

      const adjustTextarea = (e) => {
        e.style.height = 'auto';
        e.style.height = e.scrollHeight + 'px';
      };

  return (
    <div className="createplayer">
      <div className="center">
        <form className="form-style-4 large-form" action="" method="post">
          <label htmlFor="field1">
            <span>Ingresa tu nombre</span>
            <input
              type="text"
              name="field1"
              required="true"
              value={Nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </label>
          <label htmlFor="field2">
            <span>Ingresa tu apellido</span>
            <input
              type="text"
              name="field2"
              required="true"
              value={Apellido}
              onChange={(e) => setApellido(e.target.value)}/>
          </label>
          <label htmlFor="field3">
            <span>Ingresa una descripción</span>
            <textarea
              onKeyUp={(e) => adjustTextarea(e.target)}
              name="field4"
              required="true"
              value={Descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </label>
          <label htmlFor="field4">
            <span>Ingresa tu posición favorita</span>
            <select
              name="field5"
              required="true"
              value={Posicion}
              onChange={(e) => setPosicion(e.target.value)}>
              <option value="">Buscar posición</option>
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
          </label>
        </form>
      </div>
      <div className="button-container">
        <Button onClick={handleSubmit}>Guardar cambios</Button>
        <Button type="button" onClick={goBack}>
          Volver a la página jugador
        </Button>
      </div>
      <br />
      <ToastContainer />
    </div>
  )
}

export default CreatePlayer
