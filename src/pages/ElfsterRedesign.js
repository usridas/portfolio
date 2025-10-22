import ImageBoxSection from '../components/ProjectDetails/ImageBoxSection';
import LargeContent from '../components/Content/LargeContent.js';
import { useScreenResolution } from '../utils/ScreenSize.tsx';
import './Pages.css';
import SmallContent from '../components/Content/SmallContent.js';
import ImageSlide from '../components/ImageSlide/ImageSlide.js';
import screenshot1 from './images/ElfsterRedesign/screenshot1.png';
import screenshot2 from './images/ElfsterRedesign/screenshot2.png';
import screenshot3 from './images/ElfsterRedesign/screenshot3.png';
import screen1 from './images/ElfsterRedesign/screen1.png';
import screen2 from './images/ElfsterRedesign/screen2.png';
import screen3 from './images/ElfsterRedesign/screen3.png';
import screen4 from './images/ElfsterRedesign/screen4.png';
import screen5 from './images/ElfsterRedesign/screen5.png';
import screen6 from './images/ElfsterRedesign/screen6.png';
import mockup1 from './images/ElfsterRedesign/mockup1.jpg';
import mockup2 from './images/ElfsterRedesign/mockup2.jpg';
import mockup3 from './images/ElfsterRedesign/mockup3.jpg';
import mockup4 from './images/ElfsterRedesign/mockup4.jpg';
import TextBoxSection from '../components/ProjectDetails/TextBoxSection.js';

export const Umeko = ({}) => {

  const { isLarge } = useScreenResolution();
  const content = 'Objective: Redesign the Elfster gift exchange mobile app to be more user friendly, intuitive, and versatile. Elfster is an app that allows users to create wishlists and groups with friends to organize gift exchanges. When a group exchange is made, a user can create a wishlist which friends can see and order from. Essentially this app should allow friends to get purposeful gifts and to avoid duplicates.';
  const titleContent = isLarge ? <LargeContent title={'ELFSTER REDESIGN'} content={<p>{content}</p>}/> : <SmallContent title={'ELFSTER REDESIGN'} content={<p>{content}</p>}/>;

  const imagePaths1 = [
    screenshot1,
    screenshot2,
    screenshot3
  ];

  const imagePaths2 = [
    screen1,
    screen2,
    screen3,
    screen4,
    screen5,
    screen6,
    mockup1,
    mockup2,
    mockup3,
    mockup4
  ];

  const imageSizes1 = [
    '40%',
    '40%',
    '40%',
  ]

  const imageSizes2 = [
    '40%',
    '40%',
    '40%',
    '40%',
    '40%',
    '40%',
    '100%',
    '100%',
    '100%',
    '100%',
  ]

  const imageSlide1 = <ImageSlide imagePaths={imagePaths1} imageSizes={imageSizes1}/>;
  const imageSlide2 = <ImageSlide imagePaths={imagePaths2} imageSizes={imageSizes2}/>;

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

export default Umeko;
