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
import heart from './images/Artwork/Heart.png';
import brain from './images/Artwork/Brain.png';
import eyeball from './images/Artwork/Eyeball.png';
import mushroom1 from './images/Artwork/Mushroom_1.png';
import mushroom2 from './images/Artwork/Mushroom_2.png';
import mushroom3 from './images/Artwork/Mushroom_3.png';
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
    heart,
    brain,
    eyeball,
    mushroom1,
    mushroom2,
    mushroom3
  ];

  const titles = [
    "HERMIT CRAB",
    "KASUGAI GUMMIES",
    "CHRYSOLINA PERFORATA",
    "DANAUS PLEXIPPUS",
    "FIG. 1. CITRUS AURANTIIFOLIA",
    "FIG. 2. PUNICA GRANATUM",
    "FIG. 3. ALLIUM CEPA",
    "DARUMA",
    "FIG. 1. HEART",
    "FIG. 2. BRAIN",
    "FIG. 3. EYEBALL",
    "FIG. 1. OCULUS COPRINUS COMATUS",
    "FIG. 2. OCULUS AMANITA MUSCARIA",
    "FIG. 3. OCULUS FAVOLASCHIA CALOCERA"
  ]

  const descriptions = [
    "Acrylic on canvas",
    "Watercolor and Prismacolor pencil",
    "Watercolor and Prismacolor pencil",
    "Watercolor and Prismacolor pencil",
    "Linocut with ink",
    "Linocut with ink",
    "Linocut with ink",
    "Linocut with ink",
    "Watercolor and ink",
    "Watercolor and ink",
    "Watercolor and ink",
    "Watercolor and ink",
    "Watercolor and ink",
    "Watercolor and ink"
  ]

  const imageSizes = [
    '75%',
    '100%',
    '100%',
    '100%',
    '100%',
    '100%',
    '100%',
    '65%',
    '100%',
    '100%',
    '100%',
    '65%',
    '65%',
    '65%',
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
