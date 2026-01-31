import LargeContent from '../components/Content/LargeContent.js';
import SmallContent from '../components/Content/SmallContent.js';
import ImageSlide from '../components/Images/ImageSlide.js';
import './Pages.css';
import {
  TraderJoesCover,
  UmekoLogo2,
  KaviLogo1,
  ElfsterMockup1,
  ViasatMockup1,
  RollWithItCover,
  KohiToKochaCover,
} from '../assets/images';
import { useScreenResolution } from '../utils/ScreenSize.tsx';

export const Projects = ({setTab}) => {

  const { isLarge } = useScreenResolution();

  const imageSlideProps = [
    {imagePath: KohiToKochaCover, title: "KŌHĪ TO KŌCHA DESIGN PROJECT", description: "January 2026", imageText: "SEE FULL DESIGN PROJECT", imageLink: "KohiToKocha", caption: "This was a personal project I made between semesters of my grad program. I wanted to tie my new design learnings along with my Japanese language studies. This app design allowed me to explore mobile app design and interactions."},
    {imagePath: RollWithItCover, title: "ROLL WITH IT DESIGN PROJECT", description: "December 2025", imageText: "SEE FULL DESIGN PROJECT", imageLink: "RollWithIt", caption: "This was my final design project for Visual Design Fundamentals within my Master's program at the Columbus College of Art & Design. During this project, I used sketching and Figma to create a website for a fictional Asian bakery called Roll With It."},
    {imagePath: TraderJoesCover, title: "TRADER JOE\'S RESEARCH PROJECT", description: "December 2025", imageText: "SEE FULL RESEARCH PROJECT", imageLink: "TraderJoesResearch", caption: "This was my final research project for Design Research: Discovery within my Master's program at the Columbus College of Art & Design. I learned to how to conduct, analyze and present qualitative research."},
    {imagePath: UmekoLogo2, title: "UMEKO", description: "July 2024", imageText: "SEE FULL UMEKO PROJECT", imageLink: "Umeko", caption: "Umeko is a fictional business project made for design purposes. Umeko is a fun, light-hearted Japanese style cafe which sources tea from Japan. They serve classic teas, as well as unique blends, and boba to cater to both younger and older aficionados."},
    {imagePath: KaviLogo1, title: "KAVI", description: "July 2024", imageText: "SEE FULL KAVI PROJECT", imageLink: "Kavi", caption: "KAVI is a fictional business project made for design purposes. KAVI is a South Asian women owned luxury beauty and self care brand. KAVI strives to make the beauty and self care routine enjoyable and relaxing through all-natural ingredients."},
    {imagePath: ElfsterMockup1, title: "ELFSTER REDESIGN", imageText: "SEE FULL ELFSTER REDESIGN PROJECT", imageLink: "ElfsterRedesign", caption: "My objective for this project was to redesign the Elfster gift exchange mobile app to be more user friendly, intuitive, and versatile. Elfster is an app that allows users to create wishlists and groups with friends to organize gift exchanges."},
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
