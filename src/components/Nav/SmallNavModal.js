import './Nav.css';
import Resume from '../../assets/documents/Resume.pdf';

export const SmallNavModal = ({setTab, tab, isProject, setIsModalOpen}) => {
  return (
    <div className='smallNavWithFooter'>
      <div className='smallNavModalContainer'>
        <div className="smallNavModal">
          {!isProject &&
            <div className='smallNavList'>
              <a onClick={()=>setIsModalOpen(false)} style={{color: '#2519D2'}}>CLOSE</a>
              <a style={{textDecorationLine: tab==='AboutMe' ? 'none' : 'underline'}} onClick={()=>{setTab('AboutMe'); setIsModalOpen(false);}}>ABOUT ME</a>
              <a style={{textDecorationLine: tab==='Experience' ? 'none' : 'underline'}} onClick={()=>{setTab('Experience'); setIsModalOpen(false);}}>EXPERIENCE</a>
              <a style={{textDecorationLine: tab==='Projects' ? 'none' : 'underline'}} onClick={()=>{setTab('Projects'); setIsModalOpen(false);}}>PROJECTS</a>
              <a style={{textDecorationLine: tab==='Artwork' ? 'none' : 'underline'}} onClick={()=>{setTab('Artwork'); setIsModalOpen(false);}}>ARTWORK</a>
              <a href={Resume} onClick={()=>{setIsModalOpen(false);}}>RESUME</a>
              <a href="mailto:umaiyal.sridas@gmail.com" onClick={()=>{setIsModalOpen(false);}}>CONTACT</a>
              <a onClick={()=>{setTab('Music'); setIsModalOpen(false);}}>SURPRISE</a>
            </div>
          }
          {isProject &&
            <div className='smallNavList'>
              <a onClick={()=>setIsModalOpen(false)} style={{color: '#2519D2'}}>CLOSE</a>
              <a onClick={()=>{setTab('Projects'); setIsModalOpen(false);}} style={{textAlign: 'right'}}>BACK TO PROJECTS</a>
            </div>
          }
        </div>
      </div>
      <p className='smallNavFooter'>Website designed and developed by Umaiyal Sridas. 2026.</p>
    </div>
  );
}

export default SmallNavModal;
