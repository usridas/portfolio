import { useNavigate, useLocation } from 'react-router-dom';
import './Nav.css';

export const LargeNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isProject = location.pathname === '/AlaskaAirlinesResearch' || location.pathname === '/KohiToKocha' || location.pathname === '/RollWithIt' || location.pathname === '/TraderJoesResearch' || location.pathname === '/Umeko' || location.pathname === '/Kavi' || location.pathname === '/ElfsterRedesign' || location.pathname === '/Viasat';
  
  return (
    <navigation className="largeNavContainer">
      <div className='largeNav'>
        <button tabIndex={0} className='navTitle' onClick={()=>{navigate('/')}} onKeyDown={(event)=>{if (event.key === 'Enter') {navigate('/')}}}>Umaiyal Sridas</button>
        {!isProject &&
          <div className='largeNavList'>
            <button tabIndex={0} className='link' style={{textDecorationLine: location.pathname==='/AboutMe' ? 'none' : 'underline'}} onClick={()=>{navigate('/AboutMe')}} onKeyDown={(event)=>{if (event.key === 'Enter') {navigate('/AboutMe')}}}>About Me</button>
            <button tabIndex={0} className='link' style={{textDecorationLine: location.pathname==='/Work' ? 'none' : 'underline'}} onClick={()=>{navigate('/Work')}} onKeyDown={(event)=>{if (event.key === 'Enter') {navigate('/Work')}}}>Work</button>
            <button tabIndex={0} className='link' onClick={()=>{navigate('/Music')}} onKeyDown={(event)=>{if (event.key === 'Enter') {navigate('/Music')}}}>Sandbox</button>
            <a tabIndex={0} className='link' href="mailto:umaiyal.sridas@gmail.com">Contact</a>
          </div>
        }
        {isProject && <button tabIndex={0} className='link' onClick={()=>{navigate('/Work')}} onKeyDown={(event)=>{if (event.key === 'Enter') {navigate('/Work')}}}>Back to my work</button>}
      </div>
    </navigation>
  );
}

export default LargeNav;
