import './Pages.css';
import {
  ViasatNavigation,
  ViasatArticle,
  ViasatCommonQuestions,
  ViasatStream,
  ViasatAddOns
} from '../assets/images';
import PlainImage from '../components/Images/PlainImage.js';
import ProjectGrid from '../components/Grid/ProjectGrid.js';
import TextContainer from '../components/Text/TextContainer.js';

export const Viasat = () => {

  const content = <div className='summaryContent'>
    <p>While working at Viasat, my task was to update the My Viasat application user interface to provide the most useful data to clients while simultaneously being intuitive and aesthetic. I worked on both frontend and backend tasks to achieve this, but leaned more into frontend. To name a few, as a team, we used React, TypeScript, and Redux for web and mobile development. This project was done during my time working at Viasat Inc. as a software engineer.</p>
  </div>

  const imageText1 = <TextContainer text={'One of the most challenging tasks I worked on was developing the new navigation bar for My Viasat. The design itself is fairly simple and intuitive, but incorporating tab animations for accessibility and overlaying dropdowns that contained dynamic information about the customer proved to be difficult tasks. Furthermore, at smaller resolutions, this navigation bar became a hamburger button with a full screen dropdown. This was one of the most satisfying tasks to complete.'} />;
  const imageSlide1 = <PlainImage plainImageProps={{imagePath: ViasatNavigation}}/>;
  const imageText2 = <TextContainer text={'This task encouraged me to hone my frontend development skills and create succinct, clean, reusable code. I essentially made this component into a template, allowing other reuse anywhere else on the site with replaceable images, titles, body texts, and links. Creating components that can be personalized and changed quickly proved to be incredibly valuable, since text and images can become outdated and change on a whim.'} />;
  const imageSlide2 = <PlainImage plainImageProps={{imagePath: ViasatArticle}}/>;
  const imageText3 = <TextContainer text={'This was one of my first projects when working with Viasat. Similar to the article component I created, I was able to produce a dynamic frontend component with clean, minimal code. A developer simply needed to add in the questions, answers, and any links into a struct and the component would take care of formatting, design, and animations.'} />;
  const imageSlide3 = <div style={{display: 'flex', width: 'stretch', justifyContent: 'center'}}><PlainImage plainImageProps={{imagePath: ViasatCommonQuestions}} imageMaxWidth={true}/></div>;
  const imageText4 = <TextContainer text={'Although this component was simple for me to develop, it showed me the impermanence of products in business; this advertisement design was constantly shifting under my feet due to changes from both Viasat and Disney. Through developing this, I learned patience and the art of detachment; although I should take pride in my work, I should also understand that some projects may change or even fall through due to the nature of the industry, and I shouldn\'t be heartbroken.'} />;
  const imageSlide4 = <PlainImage plainImageProps={{imagePath: ViasatStream}}/>;
  const imageText5 = <TextContainer text={'For this add on component, I was required to design both the back and front end. For backend, I had to determine if a customer already had add ons for their account, and I was to only present add on promotions for any they did not have. In terms of frontend, I learned a lot about dynamic sizing and scrolling depending on the resolution of the screen.'} />;
  const imageSlide5 = <PlainImage plainImageProps={{imagePath: ViasatAddOns}}/>;


  const navigation =
    <div className='sectionContainer'>
        {imageText1}
        {imageSlide1}
    </div>;

  const articles =
    <div className='sectionContainer'>
        {imageText2}
        {imageSlide2}
    </div>;

  const commonQuestions =
    <div className='sectionContainer'>
        {imageText3}
        {imageSlide3}
    </div>;

const viasatStream =
    <div className='sectionContainer'>
        {imageText4}
        {imageSlide4}
    </div>;

const addOns =
    <div className='sectionContainer'>
        {imageText5}
        {imageSlide5}
    </div>;

  const gridArray = [
      {title: 'MY VIASAT APP', content: content},
      {title: 'NAVIGATION', content: navigation},
      {title: 'ARTICLES', content: articles},
      {title: 'COMMON QUESTIONS', content: commonQuestions},
      {title: 'VIASAT STREAM', content: viasatStream},
      {title: 'ADD ONS', content: addOns}
  ]

  return (
      <ProjectGrid gridProps={gridArray} removeBio={true}/>
  );
}

export default Viasat;
