import './Pages.css';
import ImageSlide from '../components/Images/ImageSlide.js';
import {
  ElfsterScreenshot1,
  ElfsterScreenshot2,
  ElfsterScreenshot3,
  ElfsterFeedback,
  ElfsterScreenshots,
  ElfsterExchangeScreens,
  ElfsterFriendScreens,
  ElfsterProfileScreens,
  ElfsterWishlistScreens
} from '../assets/images';
import TextContainer from '../components/Text/TextContainer.js';
import ProjectGrid from '../components/Grid/ProjectGrid.js';
import { useScreenResolution } from '../utils/ScreenSize.tsx';
import PlainImage from '../components/Images/PlainImage.js';

export const ElfsterRedesign = () => {

  const { isSmall, isXSmall } = useScreenResolution();
  const isMobile = isSmall || isXSmall;

  const summaryContent = <div className='summaryContent'>
      <p>As a fun side project, I wanted to redesign the Elfster gift exchange mobile app to be more user friendly, intuitive, and versatile. Elfster is an app that allows users to create wishlists and groups with friends to organize gift exchanges. When a group exchange is made, a user can create a wishlist which friends can see and order from. Essentially this app should allow friends to get purposeful gifts and to avoid duplicates.</p>
      <div className='steps'>
          <div className='step'>
              {!isMobile && <div className='stepNumber'><h1>1</h1></div>}
              <div className='journeyCard'>
                  <h2 style={{color: '#FF90BE', textAlign: 'left'}}><span style={{display: isMobile ? 'unset' : 'none'}}>1. </span>IDENTIFY</h2>
                  <p>I collected feedback from myself and other Elfster users after using the app for a Christmas exchange. A lot of the criticism of the app rose from <span style={{fontWeight: 'bold', color: '#94003D'}}>difficult navigation, the functionality of wishlists, and excess information or advertising</span>.</p>
              </div>
          </div>
          <div className='step'>
              {!isMobile && <div className='stepNumber'><h1>2</h1></div>}
              <div className='journeyCard'>
                  <h2 style={{color: '#FF90BE', textAlign: 'left'}}><span style={{display: isMobile ? 'unset' : 'none'}}>2. </span>DESIGN RESEARCH</h2>
                  <p>Here I took screenshots of the entire app and <span style={{fontWeight: 'bold', color: '#94003D'}}>extracted essential information, navigation, and interactions</span> in order to optimize the mobile app experience.</p>
              </div>
          </div>
          <div className='step'>
              {!isMobile && <div className='stepNumber'><h1>3</h1></div>}
              <div className='journeyCard'>
                  <h2 style={{color: '#FF90BE', textAlign: 'left'}}><span style={{display: isMobile ? 'unset' : 'none'}}>3. </span>EXECUTE</h2>
                  <p>Finally, I used the existing framework of the app and essential ideas to <span style={{fontWeight: 'bold', color: '#94003D'}}>redesign the mobile Elfster app.</span></p>
              </div>
          </div>
      </div>
  </div>

  const identify =
    <div className='sectionContainer'>
        {<TextContainer text={'First, I collected feedback from myself and other Elfster users about the pros and cons of the app. A lot of the criticism of the app rose from difficult navigation, the functionality of wishlists, and excess information or advertising. Some main complaints were:\n\n• Requesting the same gift across two different exchanges could result in a user receiving two of the same gift.\n• While others can mark things on your wishlist as purchased, you will not see what items have been purchased or not on your wishlist. This means you can delete an item from your wishlist that has already been purchased and the friend would likely have to return the gift.\n• When searching for gifts, more sources should appear other than Amazon, like Etsy, and maybe other big companies, like Walmart, Target, etc.'}/>}
        {<PlainImage plainImageProps={{imagePath: ElfsterFeedback}}/>}
    </div>;

  const imageSlideProps1 = [
    {imagePath: ElfsterScreenshots},
    {imagePath: ElfsterScreenshot1, imageSize: '40%'},
    {imagePath: ElfsterScreenshot2, imageSize: '40%'},
    {imagePath: ElfsterScreenshot3, imageSize: '40%'},
  ];

  const research =
    <div className='sectionContainer'>
        {<TextContainer text={'Here I took screenshots of the entire app and extracted essential information, navigation, and interactions in order to optimize the mobile app experience.'}/>}
        {<div style={{display: 'flex', width: 'stretch', justifyContent: 'center'}}><ImageSlide imageSlideProps={imageSlideProps1} imageMaxWidth={true}/></div>}
    </div>;

  const imageSlideProps2 = [
    {title: 'EXCHANGES', imagePath: ElfsterExchangeScreens},
    {title: 'WISHLISTS', imagePath: ElfsterWishlistScreens},
    {title: 'FRIENDS', imagePath: ElfsterFriendScreens},
    {title: 'PROFILE', imagePath: ElfsterProfileScreens},
  ];

  const execute =
    <div className='sectionContainer'>
        {<TextContainer text={'Finally, I used the existing framework of the app and essential ideas to redesign a better user experience for customers of Elfster.'}/>}
        {<ImageSlide imageSlideProps={imageSlideProps2} />}
    </div>;

  const gridArray = [
      {title: 'OVERVIEW', content: summaryContent},
      {title: 'IDENTIFY', content: identify},
      {title: 'DESIGN RESEARCH', content: research},
      {title: 'EXECUTE', content: execute}
  ]

  return (
      <div>
          <h1 className='title'>ELFSTER REDESIGN</h1>
          <ProjectGrid gridProps={gridArray} removeBio={true}/>
      </div>
  );
}

export default ElfsterRedesign;
