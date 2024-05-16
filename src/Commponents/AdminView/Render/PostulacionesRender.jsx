import React, {useState} from 'react'
import Navbar from '../../Navbar/Navbar';
import PoatulacionFetchId from '../Fetchs/PoatulacionFetchId';
import PostulacionFetch from '../Fetchs/PostulacionFetch';
import PostulacionCard from '../Cards/PostulacionCard';

const PostulacionesRender = () => {
    const [mostrarTodaPostulaciones, setMostrarTodaPostulaciones] = useState(false);
  return (
    <div>
        <Navbar/>
        <div className="Admin-render-user">
        <h1>Buscar postulaciones por nombre</h1>
          <PoatulacionFetchId
            render={({ userClubNombre, userClub, loading, setUserClubNombre, fetchUser }) => (
              <div>
                <input
                  className='admin-input'
                  type="text"
                  placeholder="Ingrese el nombre del usuario o equipo"
                  value={userClubNombre}
                  onChange={(e) => setUserClubNombre(e.target.value)}
                />
                <button type='submit' onClick={fetchUser}>Buscar</button>
                {loading && <p>Cargando...</p>}
                {userClub && (
                  <PostulacionCard
                  Data={userClub}
                />
                )}
              </div>
            )}
          />
        {
          mostrarTodaPostulaciones === false ?
          (<button type='button' onClick={() => setMostrarTodaPostulaciones(true)}>Mostrar Todos las postulaciones</button>)
            :
          (<button type='button' onClick={() => setMostrarTodaPostulaciones(false)}>Ocultar Todos las postulaciones</button>)
        }
        <PostulacionFetch render={(data) => (
          <div>
            {data ? (
              <ul>
                {mostrarTodaPostulaciones && data.map((item, index) => (
                  <PostulacionCard
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

export default PostulacionesRender