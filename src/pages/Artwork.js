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

  const imageSlideProps = [
    {imagePath: HermitCrab, title: "HERMIT CRAB", description: "Acrylic on canvas", imageSize: '75%'},
    {imagePath: Kasugai, title: "KASUGAI GUMMIES", description: "Watercolor and Prismacolor pencil", imageSize: '100%'},
    {imagePath: ChrysolinaPerforata, title: "CHRYSOLINA PERFORATA", description: "Watercolor and Prismacolor pencil", imageSize: '100%'},
    {imagePath: DanausPlexippus, title: "DANAUS PLEXIPPUS", description: "Watercolor and Prismacolor pencil", imageSize: '100%'},
    {imagePath: Lime, title: "FIG. 1. CITRUS AURANTIIFOLIA", description: "Linocut with ink", imageSize: '100%'},
    {imagePath: Pomegranate, title: "FIG. 2. PUNICA GRANATUM", description: "Linocut with ink", imageSize: '100%'},
    {imagePath: Onion, title: "FIG. 3. ALLIUM CEPA", description: "Linocut with ink", imageSize: '100%'},
    {imagePath: Daruma, title: "DARUMA", description: "Linocut with ink", imageSize: '65%'},
    {imagePath: Heart, title: "FIG. 1. HEART", description: "Watercolor and ink", imageSize: '100%'},
    {imagePath: Brain, title: "FIG. 2. BRAIN", description: "Watercolor and ink", imageSize: '100%'},
    {imagePath: Eyeball, title: "FIG. 3. EYEBALL", description: "Watercolor and ink", imageSize: '100%'},
    {imagePath: Mushroom1, title: "FIG. 1. OCULUS COPRINUS COMATUS", description: "Watercolor and ink", imageSize: '65%'},
    {imagePath: Mushroom2, title: "FIG. 2. OCULUS AMANITA MUSCARIA", description: "Watercolor and ink", imageSize: '65%'},
    {imagePath: Mushroom3, title: "FIG. 3. OCULUS FAVOLASCHIA CALOCERA", description: "Watercolor and ink", imageSize: '65%'},
  ]

  const artworkSlide = <ImageSlide imageSlideProps={imageSlideProps}/>;
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
