import './App.css';
import { useState } from 'react';
import { useScreenResolution } from './utils/ScreenSize.tsx';
import LargeNav from './components/Nav/LargeNav';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Umeko from './pages/Umeko';
import Kavi from './pages/Kavi';
import ElfsterRedesign from './pages/ElfsterRedesign';
import SmallNav from './components/Nav/SmallNav.js';
import SmallNavModal from './components/Nav/SmallNavModal.js';
import Viasat from './pages/Viasat.js';
import PlaylistHome from './pages/PlaylistHome.js';
import IndividualPlaylist from './pages/IndividualPlaylist.js';
import { isMobile } from './utils/utils.js';
import TraderJoesResearch from './pages/TraderJoesResearch.js';
import RollWithIt from './pages/RollWithIt.js';
import KohiToKocha from './pages/KohiToKocha.js';
import Footer from './components/Nav/Footer.js';
import AlaskaAirlinesResearch from './pages/AlaskaAirlinesResearch.js';

function App() {
  const { isSmall, isXSmall } = useScreenResolution();
  const isMobileVar = isMobile() || isSmall || isXSmall;
  const [tab, setTab] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const welcomeText = 
    <div className='welcomeContainer'>
      <p className='welcomeText'>{'After graduating from my undergrad, I moved to San Diego, California to start work as a software engineer. Through work, I was able to explore my love for development, design, and management. I love the intersection between art and technology and aim to be a bridge between these two fields.\n\n​I am currently in a Masters program for User Experience Design and am searching for work in the UI/UX field.'}</p>
    </div>
  
  let currentPage = welcomeText;
  switch (tab) {
    case 'AboutMe':
      currentPage = <AboutMe />;
      break;
    case 'Projects':
      currentPage = <Projects setTab={setTab}/>;
      break;
    case 'Umeko':
      currentPage = <Umeko />;
      break;
    case 'Kavi':
      currentPage = <Kavi />;
      break;
    case 'ElfsterRedesign':
      currentPage = <ElfsterRedesign />;
      break;
    case 'Viasat':
      currentPage = <Viasat />;
      break;
    case 'TraderJoesResearch':
      currentPage = <TraderJoesResearch />;
      break;
    case 'RollWithIt':
      currentPage = <RollWithIt />;
      break;
    case 'KohiToKocha':
      currentPage = <KohiToKocha />;
      break;
    case 'AlaskaAirlinesResearch':
      currentPage = <AlaskaAirlinesResearch />;
      break;
    case 'Music':
      return <PlaylistHome setTab={setTab}/>;
    case 'VideoGameVibes':
    case 'ANightAtTheCasino':
    case 'FamilyRoadTrip':
    case 'LetsDisco':
      return <IndividualPlaylist setTab={setTab} tab={tab}/>;
    default:
      currentPage = welcomeText;
      break;
  }

  const isProject = tab && tab !== 'AboutMe' && tab !== 'Experience' && tab !== 'Projects' && tab !== 'Artwork';
  
  
    return (
      <div className='appContainer'>
        {!isMobileVar && <LargeNav setTab={setTab} tab={tab} isProject={isProject}/>}
        {isMobileVar && <SmallNav setIsModalOpen={setIsModalOpen} setTab={setTab} tab={tab}/>}
        {isMobileVar && isModalOpen && <SmallNavModal setTab={setTab} tab={tab} isProject={isProject} setIsModalOpen={setIsModalOpen}/>}
        {currentPage}
        <Footer />
      </div>
    )
}

export default App;
