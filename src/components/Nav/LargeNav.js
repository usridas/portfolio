import './Nav.css';
import Resume from '../../assets/documents/Resume.pdf';

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
          <a href={Resume} target="blank">RESUME</a>
          <a href="mailto:umaiyal.sridas@gmail.com">CONTACT</a>
          <a onClick={()=>{setTab('Music')}}>SECRET TUNNEL</a>
        </div>
      }
      {isProject && <a onClick={()=>{setTab('Projects')}}>BACK TO PROJECTS</a>}
    </div>
  );
}

export default LargeNav;
