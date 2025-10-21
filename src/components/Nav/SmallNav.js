import './Nav.css';

export const SmallNav = ({setTab, isProject, setIsModalOpen}) => {

  return (
    <div className="smallNavContainer">
      <div className='navTitle'>UMAIYAL SRIDAS</div>
      <a onClick={()=>{setIsModalOpen(true)}}>MENU</a>
    </div>
  );
}

export default SmallNav;
