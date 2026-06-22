import './App.css';
import { useEffect, useState } from 'react';
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
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const { isSmall, isXSmall } = useScreenResolution();
  const isMobileVar = isMobile() || isSmall || isXSmall;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMusic, setIsMusic] = useState(false);
  const location = useLocation();
  window.scrollTo(0, 0);
  useEffect(() => {
    setIsMusic(location.pathname === '/Music' || location.pathname === '/VideoGameVibes' || location.pathname === '/ANightAtTheCasino' || location.pathname === '/FamilyRoadTrip' || location.pathname === '/LetsDisco');
  }, [location]);
  
  const welcomeText = 
    <div className='welcomeContainer'>
      <h1 style={{color: '#EC2B7A', fontSize: '48px'}}>Hi, I'm Umaiyal.</h1>
      <h2 className='welcomeText'>{'I am a UI/UX designer with a software development background aiming to bridge the gap between design and engineering in order to empower users through intuitive interfaces.\n\nAfter graduating with a Bachelor\'s in Computer Engineering and a minor in Art & Design, I moved to San Diego, California to start work as a software engineer. Through work, I was able to explore my love for development, design, and management. ​I am currently in a Master\'s program for User Experience Design and am searching for work in the UI/UX field.'}</h2>
    </div>
  
  return (
      <div className={isMusic ? '':'appContainer'}>
        {!isMusic && !isMobileVar && <LargeNav />}
        {!isMusic && isMobileVar && <SmallNav setIsModalOpen={setIsModalOpen}/>}
        {!isMusic && isMobileVar && isModalOpen && <SmallNavModal setIsModalOpen={setIsModalOpen}/>}
        <Routes>
          <Route path="/" element={welcomeText} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Music" element={<PlaylistHome />} />
          <Route path="/AlaskaAirlinesResearch" element={<AlaskaAirlinesResearch />} />
          <Route path="/KohiToKocha" element={<KohiToKocha />} />
          <Route path="/RollWithIt" element={<RollWithIt />} />
          <Route path="/TraderJoesResearch" element={<TraderJoesResearch />} />
          <Route path="/Umeko" element={<Umeko />} />
          <Route path="/Kavi" element={<Kavi />} />
          <Route path="/ElfsterRedesign" element={<ElfsterRedesign />} />
          <Route path="/Viasat" element={<Viasat />} />
          <Route path="/Music" element={<PlaylistHome />} />
          <Route path="/VideoGameVibes" element={<IndividualPlaylist />} />
          <Route path="/ANightAtTheCasino" element={<IndividualPlaylist />} />
          <Route path="/FamilyRoadTrip" element={<IndividualPlaylist />} />
          <Route path="/LetsDisco" element={<IndividualPlaylist />} />
        </Routes>
        {!isMusic && <Footer />}
      </div>
    )
}

export default App;
