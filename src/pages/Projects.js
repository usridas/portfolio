import LargeContent from '../components/Content/LargeContent.js';
import SmallContent from '../components/Content/SmallContent.js';
import ImageSlide from '../components/ImageSlide/ImageSlide';
import './Pages.css';
import {
  TraderJoesCover,
  UmekoLogo2,
  KaviLogo1,
  ElfsterMockup1,
  ViasatMockup1
} from '../assets/images';
import { useScreenResolution } from '../utils/ScreenSize.tsx';

export const Projects = ({setTab}) => {

  const { isLarge } = useScreenResolution();

  const imageSlideProps = [
    {imagePath: TraderJoesCover, title: "TRADER JOE\'S RESEARCH PROJECT", description: "December 2024", imageText: "SEE FULL RESEARCH PROJECT", imageLink: "TraderJoesResearch", caption: "This was my final research project for GRID 5802 Design Research: Discovery within my Master's program at the Columbus College of Art & Design. During this research, I learned to how to conduct qualitative research through a research plan, interviewing, shadowing, affinity diagramming, journey mapping, and persona development."},
    {imagePath: UmekoLogo2, title: "UMEKO", description: "July 2024", imageText: "SEE FULL UMEKO PROJECT", imageLink: "Umeko", caption: "Umeko is a fictional business project made for design purposes. Umeko is a fun, light-hearted Japanese style cafe which sources tea from Japan. They serve classic teas, as well as unique blends, and boba to cater to both younger and older aficionados."},
    {imagePath: KaviLogo1, title: "KAVI", description: "July 2024", imageText: "SEE FULL KAVI PROJECT", imageLink: "Kavi", caption: "KAVI is a fictional business project made for design purposes. KAVI is a South Asian women owned luxury beauty and self care brand. Rooted in South Asian culture and ayurvedic practices, KAVI strives to make the beauty and self care routine enjoyable and relaxing through all-natural ingredients."},
    {imagePath: ElfsterMockup1, title: "ELFSTER REDESIGN", description: "XXX - XXX", imageText: "SEE FULL ELFSTER REDESIGN PROJECT", imageLink: "ElfsterRedesign", caption: "My objective for this project was to redesign the Elfster gift exchange mobile app to be more user friendly, intuitive, and versatile. Elfster is an app that allows users to create wishlists and groups with friends to organize gift exchanges."},
    {imagePath: ViasatMockup1, title: "VIASAT", description: "June 2021 - November 2023", imageText: "SEE FULL MY VIASAT PROJECT", imageLink: "Viasat", caption: "While I worked at Viasat, my objective was to update the My Viasat application user interface to provide the most useful data to clients while simultaneously being intuitive and aesthetic."},
  ]

  const projectSlide = <ImageSlide imageSlideProps={imageSlideProps} setTab={setTab}/>;
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
