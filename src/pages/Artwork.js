import LargeContent from '../components/LargeContent';
import SmallContent from '../components/SmallContent.js';
import ImageSlide from '../components/ImageSlide/ImageSlide';
import './Pages.css';
import image1 from './images/laptopMockup.png';
import image2 from './images/smartPhoneMockup.png';
import image3 from './images/smartPhoneMockup2.png';
import { useScreenResolution } from '../utils/ScreenSize.tsx';

export const Artwork = ({}) => {
  const { isLarge } = useScreenResolution();

  const imagePaths = [
    image1,
    image2,
    image3
  ];

  const imageTexts = [
    "THIS IS IMAGE 1",
    "THIS IS IMAGE 2",
    "THIS IS IMAGE 3"
  ]

  const artworkSlide = <ImageSlide title={'ARTWORK TITLE'} timeFrame={'TIME - TIME'} imagePaths={imagePaths} imageTexts={imageTexts}/>;
  if (isLarge) {
      return (
        <LargeContent title={'ARTWORK'} content={artworkSlide} />
      );
    }
    else
      return (
        <SmallContent title={'ARTWORK'} content={artworkSlide} />
      );
}

export default Artwork;
