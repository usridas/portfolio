import './Nav.css';

export const LargeNav = ({setTab}) => {
  return (
    <div className="largeNavContainer">
      <div className='largeNavTitle'>UMAIYAL SRIDAS</div>
      <div className='largeNavList'>
        <a onClick={()=>{setTab('AboutMe')}}>ABOUT ME</a>
        <a onClick={()=>{setTab('Experience')}}>EXPERIENCE</a>
        <a onClick={()=>{setTab('Projects')}}>PROJECTS</a>
        <a onClick={()=>{setTab('Artwork')}}>ARTWORK</a>
        <a onClick={()=>{setTab('Contact')}}>CONTACT</a>
      </div>
    </div>
  );
}

export default LargeNav;
