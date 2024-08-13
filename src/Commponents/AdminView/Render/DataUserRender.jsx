import { useState } from 'react';
import JugadorFetch from '../Fetchs/JugadoFetch'
import TraerJugadoresID from '../Fetchs/TraerJugadoresID'
import UserCard from '../Cards/UserCard';
import NavBar from '../../Navbar/Navbar'


const DataRender = () => {
  const [mostrarTodosUsuarios, setMostrarTodosUsuarios] = useState(false);

  return (
    <>
    <NavBar/>
      <div className="Admin-render-user">
        <h1>Buscar jugadores por nombre</h1>
          <TraerJugadoresID
            render={({ userNombre, user, loading, setUserNombre, fetchUser }) => (
              <div>
                <input
                  className='admin-input'
                  type="text"
                  placeholder="Ingrese el nombre del usuario"
                  value={userNombre}
                  onChange={(e) => setUserNombre(e.target.value)}
                />
                <button type='submit' onClick={fetchUser}>Buscar</button>
                {loading && <p>Cargando...</p>}
                {user && (
                  <UserCard
                  Data={user}
                />
                )}
              </div>
            )}
          />
        {
          mostrarTodosUsuarios === false ?
          (<button type='button' onClick={() => setMostrarTodosUsuarios(true)}>Mostrar Todos los Usuarios</button>)
            :
          (<button type='button' onClick={() => setMostrarTodosUsuarios(false)}>Ocultar Todos los Usuarios</button>)
        }
        <JugadorFetch render={(data) => (
          <div>
            {data && data.length > 0 ? (
              <ul>
                {mostrarTodosUsuarios && data.map((item, index) => (
                  <UserCard
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
    </>
  );
}

export default DataRender;
