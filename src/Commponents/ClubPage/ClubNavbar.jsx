import { useNavigate } from 'react-router-dom'
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

const ClubNavbar = () => {
    const navigate = useNavigate()

    const goToPage1 =()=>{
        navigate('/app/ClubPage')
    }
    const goToPage2 =()=>{
        navigate('/app/ClubPage2')
    }
  return (
    <nav>

      <div style={{cursor: 'pointer' }} onClick={goToPage1}>
        
        <GoChevronLeft />
        1.
      </div>
      <div style={{cursor: 'pointer' }} onClick={goToPage2}>
         .2
        <GoChevronRight  />
        
      </div>
    </nav>
  )
}

export default ClubNavbar