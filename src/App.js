import { useState } from 'react';
import './App.scss';
import { ArtDesign } from './components/ArtDesign';
import { NavBar } from './components/NavBar';
import { Photography } from './components/Photography';
import { Profile } from './pages/Profile';
import { Projects } from './components/Projects';
import { ProjectPage } from './pages/ProjectPage';
import { Footer } from './components/Footer';

function App() {
  const [tab, setTab] = useState('home');
  const homeOnClick = () => {
    setTab('home');
  }

  return (
    <div className='appContainer'>
      <div className='titleContainer'>
        <a className='title' href='' onClick={homeOnClick}>Umaiyal Sridas | Portfolio</a>
        <NavBar setTab={setTab}/>
      </div>
      {tab  === 'home' ?
        <div>
          <Profile />
          <ArtDesign />
          <Projects setTab={setTab}/>
          <Photography />
        </div> :
        <ProjectPage tab={tab}/>
      }
      <Footer />
    </div>
  );
}

export default App;
