import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const CreatePlayer = () => {
    const [Nombre, setNombre] = useState('')
    const [Descripcion, setDescripcion] = useState('')
    const [posiciónRequerida, setPosicion] = useState('')
    const [Liga, SetLiga] = useState('')
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
              maxLength="25"
            />
          </label>
          <label htmlFor="field1">
            <span>Ingresa posiciones que requiera</span>
            <input
              type="text"
              name="field1"
              required="true"
              value={posiciónRequerida}
              onChange={(e) => setPosicion(e.target.value)}
              placeholder='Ej: DFC, LI, DC, ETC.'
              maxLength="50"
            />
          </label>
          <label htmlFor="field3">
            <span>Ingresa una descripción</span>
            <textarea
              onKeyUp={(e) => adjustTextarea(e.target)}
              name="field4"
              required="true"
              value={Descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              maxLength="100"
            />
          </label>
          <label htmlFor="field4">
            <span>Ingresa tu posición favorita</span>
            <select
              name="field5"
              required="true"
              value={Liga}
              onChange={(e) => SetLiga(e.target.value)}>
              <option value="">Ingrese su liga</option>
              <option value="Liga Cañadiense de Futbol">Liga Cañadiense De Futbol</option>
              <option value="Liga Rosarina Profesional">Liga Rosarina Profesional</option>
            </select>
          </label>
        </form>
      </div>
      <Button onClick={handleSubmit}>Guardar cambios</Button>
        <ToastContainer/>
        <Button onClick={goBack}>Voler a la pagina del club</Button>
      </div>
  )
}

export default CreatePlayer