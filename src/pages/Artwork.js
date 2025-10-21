import LargeContent from '../components/LargeContent';
import SmallContent from '../components/SmallContent.js';
import ImageSlide from '../components/ImageSlide/ImageSlide';
import './Pages.css';
import linocutLime from './images/Artwork/Fig1Lime.jpg';
import linocutPomegranate from './images/Artwork/Fig2Pomegranate.jpg';
import linocutOnion from './images/Artwork/Fig3Onion.jpg';
import linocutDaruma from './images/Artwork/Daruma.jpg';
import paintedHermitCrab from './images/Artwork/HermitCrab.jpg';
import { useScreenResolution } from '../utils/ScreenSize.tsx';

export const Artwork = ({setTab}) => {

  const { isLarge } = useScreenResolution();

  const imagePaths = [
    linocutLime,
    linocutPomegranate,
    linocutOnion,
    linocutDaruma,
    paintedHermitCrab
  ];

  const titles = [
    "UMEKO",
    "KAVI",
    "ELFSTER REDESIGN",
    "VIASAT"
  ]

  const timeFrames = [
    "JULY 2024",
    "JULY 2024",
    "XXX - XXX",
    "JUNE 2021 - NOVEMBER 2023"
  ]

  const artworkSlide = <ImageSlide titles={titles} timeFrames={timeFrames} imagePaths={imagePaths}/>;
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
