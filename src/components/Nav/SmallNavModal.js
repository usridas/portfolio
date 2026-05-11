import './Nav.css';
import Resume from '../../assets/documents/Resume.pdf';

export const SmallNavModal = ({setTab, tab, setIsModalOpen}) => {

  return (
    <div className='smallNavModalContainer'>
      <div className="smallNavModal">
        <div className='smallNavList'>
          <button tabIndex={0} className='link' onClick={()=>setIsModalOpen(false)} onKeyDown={(event)=>{if (event.key === 'Enter') {setIsModalOpen(false)}}} style={{color: '#2519D2'}}>CLOSE</button>
          <button tabIndex={0} className='link' style={{textDecorationLine: tab==='AboutMe' ? 'none' : 'underline'}} onClick={()=>{setTab('AboutMe'); setIsModalOpen(false);}} onKeyDown={(event)=>{if (event.key === 'Enter') {setTab('AboutMe'); setIsModalOpen(false);}}}>ABOUT ME</button>
          <button tabIndex={0} className='link' style={{textDecorationLine: tab==='Projects' ? 'none' : 'underline'}} onClick={()=>{setTab('Projects'); setIsModalOpen(false);}} onKeyDown={(event)=>{if (event.key === 'Enter') {setTab('Projects'); setIsModalOpen(false);}}}>PROJECTS</button>
          <a tabIndex={0} className='link' href={Resume} onClick={()=>{setIsModalOpen(false);}}>RESUME</a>
          <button tabIndex={0} className='link' onClick={()=>{setTab('Music'); setIsModalOpen(false);}} onKeyDown={(event)=>{if (event.key === 'Enter') {setTab('Music'); setIsModalOpen(false);}}}>SANDBOX</button>
          <a tabIndex={0} className='link' href="mailto:umaiyal.sridas@gmail.com" onClick={()=>{setIsModalOpen(false);}}>CONTACT</a>
        </div>
      </div>
    </div>
  );
}

export default SmallNavModal;
