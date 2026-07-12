import ImageSlide from '../components/Images/ImageSlide.js';
import './Pages.scss';
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

export const Projects = () => {

  const { isSmall } = useScreenResolution();

  const alaskaAirlinesTags = <div className='projectTags'>
    <Tag type='Research' text='Competitive analysis'/>
    <Tag type='Research' text='Usability testing'/>
    <Tag type='Research' text='Affinity diagramming'/>
  </div>

  const figmaProjectTags = <div className='projectTags'>
    <Tag type='Design' text='Figma'/>
  </div>

  const traderJoesTags = <div className='projectTags'>
    <Tag type='Research' text='User interviewing'/>
    <Tag type='Research' text='Affinity diagramming'/>
    <Tag type='Research' text='Journey mapping'/>
    <Tag type='Research' text='Persona development'/>
  </div>

  const umekoKaviTags = <div className='projectTags'>
    <Tag type='Design' text='Adobe Illustrator'/>
  </div>

  const viasatTags = <div className='projectTags'>
    <Tag type='Design' text='Figma'/>
    <Tag type='Software' text='Javascript/Typescript'/>
    <Tag type='Software' text='HTML/CSS/SCSS'/>
    <Tag type='Software' text='React'/>
    <Tag type='Software' text='Node.js'/>
    <Tag type='Software' text='Github'/>
  </div>

  const projectSlideProps = [
    {imagePath: AlaskaAirlinesResearchCover, title: "Alaska Airlines Case Study", description: "May 2026", imageLink: "/AlaskaAirlinesResearch", imageText: 'See full project', tags: alaskaAirlinesTags, caption: "This was my final research project for Design Research Feasibility within my Master's program at the Columbus College of Art & Design. I conducted a competitive analysis as well as usability tests to create some recommendations for the Alaska Airlines website booking flow."},
    {imagePath: KohiToKochaCover, title: "Kohi To Kocha", description: isSmall ? "Jan 2026" : "January 2026", imageLink: "/KohiToKocha", imageText: 'See full project', tags: figmaProjectTags, caption: "This was a personal project I made between semesters of my grad program. I wanted to tie my new design learnings along with my Japanese language studies. This app design allowed me to explore mobile app design and interactions."},
    {imagePath: RollWithItCover, title: "Roll With It", description: isSmall ? "Dec 2025" :"December 2025", imageLink: "/RollWithIt", imageText: 'See full project', tags: figmaProjectTags, caption: "This was my final design project for Visual Design Fundamentals within my Master's program at the Columbus College of Art & Design. During this project, I used sketching and Figma to create a website for a fictional Asian bakery called Roll With It."},
    {imagePath: TraderJoesCover, title: "Trader Joe's Case Study", description: isSmall ? "Dec 2025" :"December 2025", imageLink: "/TraderJoesResearch", imageText: 'See full project', tags: traderJoesTags, caption: "This was my final research project for Design Research: Discovery within my Master's program at the Columbus College of Art & Design. I learned to how to conduct, analyze and present qualitative research."},
    {imagePath: UmekoLogo2, title: "Umeko", description: isSmall ? "Jul 2024" :"July 2024", imageLink: "/Umeko", tags: umekoKaviTags, imageText: 'See full project', caption: "Umeko is a fictional business project made for design purposes. Umeko is a fun, light-hearted Japanese style cafe which sources tea from Japan. They serve classic teas, as well as unique blends, and boba to cater to both younger and older aficionados."},
    {imagePath: KaviLogo1, title: "KAVI", description: isSmall ? "Jul 2024" :"July 2024", imageLink: "/Kavi", imageText: 'See full project', tags: umekoKaviTags, caption: "KAVI is a fictional business project made for design purposes. KAVI is a South Asian women owned luxury beauty and self care brand. KAVI strives to make the beauty and self care routine enjoyable and relaxing through all-natural ingredients."},
    {imagePath: ElfsterCover, title: "Elfster Redesign", imageLink: "/ElfsterRedesign", imageText: 'See full project', tags: figmaProjectTags, caption: "My objective for this project was to redesign the Elfster gift exchange mobile app to be more user friendly, intuitive, and versatile. Elfster is an app that allows users to create wishlists and groups with friends to organize gift exchanges."},
    {imagePath: ViasatCover, title: "Viasat", description: isSmall ? "Jun 2021 - Nov 2023" :"June 2021 - November 2023", imageLink: "/Viasat", imageText: 'See full project', tags: viasatTags, caption: "While I worked at Viasat, my objective was to update the My Viasat application user interface to provide the most useful data to clients while simultaneously being intuitive and aesthetic."},
  ]

  const artworkSlideProps = [
    {imagePath: HermitCrab, title: "Hermit crab", description: "Acrylic on canvas", imageSize: '80%'},
    {imagePath: Kasugai, title: "Kasugai gummies", description: "Watercolor and Prismacolor pencil", imageSize: '100%'},
    {imagePath: ChrysolinaPerforata, title: "Chrysolina perforata", description: "Watercolor and Prismacolor pencil", imageSize: '100%'},
    {imagePath: DanausPlexippus, title: "Danaus plexippus", description: "Watercolor and Prismacolor pencil", imageSize: '100%'},
    {imagePath: Lime, title: "Fig. 1. Citrus aurantiifolia", description: "Linocut with ink", imageSize: '100%'},
    {imagePath: Pomegranate, title: "Fig. 2. Punica granatum", description: "Linocut with ink", imageSize: '100%'},
    {imagePath: Onion, title: "Fig. 3. Allium cepa", description: "Linocut with ink", imageSize: '100%'},
    {imagePath: Daruma, title: "Daruma", description: "Linocut with ink", imageSize: '65%'},
    {imagePath: Heart, title: "Fig. 1. Heart", description: "Watercolor and ink", imageSize: '100%'},
    {imagePath: Brain, title: "Fig. 2. Brain", description: "Watercolor and ink", imageSize: '100%'},
    {imagePath: Eyeball, title: "Fig. 3. Eyeball", description: "Watercolor and ink", imageSize: '100%'},
    {imagePath: Mushroom1, title: "Fig. 1. Oculus coprinus comatus", description: "Watercolor and ink", imageSize: '65%'},
    {imagePath: Mushroom2, title: "Fig. 2. Oculus amanita muscaria", description: "Watercolor and ink", imageSize: '65%'},
    {imagePath: Mushroom3, title: "Fig. 3. Oculus favolaschia calocera", description: "Watercolor and ink", imageSize: '65%'},
  ]

  const artworkSlide = <ImageSlide imageSlideProps={artworkSlideProps}/>;
  const projectSlide = <ProjectPreview imageSlideProps={projectSlideProps}/>;

  const gridArray = [
      {title: 'Projects', content: projectSlide},
      {title: 'Artwork', content: artworkSlide},
  ]

  return (
      <Grid gridProps={gridArray}/>
  )
}

export default Projects;
