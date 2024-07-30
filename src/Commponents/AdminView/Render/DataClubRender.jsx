import { useState } from 'react'
import Navbar from '../../Navbar/Navbar'
import TraerEquipoID from '../Fetchs/TraerEquipoID'
import ClubCard from '../Cards/ClubCard'
import EquipoFetch from '../Fetchs/EquipoFetch'


const DataClubRender = () => {
    const [mostrarTodosClubs, setMostrarTodosClubs] = useState(false);

  return (
    <div>
        <Navbar/>
        <div className="Admin-render-user">
        <h1>Buscar jugadores por nombre</h1>
          <TraerEquipoID
            render={({ equipoNombre, equipo, loading, setEquipoNombre, fetchEquipo }) => (
              <div>
                <input
                  className='admin-input'
                  type="text"
                  placeholder="Ingrese el nombre del usuario"
                  value={equipoNombre}
                  onChange={(e) => setEquipoNombre(e.target.value)}
                />
                <button type='submit' onClick={fetchEquipo}>Buscar</button>
                {loading && <p>Cargando...</p>}
                {equipo && (
                  <ClubCard
                  Data={equipo}
                />
                )}
              </div>
            )}
          />
        {
          mostrarTodosClubs === false ?
          (<button type='button' onClick={() => setMostrarTodosClubs(true)}>Mostrar Todos los equipos</button>)
            :
          (<button type='button' onClick={() => setMostrarTodosClubs(false)}>Ocultar Todos los equipos</button>)
        }
        <EquipoFetch render={(data) => (
          <div>
            {data ? (
              <ul>
                {mostrarTodosClubs && data.map((item, index) => (
                  <ClubCard
                    key={index}
                    Data={item}
                  />
                ))}
              </ul>
            ) : (
              <p>No hay datos...</p>
            )}
          </div>
        )} />
      </div>
    </div>
  )
}

export default DataClubRender