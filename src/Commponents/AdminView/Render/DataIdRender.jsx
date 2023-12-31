import React from 'react';
import TraerJugadoresID from '../Fetchs/TraerJugadoresID'
import TraerEquipoId from '../Fetchs/TraerEquipoID'
import Buttonadmin from '../Buttonadmin'

function App() {
  return (
    <div>
      <h1>Traer jugador por id</h1>
      <TraerJugadoresID
        render={({ userNombre, user, loading, setUserNombre, fetchUser }) => (
          <div>
            <input
              type="text"
              placeholder="Ingrese el nombre del usuario"
              value={userNombre}
              onChange={(e) => setUserNombre(e.target.value)}
            />
            <button onClick={fetchUser}>Buscar</button>
            {loading && <p>Cargando...</p>}
            {user && (
              <div>
                <h2>Detalles del usuario</h2>
                <p>ID: {user.usuarioId}</p>
                <p>Nombre: {user.nombre}</p>
                <p>Apellido: {user.apellido}</p>
              </div>
            )}
          </div>
        )}
      />
      <h1>Traer equipo por id</h1>
      <TraerEquipoId
        render={({ equipoId, equipo, loading, setEquipoId, fetchEquipo }) => (
          <div>
            <input
              type="text"
              placeholder="Ingrese el nombre del equipo"
              value={equipoId}
              onChange={(e) => setEquipoId(e.target.value)}
            />
            <button onClick={fetchEquipo}>Buscar</button>
            {loading && <p>Cargando...</p>}
            {equipo && (
              <div>
                <h2>Detalles del equipo</h2>
                <p>ID: {equipo.equipoId}</p>
                <p>Nombre: {equipo.nombre}</p>
                <p>Descripcion: {equipo.descripcion}</p>
              </div>
            )}
          </div>
        )}
      />
      <Buttonadmin/>
    </div>
  );
}

export default App;