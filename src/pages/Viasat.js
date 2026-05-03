import { useScreenResolution } from '../utils/ScreenSize.tsx';
import './Pages.css';
import ImageSlide from '../components/Images/ImageSlide.js';
import {
  ViasatNavigation,
  ViasatArticle,
  ViasatCommonQuestions,
  ViasatStream,
  ViasatAddOns
} from '../assets/images';
import Tag from '../components/Tag/Tag.js';
import PlainImage from '../components/Images/PlainImage.js';
import Grid from '../components/Grid/Grid.js';

export const Viasat = ({}) => {

  const { isLarge } = useScreenResolution();
  const viasatTags = <div className='tags'>
      <Tag type='Design' text='FIGMA'/>
      <Tag type='Software' text='JAVASCRIPT/TYPESCRIPT'/>
      <Tag type='Software' text='HTML/CSS/SCSS'/>
      <Tag type='Software' text='REACT'/>
      <Tag type='Software' text='NODE.JS'/>
      <Tag type='Software' text='GITHUB'/>
    </div>
  const content = <div className='summaryContent'>
    {viasatTags}
    <p>Objective: Update the My Viasat application user interface to provide the most useful data to clients while simultaneously being intuitive and aesthetic. I worked on both frontend and backend tasks to achieve this, but leaned more into frontend. To name a few, as a team, we used React, TypeScript, and Redux for web and mobile development. This project was done during my time working at Viasat Inc. as a software engineer.</p>
  </div>

  const imageSlide1 = <PlainImage plainImageProps={{imagePath: ViasatNavigation, caption: 'One of the most challenging tasks I worked on was developing the new navigation bar for My Viasat. The design itself is fairly simple and intuitive, but incorporating tab animations for accessibility and overlaying dropdowns that contained dynamic information about the customer proved to be difficult tasks. Furthermore, at smaller resolutions, this navigation bar became a hamburger button with a full screen dropdown. This was one of the most satisfying tasks to complete.'}}/>;
  const imageSlide2 = <PlainImage plainImageProps={{imagePath: ViasatArticle, caption: 'This task encouraged me to hone my frontend development skills and create succinct, clean, reusable code. I essentially made this component into a template, allowing other reuse anywhere else on the site with replaceable images, titles, body texts, and links. Creating components that can be personalized and changed quickly proved to be incredibly valuable, since text and images can become outdated and change on a whim.'}}/>;
  const imageSlide3 = <PlainImage plainImageProps={{imagePath: ViasatCommonQuestions, caption: 'This was one of my first projects when working with Viasat. Similar to the article component I created, I was able to produce a dynamic frontend component with clean, minimal code. A developer simply needed to add in the questions, answers, and any links into a struct and the component would take care of formatting, design, and animations.'}}/>;
  const imageSlide4 = <PlainImage plainImageProps={{imagePath: ViasatStream, caption: 'Although this component was simple for me to develop, it showed me the impermanence of products in business; this advertisement design was constantly shifting under my feet due to changes from both Viasat and Disney. Through developing this, I learned patience and the art of detachment; although I should take pride in my work, I should also understand that some projects may change or even fall through due to the nature of the industry, and I shouldn\'t be heartbroken.'}}/>;
  const imageSlide5 = <PlainImage plainImageProps={{imagePath: ViasatAddOns, caption: 'For this add on component, I was required to design both the back and front end. For backend, I had to determine if a customer already had add ons for their account, and I was to only present add on promotions for any they did not have. In terms of frontend, I learned a lot about dynamic sizing and scrolling depending on the resolution of the screen.'}}/>;

  const gridArray = [
      {title: 'MY VIASAT APP', content: content},
      {title: 'NAVIGATION', content: imageSlide1},
      {title: 'ARTICLES', content: imageSlide2},
      {title: 'COMMON QUESTIONS', content: imageSlide3},
      {title: 'VIASAT STREAM', content: imageSlide4},
      {title: 'ADD ONS', content: imageSlide5}
  ]

  return (
      <Grid gridProps={gridArray} removeBio={true}/>
  );
}

export default Viasat;
