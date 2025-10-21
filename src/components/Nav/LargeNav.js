import './Nav.css';

export const LargeNav = ({setTab, isProject}) => {
  return (
    <div className="largeNavContainer">
      <div className='navTitle'>UMAIYAL SRIDAS</div>
      {!isProject &&
        <div className='largeNavList'>
          <a onClick={()=>{setTab('AboutMe')}}>ABOUT ME</a>
          <a onClick={()=>{setTab('Experience')}}>EXPERIENCE</a>
          <a onClick={()=>{setTab('Projects')}}>PROJECTS</a>
          <a onClick={()=>{setTab('Artwork')}}>ARTWORK</a>
          <a onClick={()=>{setTab('Contact')}}>CONTACT</a>
        </div>
      }
      {isProject && <a onClick={()=>{setTab('Projects')}}>BACK TO PROJECTS</a>}
    </div>
  );
}

export default LargeNav;
