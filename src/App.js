import './App.css';
import { useState } from 'react';
import { useScreenResolution } from './utils/ScreenSize.tsx';
import LargeNav from './components/Nav/LargeNav';
import AboutMe from './pages/AboutMe';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import LargeContent from './components/Content/LargeContent';
import Artwork from './pages/Artwork';
import Umeko from './pages/Umeko';
import Kavi from './pages/Kavi';
import ElfsterRedesign from './pages/ElfsterRedesign';
import SmallContent from './components/Content/SmallContent.js';
import SmallNav from './components/Nav/SmallNav.js';
import SmallNavModal from './components/Nav/SmallNavModal.js';
import Viasat from './pages/Viasat.js';
import PlaylistHome from './pages/PlaylistHome.js';
import IndividualPlaylist from './pages/IndividualPlaylist.js';
import { isMobile } from './utils/utils.js';
import TraderJoesResearch from './pages/TraderJoesResearch.js';
import RollWithIt from './pages/RollWithIt.js';
import KohiToKocha from './pages/KohiToKocha.js';
import Button from './components/Button/Button.js';
import Resume from './assets/documents/Resume.pdf';

function App() {
  const { isLarge, isSmall } = useScreenResolution();
  const isMobileVar = isMobile() || isSmall;
  const [tab, setTab] = useState('Projects');
  const [isModalOpen, setIsModalOpen] = useState(false);
  let currentPage;
  if(tab === 'AboutMe') {
    currentPage = <AboutMe />
  }
  if(tab === 'Experience') {
    currentPage = <Experience />
  };
  if(tab === 'Projects') {
    currentPage = <Projects setTab={setTab}/>
  };
  if(tab === 'Artwork') {
    currentPage = <Artwork />
  };
  if(tab === 'Umeko') {
    currentPage = <Umeko />
  };
  if(tab === 'Kavi') {
    currentPage = <Kavi />
  };
  if(tab === 'ElfsterRedesign') {
    currentPage = <ElfsterRedesign />
  };
  if(tab === 'Viasat') {
    currentPage = <Viasat />
  };
  if(tab === 'TraderJoesResearch') {
    currentPage = <TraderJoesResearch />
  };
  if(tab === 'RollWithIt') {
    currentPage = <RollWithIt />
  };
  if(tab === 'KohiToKocha') {
    currentPage = <KohiToKocha />
  };

  const isProject = tab !== 'AboutMe' && tab !== 'Experience' && tab !== 'Projects' && tab !== 'Artwork';
  const welcomeText = 
  <div>
    <p style={{marginBottom: '24px'}}>{'After graduating from my undergrad, I moved to San Diego, California to start work as a software engineer. Through work, I was able to explore my love for development, design, and management. I love the intersection between art and technology and aim to be a bridge between these two fields.\n\n​I am currently in a Masters program for User Experience Design and am searching for work in the UI/UX field.'}</p>
    <Button type='Primary' text='VIEW MY RESUME' link={Resume}/>
  </div>
  
    if (tab === 'Music') {
      return <PlaylistHome setTab={setTab}/>
    }
    if (tab === 'VideoGameVibes' || tab === 'ANightAtTheCasino' || tab === 'FamilyRoadTrip' || tab === 'LetsDisco') {
      return <IndividualPlaylist setTab={setTab} tab={tab}/>
    }
    return (
      <div className={isMobileVar ? 'appContainerMobile' : 'appContainer'}>
        {!isSmall && <LargeNav setTab={setTab} isProject={isProject}/>}
        {isSmall && <SmallNav setIsModalOpen={setIsModalOpen} setTab={setTab} tab={tab}/>}
        {isSmall && isModalOpen && <SmallNavModal setTab={setTab} isProject={isProject} setIsModalOpen={setIsModalOpen}/>}
        <div className='pageContainer'>
          {isLarge && !isProject &&
            <div className='welcomeSection'>
              <LargeContent title={'WELCOME'} content={welcomeText} />
              <hr className='divider'/>
            </div>}
          {!isLarge && tab==='AboutMe' &&
            <div className='welcomeSection'>
              <SmallContent title={'WELCOME'} content={welcomeText} />
              <hr className='divider'/>
            </div>}
          {currentPage}
        </div>
      </div>
    )
}

export default App;
