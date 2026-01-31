import './Nav.css';
import Resume from '../../assets/documents/Resume.pdf';
import { useScreenResolution } from '../../utils/ScreenSize.tsx';

export const LargeNav = ({setTab, isProject}) => {
  const { isLarge } = useScreenResolution();
  return (
    <div className='largeNavWithFooter'>
      <div className="largeNavContainer">
        <div className='navTitle'>UMAIYAL SRIDAS</div>
        {!isProject &&
          <div className='largeNavList'>
            <a onClick={()=>{setTab('AboutMe')}}>ABOUT ME</a>
            <a onClick={()=>{setTab('Experience')}}>EXPERIENCE</a>
            <a onClick={()=>{setTab('Projects')}}>PROJECTS</a>
            <a onClick={()=>{setTab('Artwork')}}>ARTWORK</a>
            {!isLarge && <a href={Resume} target="blank">RESUME</a>}
            <a href="mailto:umaiyal.sridas@gmail.com">CONTACT</a>
            <a onClick={()=>{setTab('Music')}}>SECRET TUNNEL</a>
          </div>
        }
        {isProject && <a onClick={()=>{setTab('Projects')}}>BACK TO PROJECTS</a>}
      </div>
      <p className='largeNavFooter'>Website designed and developed by Umaiyal Sridas. 2026.</p>
    </div>
  );
}

export default LargeNav;
