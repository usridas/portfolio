import { useNavigate, useLocation } from 'react-router-dom';
import './Nav.css';

export const LargeNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isProject = location.pathname === '/AlaskaAirlinesResearch' || location.pathname === '/KohiToKocha' || location.pathname === '/RollWithIt' || location.pathname === '/TraderJoesResearch' || location.pathname === '/Umeko' || location.pathname === '/Kavi' || location.pathname === '/ElfsterRedesign' || location.pathname === '/Viasat';
  
  return (
    <div className="largeNavContainer">
      <div className='navTitle'>UMAIYAL SRIDAS</div>
      {!isProject &&
        <div className='largeNavList'>
          <button tabIndex={0} className='link' style={{textDecorationLine: location==='/AboutMe' ? 'none' : 'underline'}} onClick={()=>{navigate('/AboutMe')}} onKeyDown={(event)=>{if (event.key === 'Enter') {navigate('/AboutMe')}}}>ABOUT ME</button>
          <button tabIndex={0} className='link' style={{textDecorationLine: location==='/Projects' ? 'none' : 'underline'}} onClick={()=>{navigate('/Projects')}} onKeyDown={(event)=>{if (event.key === 'Enter') {navigate('/Projects')}}}>PROJECTS</button>
          <button tabIndex={0} className='link' onClick={()=>{navigate('/Music')}} onKeyDown={(event)=>{if (event.key === 'Enter') {navigate('/Music')}}}>SANDBOX</button>
          <a tabIndex={0} className='link' href="mailto:umaiyal.sridas@gmail.com">CONTACT</a>
        </div>
      }
      {isProject && <button tabIndex={0} className='link' onClick={()=>{navigate('/Projects')}} onKeyDown={(event)=>{if (event.key === 'Enter') {navigate('/Projects')}}}>BACK TO PROJECTS</button>}
    </div>
  );
}

export default LargeNav;
