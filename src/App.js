import './App.css';
import { useState } from 'react';
import LargeNav from './components/LargeNav';
import AboutMe from './pages/AboutMe';
import { Experience } from './pages/Experience';
import Projects from './pages/Projects';
import LargeContent from './components/LargeContent';
import Artwork from './pages/Artwork';

function App() {
  const [tab, setTab] = useState('Projects');
  let currentPage;
  if(tab === 'AboutMe') {
    currentPage = <AboutMe />
  }
  if(tab === 'Experience') {
    currentPage = <Experience />
  };
  if(tab === 'Projects') {
    currentPage = <Projects />
  };
  if(tab === 'Artwork') {
    currentPage = <Artwork />
  };
  
    return (
      <div className="appContainer">
        <LargeNav setTab={setTab}/>
        <div className='largePageContainer'>
          <LargeContent title={'WELCOME'} content={<p>{'After graduating from my undergrad, I moved to San Diego, California to start work as a software engineer. Through work, I was able to explore my love for development, design, and management. I love the intersection between art and technology and aim to be a bridge between these two fields.\n\n​I am currently in a Masters program for User Experience Design and am searching for work in the UI/UX field.'}</p>} />
          <hr className='divider'/>
          {currentPage}
        </div>
      </div>
    )
  
}

export default App;
