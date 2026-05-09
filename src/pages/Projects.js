import ImageSlide from '../components/Images/ImageSlide.js';
import './Pages.css';
import {
  AlaskaAirlinesResearchCover,
  TraderJoesCover,
  UmekoLogo2,
  KaviLogo1,
  RollWithItCover,
  KohiToKochaCover,
  ElfsterCover,
  ViasatCover,
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
import Tag from '../components/Tag/Tag.js';
import ProjectPreview from '../components/Images/ProjectPreview.js';
import Grid from '../components/Grid/Grid.js';

export const Projects = ({setTab}) => {

  const { isSmall } = useScreenResolution();

  const alaskaAirlinesTags = <div className='projectTags'>
    <Tag type='Research' text='COMPETITIVE ANALYSIS'/>
    <Tag type='Research' text='USABILITY TESTING'/>
    <Tag type='Research' text='AFFINITY DIAGRAMMING'/>
  </div>

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

  const projectSlideProps = [
    {imagePath: AlaskaAirlinesResearchCover, title: "ALASKA AIRLINES RESEARCH", description: "May 2026", imageText: "SEE FULL DESIGN PROJECT", imageLink: "AlaskaAirlinesResearch", tags: alaskaAirlinesTags, caption: "This was my final research project for Design Research Feasibility within my Master's program at the Columbus College of Art & Design. I conducted a competitive analysis as well as usability tests to create some recommendations for the Alaska Airlines website booking flow."},
    {imagePath: KohiToKochaCover, title: "KOHI TO KOCHA", description: isSmall ? "Jan 2026" : "January 2026", imageText: "SEE FULL DESIGN PROJECT", imageLink: "KohiToKocha", tags: kohiToKochaTags, caption: "This was a personal project I made between semesters of my grad program. I wanted to tie my new design learnings along with my Japanese language studies. This app design allowed me to explore mobile app design and interactions."},
    {imagePath: RollWithItCover, title: "ROLL WITH IT", description: isSmall ? "Dec 2025" :"December 2025", imageText: "SEE FULL DESIGN PROJECT", imageLink: "RollWithIt", tags: rollWithItTags, caption: "This was my final design project for Visual Design Fundamentals within my Master's program at the Columbus College of Art & Design. During this project, I used sketching and Figma to create a website for a fictional Asian bakery called Roll With It."},
    {imagePath: TraderJoesCover, title: "TRADER JOE'S RESEARCH", description: isSmall ? "Dec 2025" :"December 2025", imageText: "SEE FULL RESEARCH PROJECT", imageLink: "TraderJoesResearch", tags: traderJoesTags, caption: "This was my final research project for Design Research: Discovery within my Master's program at the Columbus College of Art & Design. I learned to how to conduct, analyze and present qualitative research."},
    {imagePath: UmekoLogo2, title: "UMEKO", description: isSmall ? "Jul 2024" :"July 2024", imageText: "SEE FULL UMEKO PROJECT", imageLink: "Umeko", tags: umekoKaviTags, caption: "Umeko is a fictional business project made for design purposes. Umeko is a fun, light-hearted Japanese style cafe which sources tea from Japan. They serve classic teas, as well as unique blends, and boba to cater to both younger and older aficionados."},
    {imagePath: KaviLogo1, title: "KAVI", description: isSmall ? "Jul 2024" :"July 2024", imageText: "SEE FULL KAVI PROJECT", imageLink: "Kavi", tags: umekoKaviTags, caption: "KAVI is a fictional business project made for design purposes. KAVI is a South Asian women owned luxury beauty and self care brand. KAVI strives to make the beauty and self care routine enjoyable and relaxing through all-natural ingredients."},
    {imagePath: ElfsterCover, title: "ELFSTER REDESIGN", imageText: "SEE FULL ELFSTER REDESIGN PROJECT", imageLink: "ElfsterRedesign", tags: elfsterTags, caption: "My objective for this project was to redesign the Elfster gift exchange mobile app to be more user friendly, intuitive, and versatile. Elfster is an app that allows users to create wishlists and groups with friends to organize gift exchanges."},
    {imagePath: ViasatCover, title: "VIASAT", description: isSmall ? "Jun 2021 - Nov 2023" :"June 2021 - November 2023", imageText: "SEE FULL MY VIASAT PROJECT", imageLink: "Viasat", tags: viasatTags, caption: "While I worked at Viasat, my objective was to update the My Viasat application user interface to provide the most useful data to clients while simultaneously being intuitive and aesthetic."},
  ]

  const artworkSlideProps = [
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

  const artworkSlide = <ImageSlide imageSlideProps={artworkSlideProps}/>;
  const projectSlide = <ProjectPreview imageSlideProps={projectSlideProps} setTab={setTab}/>;

  const gridArray = [
      {title: 'PROJECTS', content: projectSlide},
      {title: 'ARTWORK', content: artworkSlide},
  ]

  return (
      <Grid gridProps={gridArray}/>
  )
}

export default Projects;
