import './Nav.css';
import Resume from '../../assets/documents/Resume.pdf';
import { useLocation, useNavigate } from 'react-router-dom';

export const SmallNavModal = ({setIsModalOpen}) => {

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className='smallNavModalContainer'>
      <div className="smallNavModal">
        <div className='smallNavList'>
          <button tabIndex={0} className='link' onClick={()=>setIsModalOpen(false)} onKeyDown={(event)=>{if (event.key === 'Enter') {setIsModalOpen(false)}}} style={{color: '#2519D2'}}>CLOSE</button>
          <button tabIndex={0} className='link' style={{textDecorationLine: location==='/AboutMe' ? 'none' : 'underline'}} onClick={()=>{navigate('/AboutMe'); setIsModalOpen(false);}} onKeyDown={(event)=>{if (event.key === 'Enter') {navigate('/AboutMe'); setIsModalOpen(false);}}}>ABOUT ME</button>
          <button tabIndex={0} className='link' style={{textDecorationLine: location==='/Projects' ? 'none' : 'underline'}} onClick={()=>{navigate('/Projects'); setIsModalOpen(false);}} onKeyDown={(event)=>{if (event.key === 'Enter') {navigate('/Projects'); setIsModalOpen(false);}}}>PROJECTS</button>
          <a tabIndex={0} className='link' href={Resume} onClick={()=>{setIsModalOpen(false);}}>RESUME</a>
          <button tabIndex={0} className='link' onClick={()=>{navigate('/Music'); setIsModalOpen(false);}} onKeyDown={(event)=>{if (event.key === 'Enter') {navigate('/Music'); setIsModalOpen(false);}}}>SANDBOX</button>
          <a tabIndex={0} className='link' href="mailto:umaiyal.sridas@gmail.com" onClick={()=>{setIsModalOpen(false);}}>CONTACT</a>
        </div>
      </div>
    </div>
  );
}

export default SmallNavModal;
