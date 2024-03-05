import { useState } from 'react';
import './App.scss';
import { ArtDesign } from './components/ArtDesign';
import { NavBar } from './components/NavBar';
import { Photography } from './components/Photography';
import { Profile } from './pages/Profile';
import { Projects } from './components/Projects';
import { ProjectPage } from './pages/ProjectPage';

function App() {
  const [tab, setTab] = useState('home');

  if (tab === 'home') {
  return (
    <div className='appContainer'>
      <div className='titleContainer'>
        <div className='title'>Umaiyal Sridas | Portfolio</div>
        <NavBar setTab={setTab}/>
      </div>
      <Profile />
      <ArtDesign />
      <Projects setTab={setTab}/>
      <Photography />
    </div>
  );
 }
if (tab !== 'home') {
  return (
    <div className='appContainer'>
      <div className='titleContainer'>
        <div className='title'>Umaiyal Sridas | Portfolio</div>
        <NavBar setTab={setTab}/>
      </div>
      <ProjectPage tab={tab}/>
    </div>
  );}
}

export default App;
