import LargeContent from '../components/Content/LargeContent.js';
import SmallContent from '../components/Content/SmallContent.js';
import ImageSlide from '../components/ImageSlide/ImageSlide';
import './Pages.css';
import {
  HermitCrab,
  Kasugai,
  ChrysolinaPerforata,
  DanausPlexippus,
  Lime,
  Pomegranate,
  Onion,
  Daruma,
  Heart,
  Brain,
  Eyeball,
  Mushroom1,
  Mushroom2,
  Mushroom3
} from '../assets/images';
import { useScreenResolution } from '../utils/ScreenSize.tsx';

export const Artwork = ({}) => {

  const { isLarge } = useScreenResolution();

  const imagePaths = [
    HermitCrab,
    Kasugai,
    ChrysolinaPerforata,
    DanausPlexippus,
    Lime,
    Pomegranate,
    Onion,
    Daruma,
    Heart,
    Brain,
    Eyeball,
    Mushroom1,
    Mushroom2,
    Mushroom3
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
