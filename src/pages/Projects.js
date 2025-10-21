import LargeContent from '../components/LargeContent';
import SmallContent from '../components/SmallContent.js';
import ImageSlide from '../components/ImageSlide/ImageSlide';
import './Pages.css';
import umekoCover from './images/Umeko/UmekoLogos-02.png';
import kaviCover from './images/Kavi/KaviLogos-06.png';
import elfsterCover from './images/ElfsterRedesign/smartMockup1.jpg';
import viasatCover from './images/Viasat/mockup1.png';
import { useScreenResolution } from '../utils/ScreenSize.tsx';

export const Projects = ({setTab}) => {

  const { isLarge } = useScreenResolution();

  const imagePaths = [
    umekoCover,
    kaviCover,
    elfsterCover,
    viasatCover
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

  const imageTexts = [
    "SEE FULL UMEKO PROJECT",
    "SEE FULL KAVI PROJECT",
    "SEE FULL ELFSTER REDESIGN PROJECT",
    "SEE FULL MY VIASAT PROJECT"
  ]

  const imageLinks = [
    "Umeko",
    "Kavi",
    "ElfsterRedesign",
    "Viasat"
  ]

  const projectSlide = <ImageSlide titles={titles} timeFrames={timeFrames} imagePaths={imagePaths} imageTexts={imageTexts} imageLinks={imageLinks} setTab={setTab}/>;
  if (isLarge) {
    return (
      <LargeContent title={'PROJECTS'} content={projectSlide} />
    );
  }
  else
    return (
      <SmallContent title={'PROJECTS'} content={projectSlide} />
    );
}

export default Projects;
