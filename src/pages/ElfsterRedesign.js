import ImageBoxSection from '../components/ProjectDetails/ImageBoxSection';
import LargeContent from '../components/Content/LargeContent.js';
import { useScreenResolution } from '../utils/ScreenSize.tsx';
import './Pages.css';
import SmallContent from '../components/Content/SmallContent.js';
import ImageSlide from '../components/Images/ImageSlide.js';
import {
  ElfsterScreenshot1,
  ElfsterScreenshot2,
  ElfsterScreenshot3,
  ElfsterScreen1,
  ElfsterScreen2,
  ElfsterScreen3,
  ElfsterScreen4,
  ElfsterScreen5,
  ElfsterScreen6,
  ElfsterMockup1,
  ElfsterMockup2,
  ElfsterMockup3,
  ElfsterMockup4
} from '../assets/images';
import TextBoxSection from '../components/ProjectDetails/TextBoxSection.js';
import Tag from '../components/Tag/Tag.js';

export const ElfsterRedesign = ({}) => {

  const { isLarge } = useScreenResolution();
  const elfsterTags = <div className='tags'><Tag type='Design' text='FIGMA'/></div>
  const content = <div className='summaryContent'>
    {elfsterTags}
    <p>Objective: Redesign the Elfster gift exchange mobile app to be more user friendly, intuitive, and versatile. Elfster is an app that allows users to create wishlists and groups with friends to organize gift exchanges. When a group exchange is made, a user can create a wishlist which friends can see and order from. Essentially this app should allow friends to get purposeful gifts and to avoid duplicates.</p>
  </div>
  const titleContent = isLarge ? <LargeContent title={'ELFSTER REDESIGN'} content={content}/> : <SmallContent title={'ELFSTER REDESIGN'} content={content}/>;

  const imageSlideProps1 = [
    {imagePath: ElfsterScreenshot1, imageSize: '40%'},
    {imagePath: ElfsterScreenshot2, imageSize: '40%'},
    {imagePath: ElfsterScreenshot3, imageSize: '40%'},
  ];

  const imageSlideProps2 = [
    {imagePath: ElfsterScreen1, imageSize: '40%'},
    {imagePath: ElfsterScreen2, imageSize: '40%'},
    {imagePath: ElfsterScreen3, imageSize: '40%'},
    {imagePath: ElfsterScreen4, imageSize: '40%'},
    {imagePath: ElfsterScreen5, imageSize: '40%'},
    {imagePath: ElfsterScreen6, imageSize: '40%'},
    {imagePath: ElfsterMockup1, imageSize: '100%'},
    {imagePath: ElfsterMockup2, imageSize: '100%'},
    {imagePath: ElfsterMockup3, imageSize: '100%'},
    {imagePath: ElfsterMockup4, imageSize: '100%'}
  ];

  const imageSlide1 = <ImageSlide imageSlideProps={imageSlideProps1}/>;
  const imageSlide2 = <ImageSlide imageSlideProps={imageSlideProps2}/>;

  return (
        <div className="sectionContainer">
            {titleContent}
            <hr className='divider'/>
            <TextBoxSection number={'1'} title={'IDENTIFY THE PROBLEM'} text={'First, I collected feedback from myself and other Elfster users about the pros and cons of the app. A lot of the criticism of the app rose from difficult navigation, the functionality of wishlists, and excess information or advertising. Some main complaints were:\n\n• Requesting the same gift across two different exchanges could result in a user receiving two of the same gift.\n• While others can mark things on your wishlist as purchased, you will not see what items have been purchased or not on your wishlist. This means you can delete an item from your wishlist that has already been purchased and the friend would likely have to return the gift.\n• When searching for gifts, more sources should appear other than Amazon, like Etsy, and maybe other big companies, like Walmart, Target, etc.'} isLarge={isLarge}/>
            <ImageBoxSection number={'2'} title={'RESEARCH AND EXTRACTION'} text={'Here I took screenshots and extracted essential information, navigation, and interactions in order to optimize the mobile app.'} content={imageSlide1} isLarge={isLarge}/>
            <ImageBoxSection number={'3'} title={'IDEATE AND EXECUTE SOLUTIONS'} text={'Finally, I used the existing framework of the app and essential ideas to create a better user experience for customers of Elfster.'} content={imageSlide2} isLarge={isLarge}/>
        </div>
    );
}

export default ElfsterRedesign;
