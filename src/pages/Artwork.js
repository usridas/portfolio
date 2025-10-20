import LargeContent from '../components/LargeContent';
import ImageSlide from '../components/ImageSlide';
import './Pages.css';
import image1 from './images/laptopMockup.png';
import image2 from './images/smartPhoneMockup.png';
import image3 from './images/smartPhoneMockup2.png';

export const Artwork = ({}) => {

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

  const artworkSlide = <ImageSlide title={'PROJECT TITLE'} timeFrame={'TIME - TIME'} imagePaths={imagePaths} imageTexts={imageTexts}/>;
  return (
        <LargeContent title={'ARTWORK'} content={artworkSlide} />
  );
}

export default Artwork;
