import useState from 'react'

const AdminSearch = () => {
    const [filters, setFilters] = useState({ nombreApellido: ''});

    const handleFilterChange = () => {
      onFilterChange(filters);
    };

  return (
    <div className="filter-container">
      <div className='hamburger-button'></div>
      <h2 className='filter-title'>Buscar</h2>
      <input type="text" placeholder='Buscar por nombre' value={filters.nombreApellido}
         onChange={(e)=>setFilters({ ...filters, nombreApellido: e.target.value })}/>
      <button className='filter-button' onClick={handleFilterChange}>Aplicar Filtros</button>
      
    </div>
  )
}

export default AdminSearch