import './Nav.css';
import Resume from '../../assets/documents/Resume.pdf';

export const SmallNavModal = ({setTab, isProject, setIsModalOpen}) => {

  return (
    <div className='smallNavModalContainer'>
        <div className="smallNavModal">
        {!isProject &&
            <div className='smallNavList'>
            <a onClick={()=>setIsModalOpen(false)} style={{color: '#2519D2'}}>CLOSE</a>
            <a onClick={()=>{setTab('AboutMe'); setIsModalOpen(false);}}>ABOUT ME</a>
            <a onClick={()=>{setTab('Experience'); setIsModalOpen(false);}}>EXPERIENCE</a>
            <a onClick={()=>{setTab('Projects'); setIsModalOpen(false);}}>PROJECTS</a>
            <a onClick={()=>{setTab('Artwork'); setIsModalOpen(false);}}>ARTWORK</a>
            <a href={Resume} onClick={()=>{setIsModalOpen(false);}}>RESUME</a>
            <a href="mailto:umaiyal.sridas@gmail.com" onClick={()=>{setIsModalOpen(false);}}>CONTACT</a>
            <a onClick={()=>{setTab('Music'); setIsModalOpen(false);}}>SECRET TUNNEL</a>
            </div>
        }
        {isProject && <a onClick={()=>{setTab('Projects'); setIsModalOpen(false);}}>BACK TO PROJECTS</a>}
        </div>
    </div>
  );
}

export default SmallNavModal;
