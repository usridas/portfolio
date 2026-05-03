import './Nav.css';
import Resume from '../../assets/documents/Resume.pdf';
import { useScreenResolution } from '../../utils/ScreenSize.tsx';

export const LargeNav = ({setTab, tab, isProject}) => {
  const { isLarge, isMedium } = useScreenResolution();
  const isProjectDetails = 
  (tab === 'Umeko') ||
  (tab === 'Kavi') ||
  (tab === 'ElfsterRedesign') ||
  (tab === 'Viasat') ||
  (tab === 'TraderJoesResearch') ||
  (tab === 'KohiToKocha') ||
  (tab === 'RollWithIt');
  return (
    <div className="largeNavContainer">
      <div className='navTitle'>UMAIYAL SRIDAS</div>
      {!isProject &&
        <div className='largeNavList'>
          <a style={{textDecorationLine: tab==='AboutMe' ? 'none' : 'underline'}} onClick={()=>{setTab('AboutMe')}}>ABOUT ME</a>
          <a style={{textDecorationLine: tab==='Projects' ? 'none' : 'underline'}} onClick={()=>{setTab('Projects')}}>PROJECTS</a>
          <a onClick={()=>{setTab('Music')}}>SANDBOX</a>
          <a href="mailto:umaiyal.sridas@gmail.com">CONTACT</a>
        </div>
      }
      {isProject && <a onClick={()=>{setTab('Projects')}}>BACK TO PROJECTS</a>}
    </div>
  );
}

export default LargeNav;
