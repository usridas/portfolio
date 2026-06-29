import { useNavigate, useLocation } from 'react-router-dom';
import './Nav.css';

export const LargeNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isProject = location.pathname === '/AlaskaAirlinesResearch' || location.pathname === '/KohiToKocha' || location.pathname === '/RollWithIt' || location.pathname === '/TraderJoesResearch' || location.pathname === '/Umeko' || location.pathname === '/Kavi' || location.pathname === '/ElfsterRedesign' || location.pathname === '/Viasat';
  
  return (
    <navigation className="largeNavContainer">
      <div className='navTitle'>Umaiyal Sridas</div>
      {!isProject &&
        <div className='largeNavList'>
          <button tabIndex={0} className='link' style={{textDecorationLine: location.pathname==='/AboutMe' ? 'none' : 'underline'}} onClick={()=>{navigate('/AboutMe')}} onKeyDown={(event)=>{if (event.key === 'Enter') {navigate('/AboutMe')}}}>About Me</button>
          <button tabIndex={0} className='link' style={{textDecorationLine: location.pathname==='/Projects' ? 'none' : 'underline'}} onClick={()=>{navigate('/Projects')}} onKeyDown={(event)=>{if (event.key === 'Enter') {navigate('/Projects')}}}>Projects</button>
          <button tabIndex={0} className='link' onClick={()=>{navigate('/Music')}} onKeyDown={(event)=>{if (event.key === 'Enter') {navigate('/Music')}}}>Sandbox</button>
          <a tabIndex={0} className='link' href="mailto:umaiyal.sridas@gmail.com">Contact</a>
        </div>
      }
      {isProject && <button tabIndex={0} className='link' onClick={()=>{navigate('/Projects')}} onKeyDown={(event)=>{if (event.key === 'Enter') {navigate('/Projects')}}}>Back to projects</button>}
    </navigation>
  );
}

export default LargeNav;
