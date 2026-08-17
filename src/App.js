import './App.css';
import { useEffect, useState } from 'react';
import { useScreenResolution } from './utils/ScreenSize.tsx';
import LargeNav from './components/Nav/LargeNav';
import AboutMe from './pages/AboutMe';
import Work from './pages/Work.js';
import Umeko from './pages/Umeko';
import Kavi from './pages/Kavi';
import SmallNav from './components/Nav/SmallNav.js';
import SmallNavModal from './components/Nav/SmallNavModal.js';
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
  const cursor = document.getElementById('cursor');
  const targets = document.querySelectorAll('.hover-target');

  document.addEventListener("mouseleave", () => {
    cursor.style.opacity = '0';
  });

  document.addEventListener("mouseenter", () => {
    cursor.style.opacity = '1';
  });


  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (isMobileVar) {
      html.style.scrollSnapType = 'none';
      body.style.scrollSnapType = 'none';
    }

    window.scrollTo(0,0);

    setIsMusic(location.pathname === '/Music' || location.pathname === '/VideoGameVibes' || location.pathname === '/ANightAtTheCasino' || location.pathname === '/FamilyRoadTrip' || location.pathname === '/LetsDisco');
    cursor.classList.remove('grow');
    window.addEventListener('mousemove', (e) => {
      if (isMobileVar) {
        cursor.style.opacity = '0';
      }
      else {
        cursor.style.opacity = '1';
      }
    });
  }, [location, isMobileVar]);

  
  window.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.clientY-20}px`;
    cursor.style.left = `${e.clientX-20}px`;
  });

  targets.forEach(target => {
    target.addEventListener('mouseenter', () => {
      cursor.classList.add('grow');
    });
    
    target.addEventListener('mouseleave', () => {
      cursor.classList.remove('grow');
    });
  });
 
  
  const welcomeText = 
    <div className='welcomeContainer'>
      <h1 className='welcomeTitle'>Hello, World! I'm Umaiyal.</h1>
      <h2 className='welcomeText'>I am a UI/UX designer with a software development background aiming to <span style={{color: '#2519D2', fontWeight: '700'}}>bridge the gap between design and engineering</span> in order to empower users through intuitive interfaces.</h2>
    </div>
  
  return (
      <div className={isMusic ? '':'appContainer'}>
        {!isMusic && !isMobileVar && <LargeNav />}
        {!isMusic && isMobileVar && <SmallNav setIsModalOpen={setIsModalOpen}/>}
        {!isMusic && isMobileVar && isModalOpen && <SmallNavModal setIsModalOpen={setIsModalOpen}/>}
        <Routes role='main'>
          <Route path="/" element={welcomeText} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/AlaskaAirlinesResearch" element={<AlaskaAirlinesResearch />} />
          <Route path="/KohiToKocha" element={<KohiToKocha />} />
          <Route path="/RollWithIt" element={<RollWithIt />} />
          <Route path="/TraderJoesResearch" element={<TraderJoesResearch />} />
          <Route path="/Umeko" element={<Umeko />} />
          <Route path="/Kavi" element={<Kavi />} />
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
