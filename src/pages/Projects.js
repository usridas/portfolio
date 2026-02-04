import LargeContent from '../components/Content/LargeContent.js';
import SmallContent from '../components/Content/SmallContent.js';
import './Pages.css';
import {
  TraderJoesCover,
  UmekoLogo2,
  KaviLogo1,
  RollWithItCover,
  KohiToKochaCover,
  ElfsterCover,
  ViasatCover,
} from '../assets/images';
import { useScreenResolution } from '../utils/ScreenSize.tsx';
import Tag from '../components/Tag/Tag.js';
import ProjectPreview from '../components/Images/ProjectPreview.js';

export const Projects = ({setTab}) => {

  const { isLarge, isSmall } = useScreenResolution();

  const kohiToKochaTags = <div className='projectTags'>
    <Tag type='Design' text='FIGMA'/>
    <Tag type='Design' text='MOBILE APP'/>
    <Tag type='Research' text='FLOW CHARTS'/>
  </div>

  const rollWithItTags = <div className='projectTags'>
    <Tag type='Design' text='FIGMA'/>
    <Tag type='Design' text='WEB APP'/>
  </div>

  const traderJoesTags = <div className='projectTags'>
    <Tag type='Research' text='USER INTERVIEWING'/>
    <Tag type='Research' text='AFFINITY DIAGRAMMING'/>
    <Tag type='Research' text='JOURNEY MAPPING'/>
    <Tag type='Research' text='PERSONA DEVELOPMENT'/>
  </div>

  const umekoKaviTags = <div className='projectTags'>
    <Tag type='Design' text='ADOBE ILLUSTRATOR'/>
  </div>

  const elfsterTags = <div className='projectTags'>
    <Tag type='Design' text='FIGMA'/>
  </div>

  const viasatTags = <div className='projectTags'>
    <Tag type='Design' text='FIGMA'/>
    <Tag type='Software' text='JAVASCRIPT/TYPESCRIPT'/>
    <Tag type='Software' text='HTML/CSS/SCSS'/>
    <Tag type='Software' text='REACT'/>
    <Tag type='Software' text='NODE.JS'/>
    <Tag type='Software' text='GITHUB'/>
  </div>

  const imageSlideProps = [
    {imagePath: KohiToKochaCover, title: "KŌHĪ TO KŌCHA", description: isSmall ? "Jan 2026" : "January 2026", imageText: "SEE FULL DESIGN PROJECT", imageLink: "KohiToKocha", tags: kohiToKochaTags, caption: "This was a personal project I made between semesters of my grad program. I wanted to tie my new design learnings along with my Japanese language studies. This app design allowed me to explore mobile app design and interactions."},
    {imagePath: RollWithItCover, title: "ROLL WITH IT", description: isSmall ? "Dec 2025" :"December 2025", imageText: "SEE FULL DESIGN PROJECT", imageLink: "RollWithIt", tags: rollWithItTags, caption: "This was my final design project for Visual Design Fundamentals within my Master's program at the Columbus College of Art & Design. During this project, I used sketching and Figma to create a website for a fictional Asian bakery called Roll With It."},
    {imagePath: TraderJoesCover, title: "TRADER JOE\'S RESEARCH", description: isSmall ? "Dec 2025" :"December 2025", imageText: "SEE FULL RESEARCH PROJECT", imageLink: "TraderJoesResearch", tags: traderJoesTags, caption: "This was my final research project for Design Research: Discovery within my Master's program at the Columbus College of Art & Design. I learned to how to conduct, analyze and present qualitative research."},
    {imagePath: UmekoLogo2, title: "UMEKO", description: isSmall ? "Jul 2024" :"July 2024", imageText: "SEE FULL UMEKO PROJECT", imageLink: "Umeko", tags: umekoKaviTags, caption: "Umeko is a fictional business project made for design purposes. Umeko is a fun, light-hearted Japanese style cafe which sources tea from Japan. They serve classic teas, as well as unique blends, and boba to cater to both younger and older aficionados."},
    {imagePath: KaviLogo1, title: "KAVI", description: isSmall ? "Jul 2024" :"July 2024", imageText: "SEE FULL KAVI PROJECT", imageLink: "Kavi", tags: umekoKaviTags, caption: "KAVI is a fictional business project made for design purposes. KAVI is a South Asian women owned luxury beauty and self care brand. KAVI strives to make the beauty and self care routine enjoyable and relaxing through all-natural ingredients."},
    {imagePath: ElfsterCover, title: "ELFSTER REDESIGN", imageText: "SEE FULL ELFSTER REDESIGN PROJECT", imageLink: "ElfsterRedesign", tags: elfsterTags, caption: "My objective for this project was to redesign the Elfster gift exchange mobile app to be more user friendly, intuitive, and versatile. Elfster is an app that allows users to create wishlists and groups with friends to organize gift exchanges."},
    {imagePath: ViasatCover, title: "VIASAT", description: isSmall ? "Jun 2021 - Nov 2023" :"June 2021 - November 2023", imageText: "SEE FULL MY VIASAT PROJECT", imageLink: "Viasat", tags: viasatTags, caption: "While I worked at Viasat, my objective was to update the My Viasat application user interface to provide the most useful data to clients while simultaneously being intuitive and aesthetic."},
  ]

  const projectSlide = <ProjectPreview imageSlideProps={imageSlideProps} setTab={setTab}/>;
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
