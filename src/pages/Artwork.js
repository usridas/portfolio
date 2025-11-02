import LargeContent from '../components/Content/LargeContent.js';
import SmallContent from '../components/Content/SmallContent.js';
import ImageSlide from '../components/ImageSlide/ImageSlide';
import './Pages.css';
import linocutLime from './images/Artwork/Fig1Lime.jpg';
import linocutPomegranate from './images/Artwork/Fig2Pomegranate.jpg';
import linocutOnion from './images/Artwork/Fig3Onion.jpg';
import linocutDaruma from './images/Artwork/Daruma.jpg';
import paintedHermitCrab from './images/Artwork/HermitCrab.jpg';
import kasugaiGummies from './images/Artwork/Kasugai.png';
import chrysolinaPerforata from './images/Artwork/ChrysolinaPerforata.jpg';
import danausPlexippus from './images/Artwork/DanausPlexippus.jpg';
import { useScreenResolution } from '../utils/ScreenSize.tsx';

export const Artwork = ({setTab}) => {

  const { isLarge } = useScreenResolution();

  const imagePaths = [
    paintedHermitCrab,
    kasugaiGummies,
    chrysolinaPerforata,
    danausPlexippus,
    linocutLime,
    linocutPomegranate,
    linocutOnion,
    linocutDaruma,
  ];

  const titles = [
    "HERMIT CRAB",
    "KASUGAI GUMMIES",
    "CHRYSOLINA PERFORATA",
    "DANAUS PLEXIPPUS",
    "FIG. 1. CITRUS AURANTIIFOLIA",
    "FIG. 2. PUNICA GRANATUM",
    "FIG. 3. ALLIUM CEPA",
    "DARUMA"
  ]

  const descriptions = [
    "Acrylic on canvas",
    "Watercolor and Prismacolor pencil",
    "Watercolor and Prismacolor pencil",
    "Watercolor and Prismacolor pencil",
    "Linocut with ink",
    "Linocut with ink",
    "Linocut with ink",
    "Linocut with ink"
  ]

  const imageSizes = [
    '75%',
    '100%',
    '100%',
    '100%',
    '100%',
    '100%',
    '100%',
    '65%'
  ]

  const artworkSlide = <ImageSlide titles={titles} descriptions={descriptions} imagePaths={imagePaths} imageSizes={imageSizes}/>;
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
