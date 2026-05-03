import { useScreenResolution } from '../utils/ScreenSize.tsx';
import './Pages.css';
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
import Tag from '../components/Tag/Tag.js';
import TextContainer from '../components/Text/TextContainer.js';
import Grid from '../components/Grid/Grid.js';

export const ElfsterRedesign = ({}) => {

  const { isLarge } = useScreenResolution();
  const elfsterTags = <div className='tags'><Tag type='Design' text='FIGMA'/></div>
  const content = <div className='summaryContent'>
    {elfsterTags}
    <p>Objective: Redesign the Elfster gift exchange mobile app to be more user friendly, intuitive, and versatile. Elfster is an app that allows users to create wishlists and groups with friends to organize gift exchanges. When a group exchange is made, a user can create a wishlist which friends can see and order from. Essentially this app should allow friends to get purposeful gifts and to avoid duplicates.</p>
  </div>

  const imageSlideProps1 = [
    {imagePath: ElfsterScreenshot1, imageSize: '40%', caption: 'Here I took screenshots and extracted essential information, navigation, and interactions in order to optimize the mobile app.'},
    {imagePath: ElfsterScreenshot2, imageSize: '40%', caption: 'Here I took screenshots and extracted essential information, navigation, and interactions in order to optimize the mobile app.'},
    {imagePath: ElfsterScreenshot3, imageSize: '40%', caption: 'Here I took screenshots and extracted essential information, navigation, and interactions in order to optimize the mobile app.'},
  ];

  const imageSlideProps2 = [
    {imagePath: ElfsterScreen1, imageSize: '40%', caption: 'Finally, I used the existing framework of the app and essential ideas to create a better user experience for customers of Elfster.'},
    {imagePath: ElfsterScreen2, imageSize: '40%', caption: 'Finally, I used the existing framework of the app and essential ideas to create a better user experience for customers of Elfster.'},
    {imagePath: ElfsterScreen3, imageSize: '40%', caption: 'Finally, I used the existing framework of the app and essential ideas to create a better user experience for customers of Elfster.'},
    {imagePath: ElfsterScreen4, imageSize: '40%', caption: 'Finally, I used the existing framework of the app and essential ideas to create a better user experience for customers of Elfster.'},
    {imagePath: ElfsterScreen5, imageSize: '40%', caption: 'Finally, I used the existing framework of the app and essential ideas to create a better user experience for customers of Elfster.'},
    {imagePath: ElfsterScreen6, imageSize: '40%', caption: 'Finally, I used the existing framework of the app and essential ideas to create a better user experience for customers of Elfster.'},
    {imagePath: ElfsterMockup1, imageSize: '100%', caption: 'Finally, I used the existing framework of the app and essential ideas to create a better user experience for customers of Elfster.'},
    {imagePath: ElfsterMockup2, imageSize: '100%', caption: 'Finally, I used the existing framework of the app and essential ideas to create a better user experience for customers of Elfster.'},
    {imagePath: ElfsterMockup3, imageSize: '100%', caption: 'Finally, I used the existing framework of the app and essential ideas to create a better user experience for customers of Elfster.'},
    {imagePath: ElfsterMockup4, imageSize: '100%', caption: 'Finally, I used the existing framework of the app and essential ideas to create a better user experience for customers of Elfster.'}
  ];

  const imageSlide1 = <ImageSlide imageSlideProps={imageSlideProps1}/>;
  const imageSlide2 = <ImageSlide imageSlideProps={imageSlideProps2}/>;

  const gridArray = [
      {title: 'ELFSTER REDESIGN', content: content},
      {title: 'IDENTIFY THE PROBLEM', content: <TextContainer title='IDENTIFY THE PROBLEM' text={'First, I collected feedback from myself and other Elfster users about the pros and cons of the app. A lot of the criticism of the app rose from difficult navigation, the functionality of wishlists, and excess information or advertising. Some main complaints were:\n\n• Requesting the same gift across two different exchanges could result in a user receiving two of the same gift.\n• While others can mark things on your wishlist as purchased, you will not see what items have been purchased or not on your wishlist. This means you can delete an item from your wishlist that has already been purchased and the friend would likely have to return the gift.\n• When searching for gifts, more sources should appear other than Amazon, like Etsy, and maybe other big companies, like Walmart, Target, etc.'}/>},
      {title: 'RESEARCH', content: imageSlide1},
      {title: 'IDEATE AND EXECUTE', content: imageSlide2}
  ]

  return (
      <Grid gridProps={gridArray} removeBio={true}/>
  );
}

export default ElfsterRedesign;
