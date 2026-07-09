import './Pages.scss';
import {
  ViasatNavigation,
  ViasatArticle,
  ViasatCommonQuestions,
  ViasatStream,
  ViasatAddOns
} from '../assets/images';
import TextContainer from '../components/Text/TextContainer.js';
import Grid from '../components/Grid/Grid.js';
import ImageSlide from '../components/Images/ImageSlide.js';

export const Viasat = () => {

  const content = <div className='columnWith24Gap'>
    <p>While working at Viasat, my task was to update the My Viasat application user interface to provide the most useful data to clients while simultaneously being intuitive and aesthetic. I worked on both frontend and backend tasks to achieve this, but leaned more into frontend. To name a few, as a team, we used React, TypeScript, and Redux for web and mobile development. This project was done during my time working at Viasat Inc. as a software engineer.</p>
  </div>

  const imageText1 = <TextContainer text={'One of the most challenging tasks I worked on was developing the new navigation bar for My Viasat. The design itself is fairly simple and intuitive, but incorporating tab animations for accessibility and overlaying dropdowns that contained dynamic information about the customer proved to be difficult tasks. Furthermore, at smaller resolutions, this navigation bar became a hamburger button with a full screen dropdown. This was one of the most satisfying tasks to complete.'} />;
  const imageSlide1 = <ImageSlide imageSlideProps={[{imagePath: ViasatNavigation}]}/>;
  const imageText2 = <TextContainer text={'This task encouraged me to hone my frontend development skills and create succinct, clean, reusable code. I essentially made this component into a template, allowing other reuse anywhere else on the site with replaceable images, titles, body texts, and links. Creating components that can be personalized and changed quickly proved to be incredibly valuable, since text and images can become outdated and change on a whim.'} />;
  const imageSlide2 = <ImageSlide imageSlideProps={[{imagePath: ViasatArticle}]}/>;
  const imageText3 = <TextContainer text={'This was one of my first projects when working with Viasat. Similar to the article component I created, I was able to produce a dynamic frontend component with clean, minimal code. A developer simply needed to add in the questions, answers, and any links into a struct and the component would take care of formatting, design, and animations.'} />;
  const imageSlide3 = <div style={{display: 'flex', width: 'stretch', justifyContent: 'center'}}><ImageSlide imageSlideProps={[{imagePath: ViasatCommonQuestions}]} imageMaxWidth={true}/></div>;
  const imageText4 = <TextContainer text={'Although this component was simple for me to develop, it showed me the impermanence of products in business; this advertisement design was constantly shifting under my feet due to changes from both Viasat and Disney. Through developing this, I learned patience and the art of detachment; although I should take pride in my work, I should also understand that some projects may change or even fall through due to the nature of the industry, and I shouldn\'t be heartbroken.'} />;
  const imageSlide4 = <ImageSlide imageSlideProps={[{imagePath: ViasatStream}]}/>;
  const imageText5 = <TextContainer text={'For this add on component, I was required to design both the back and front end. For backend, I had to determine if a customer already had add ons for their account, and I was to only present add on promotions for any they did not have. In terms of frontend, I learned a lot about dynamic sizing and scrolling depending on the resolution of the screen.'} />;
  const imageSlide5 = <ImageSlide imageSlideProps={[{imagePath: ViasatAddOns}]}/>;


  const navigation =
    <div className='columnWith24Gap'>
        {imageText1}
        <div className='imageBox' style={{backgroundImage: `url(${ViasatNavigation})`, backgroundSize: 'contain'}}/>
        {imageSlide1}
    </div>;

  const articles =
    <div className='columnWith24Gap'>
        {imageText2}
        {imageSlide2}
    </div>;

  const commonQuestions =
    <div className='columnWith24Gap'>
        {imageText3}
        {imageSlide3}
    </div>;

const viasatStream =
    <div className='columnWith24Gap'>
        {imageText4}
        {imageSlide4}
    </div>;

const addOns =
    <div className='columnWith24Gap'>
        {imageText5}
        {imageSlide5}
    </div>;

  const gridArray = [
      {title: 'Overview', content: content, rowType: 'Column'},
      {title: 'Navigation', content: navigation, rowType: 'Column'},
      {title: 'Articles', content: articles, rowType: 'Column'},
      {title: 'Common Questions', content: commonQuestions, rowType: 'Column'},
      {title: 'Viasat Stream', content: viasatStream, rowType: 'Column'},
      {title: 'Add Ons', content: addOns, rowType: 'Column'}
  ]

  return (
    <div>
        <h1 className='title'>My Viasat Application</h1>
        <Grid gridProps={gridArray}/>
    </div>

  );
}

export default Viasat;
