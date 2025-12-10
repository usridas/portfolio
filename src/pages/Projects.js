import LargeContent from '../components/Content/LargeContent.js';
import SmallContent from '../components/Content/SmallContent.js';
import ImageSlide from '../components/ImageSlide/ImageSlide';
import './Pages.css';
import {
  UmekoLogo2,
  KaviLogo1,
  ElfsterMockup1,
  ViasatMockup1
} from '../assets/images';
import { useScreenResolution } from '../utils/ScreenSize.tsx';

export const Projects = ({setTab}) => {

  const { isLarge } = useScreenResolution();

  const imagePaths = [
    UmekoLogo2,
    KaviLogo1,
    ElfsterMockup1,
    ViasatMockup1
  ];

  const titles = [
    "UMEKO",
    "KAVI",
    "ELFSTER REDESIGN",
    "VIASAT"
  ]

  const descriptions = [
    "July 2024",
    "July 2024",
    "XXX - XXX",
    "June 2021 - November 2023"
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

  const projectSlide = <ImageSlide titles={titles} descriptions={descriptions} imagePaths={imagePaths} imageTexts={imageTexts} imageLinks={imageLinks} setTab={setTab}/>;
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
