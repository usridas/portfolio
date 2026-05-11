import './Nav.css';

export const SmallNav = ({setIsModalOpen, setTab, tab, isProject}) => {

  return (
    <div className="smallNavContainer">
      <div className='navTitle'>UMAIYAL SRIDAS</div>
      {!isProject && <button tabIndex={0} className='link' style={{textAlign: 'right'}} onClick={()=>{setIsModalOpen(true)}} onKeyDown={(event)=>{if (event.key === 'Enter') {setIsModalOpen(true)}}}>MENU</button>}
      {isProject && <button tabIndex={0} className='link' style={{textAlign: 'right'}} onClick={()=>{setTab('Projects')}} onKeyDown={(event)=>{if (event.key === 'Enter') {setTab('Projects')}}}>BACK TO PROJECTS</button>}
    </div>
  );
}

export default SmallNav;
