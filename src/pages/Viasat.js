import ImageBoxSection from '../components/ProjectDetails/ImageBoxSection';
import LargeContent from '../components/Content/LargeContent.js';
import { useScreenResolution } from '../utils/ScreenSize.tsx';
import './Pages.css';
import SmallContent from '../components/Content/SmallContent.js';
import ImageSlide from '../components/ImageSlide/ImageSlide.js';
import Navigation from './images/Viasat/Navigation.png';
import Article from './images/Viasat/Article.png';
import CommonQuestions from './images/Viasat/CommonQuestions.png';
import ViasatStream from './images/Viasat/ViasatStream.png';
import AddOns from './images/Viasat/AddOns.png';

export const Viasat = ({}) => {

  const { isLarge } = useScreenResolution();
  const content = 'Objective: Update the My Viasat application user interface to provide the most useful data to clients while simultaneously being intuitive and aesthetic. I worked on both frontend and backend tasks to achieve this, but leaned more into frontend. To name a few, as a team, we used React, TypeScript, and Redux for web and mobile development. This project was done during my time working at Viasat Inc. as a software engineer.';
  const titleContent = isLarge ? <LargeContent title={'MY VIASAT APPLICATION'} content={<p>{content}</p>}/> : <SmallContent title={'MY VIASAT APPLICATION'} content={<p>{content}</p>}/>;

  const imagePaths1 = [
    Navigation
  ];

  const imagePaths2 = [
    Article
  ];

  const imagePaths3 = [
    CommonQuestions
  ];

  const imagePaths4 = [
    ViasatStream
  ];

  const imagePaths5 = [
    AddOns
  ];

  const imageSizes3 = [
    '80%'
  ]

  const imageSlide1 = <ImageSlide imagePaths={imagePaths1}/>;
  const imageSlide2 = <ImageSlide imagePaths={imagePaths2}/>;
  const imageSlide3 = <ImageSlide imagePaths={imagePaths3} imageSizes={imageSizes3}/>;
  const imageSlide4 = <ImageSlide imagePaths={imagePaths4}/>;
  const imageSlide5 = <ImageSlide imagePaths={imagePaths5}/>;

  return (
        <div className="sectionContainer">
            {titleContent}
            <hr className='divider'/>
            <ImageBoxSection number={'1'} title={'NAVIGATION'} text={'One of the most challenging tasks I worked on was developing the new navigation bar for My Viasat. The design itself is fairly simple and intuitive, but incorporating tab animations for accessibility and overlaying dropdowns that contained dynamic information about the customer proved to be difficult tasks. Furthermore, at smaller resolutions, this navigation bar became a hamburger button with a full screen dropdown. This was one of the most satisfying tasks to complete.'} content={imageSlide1} isLarge={isLarge}/>
            <ImageBoxSection number={'2'} title={'ARTICLES'} text={'This task encouraged me to hone my frontend development skills and create succinct, clean, reusable code. I essentially made this component into a template, allowing other reuse anywhere else on the site with replaceable images, titles, body texts, and links. Creating components that can be personalized and changed quickly proved to be incredibly valuable, since text and images can become outdated and change on a whim.'} content={imageSlide2} isLarge={isLarge}/>
            <ImageBoxSection number={'3'} title={'COMMON QUESTIONS'} text={'This was one of my first projects when working with Viasat. Similar to the article component I created, I was able to produce a dynamic frontend component with clean, minimal code. A developer simply needed to add in the questions, answers, and any links into a struct and the component would take care of formatting, design, and animations.'} content={imageSlide3} isLarge={isLarge}/>
            <ImageBoxSection number={'4'} title={'VIASAT STREAM'} text={'Although this component was simple for me to develop, it showed me the impermanence of products in business; this advertisement design was constantly shifting under my feet due to changes from both Viasat and Disney. Through developing this, I learned patience and the art of detachment; although I should take pride in my work, I should also understand that some projects may change or even fall through due to the nature of the industry, and I shouldn\'t be heartbroken.'} content={imageSlide4} isLarge={isLarge}/>
            <ImageBoxSection number={'5'} title={'ADD ONS'} text={'For this add on component, I was required to design both the back and front end. For backend, I had to determine if a customer already had add ons for their account, and I was to only present add on promotions for any they did not have. In terms of frontend, I learned a lot about dynamic sizing and scrolling depending on the resolution of the screen.'} content={imageSlide5} isLarge={isLarge}/>       
        </div>
    );
}

export default Viasat;
