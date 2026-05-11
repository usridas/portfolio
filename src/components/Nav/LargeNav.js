import './Nav.css';

export const LargeNav = ({setTab, tab, isProject}) => {

  return (
    <div className="largeNavContainer">
      <div className='navTitle'>UMAIYAL SRIDAS</div>
      {!isProject &&
        <div className='largeNavList'>
          <button tabIndex={0} className='link' style={{textDecorationLine: tab==='AboutMe' ? 'none' : 'underline'}} onClick={()=>{setTab('AboutMe')}} onKeyDown={(event)=>{if (event.key === 'Enter') {setTab('AboutMe')}}}>ABOUT ME</button>
          <button tabIndex={0} className='link' style={{textDecorationLine: tab==='Projects' ? 'none' : 'underline'}} onClick={()=>{setTab('Projects')}} onKeyDown={(event)=>{if (event.key === 'Enter') {setTab('Projects')}}}>PROJECTS</button>
          <button tabIndex={0} className='link' onClick={()=>{setTab('Music')}} onKeyDown={(event)=>{if (event.key === 'Enter') {setTab('Music')}}}>SANDBOX</button>
          <a tabIndex={0} className='link' href="mailto:umaiyal.sridas@gmail.com">CONTACT</a>
        </div>
      }
      {isProject && <button tabIndex={0} className='link' onClick={()=>{setTab('Projects')}} onKeyDown={(event)=>{if (event.key === 'Enter') {setTab('Projects')}}}>BACK TO PROJECTS</button>}
    </div>
  );
}

export default LargeNav;
