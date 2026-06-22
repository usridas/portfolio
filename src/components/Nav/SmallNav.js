import { useLocation, useNavigate } from 'react-router-dom';
import './Nav.css';

export const SmallNav = ({setIsModalOpen}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isProject = location.pathname === '/AlaskaAirlinesResearch' || location.pathname === '/KohiToKocha' || location.pathname === '/RollWithIt' || location.pathname === '/TraderJoesResearch' || location.pathname === '/Umeko' || location.pathname === '/Kavi' || location.pathname === '/ElfsterRedesign' || location.pathname === '/Viasat';
  return (
    <div className="smallNavContainer">
      <div className='navTitle'>UMAIYAL SRIDAS</div>
      {!isProject && <button tabIndex={0} className='link' style={{textAlign: 'right'}} onClick={()=>{setIsModalOpen(true)}} onKeyDown={(event)=>{if (event.key === 'Enter') {setIsModalOpen(true)}}}>MENU</button>}
      {isProject && <button tabIndex={0} className='link' style={{textAlign: 'right'}} onClick={()=>{navigate('/Projects')}} onKeyDown={(event)=>{if (event.key === 'Enter') {navigate('/Projects')}}}>BACK TO PROJECTS</button>}
    </div>
  );
}

export default SmallNav;
