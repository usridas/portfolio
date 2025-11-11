import './Nav.css';

export const SmallNav = ({setIsModalOpen, setTab, tab}) => {

  const isProjectDetails = (tab === 'Umeko') || (tab === 'Kavi') || (tab === 'ElfsterRedesign') || (tab === 'Viasat');

  return (
    <div className="smallNavContainer">
      <div className='navTitle'>UMAIYAL SRIDAS</div>
      {!isProjectDetails && <a style={{textAlign: 'right'}} onClick={()=>{setIsModalOpen(true)}}>MENU</a>}
      {isProjectDetails && <a style={{textAlign: 'right'}} onClick={()=>{setTab('Projects')}}>BACK TO PROJECTS</a>}
    </div>
  );
}

export default SmallNav;
