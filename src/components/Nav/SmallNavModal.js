import './Nav.css';

export const SmallNavModal = ({setTab, isProject, setIsModalOpen}) => {

  return (
    <div className='smallNavModalContainer'>
        <div className="smallNavModal">
        {!isProject &&
            <div className='smallNavList'>
            <a onClick={()=>{setTab('AboutMe'); setIsModalOpen(false);}}>ABOUT ME</a>
            <a onClick={()=>{setTab('Experience'); setIsModalOpen(false);}}>EXPERIENCE</a>
            <a onClick={()=>{setTab('Projects'); setIsModalOpen(false);}}>PROJECTS</a>
            <a onClick={()=>{setTab('Artwork'); setIsModalOpen(false);}}>ARTWORK</a>
            <a onClick={()=>{setTab('Contact'); setIsModalOpen(false);}}>CONTACT</a>
            </div>
        }
        {isProject && <a onClick={()=>{setTab('Projects'); setIsModalOpen(false);}}>BACK TO PROJECTS</a>}
        </div>
    </div>
  );
}

export default SmallNavModal;
