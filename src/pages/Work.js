import ImageSlide from '../components/Images/ImageSlide.js';
import './Pages.scss';
import {
  AlaskaAirlinesResearchCover,
  TraderJoesCover,
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
  Mushroom3,
  KohiToKochaVideoCover,
  RollWithItVideoCover,
  UmekoMockup2,
  KaviMockup4,
} from '../assets/images/index.js';
import { useScreenResolution } from '../utils/ScreenSize.tsx';
import Tag from '../components/Tag/Tag.js';
import ProjectPreview from '../components/Images/ProjectPreview.js';
import Grid from '../components/Grid/Grid.js';
import SlideIndicator from '../components/SlideIndicator/SlideIndicator.js';

export const Work = () => {

  const { isXSmall, isSmall } = useScreenResolution();

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

  const artworkSlideProps = [
    {imagePath: HermitCrab, title: "Hermit crab", description: "Acrylic on canvas"},
    {imagePath: Kasugai, title: "Kasugai gummies", description: "Watercolor and Prismacolor pencil"},
    {imagePath: ChrysolinaPerforata, title: "Chrysolina perforata", description: "Watercolor and Prismacolor pencil"},
    {imagePath: DanausPlexippus, title: "Danaus plexippus", description: "Watercolor and Prismacolor pencil"},
    {imagePath: Lime, title: "Fig. 1. Citrus aurantiifolia", description: "Linocut with ink"},
    {imagePath: Pomegranate, title: "Fig. 2. Punica granatum", description: "Linocut with ink"},
    {imagePath: Onion, title: "Fig. 3. Allium cepa", description: "Linocut with ink"},
    {imagePath: Daruma, title: "Daruma", description: "Linocut with ink"},
    {imagePath: Heart, title: "Fig. 1. Heart", description: "Watercolor and ink"},
    {imagePath: Brain, title: "Fig. 2. Brain", description: "Watercolor and ink"},
    {imagePath: Eyeball, title: "Fig. 3. Eyeball", description: "Watercolor and ink"},
    {imagePath: Mushroom1, title: "Fig. 1. Oculus coprinus comatus", description: "Watercolor and ink"},
    {imagePath: Mushroom2, title: "Fig. 2. Oculus amanita muscaria", description: "Watercolor and ink"},
    {imagePath: Mushroom3, title: "Fig. 3. Oculus favolaschia calocera", description: "Watercolor and ink"},
  ]

  const artworkSlide = <ImageSlide imageSlideProps={artworkSlideProps}/>;

  const gridArray = [
      {
        titleContent:
          <div>
            <h1 style={{marginBottom: '24px'}}>Alaska Airlines Case Study</h1>
            {(!isXSmall && !isSmall) && <div className='bannerDataContainer'>
                <div className='bannerData'>
                    <p style={{color: '#6D6C65'}}>Client</p>
                    <p style={{fontWeight: '700'}}>Alaska Airlines</p>
                </div>
                <div className='bannerData'>
                    <p style={{color: '#6D6C65'}}>Timeline</p>
                    <p style={{fontWeight: '700'}}>January - May 2026</p>
                </div>
                <div className='bannerData'>
                    <p style={{color: '#6D6C65'}}>Industry</p>
                    <p style={{fontWeight: '700'}}>Airlines</p>
                </div>
                <div className='bannerData'>
                    <p style={{color: '#6D6C65'}}>Role</p>
                    <p style={{fontWeight: '700'}}>UX Researcher</p>
                </div>
            </div>}
          </div>,
        content: <ProjectPreview imageSlideProps={[{imagePath: AlaskaAirlinesResearchCover, imageLink: "/AlaskaAirlinesResearch", imageText: 'See full project', tags: alaskaAirlinesTags}]}/>,
        },
      {
        titleContent:
          <div>
            <h1 style={{marginBottom: '24px'}}>Kohi To Kocha</h1>
            {(!isXSmall && !isSmall) && <div className='bannerDataContainer'>
                <div className='bannerData'>
                    <p style={{color: '#6D6C65'}}>Timeline</p>
                    <p style={{fontWeight: '700'}}>December 2025 - January 2026</p>
                </div>
                <div className='bannerData'>
                    <p style={{color: '#6D6C65'}}>Industry</p>
                    <p style={{fontWeight: '700'}}>Language Learning</p>
                </div>
                <div className='bannerData'>
                    <p style={{color: '#6D6C65'}}>Role</p>
                    <p style={{fontWeight: '700'}}>UI Designer</p>
                </div>
            </div>}
          </div>,
          content: <ProjectPreview imageSlideProps={[{videoPath: KohiToKochaVideoCover, imageLink: "/KohiToKocha", imageText: 'See full project', tags: figmaProjectTags, background: '#97DBB7'}]}/>,
          
        },
      {
        titleContent:
          <div>
            <h1 style={{marginBottom: '24px'}}>Roll With It</h1>
            {(!isXSmall && !isSmall) && <div className='bannerDataContainer'>
                <div className='bannerData'>
                    <p style={{color: '#6D6C65'}}>Timeline</p>
                    <p style={{fontWeight: '700'}}>August - December 2025</p>
                </div>
                <div className='bannerData'>
                    <p style={{color: '#6D6C65'}}>Industry</p>
                    <p style={{fontWeight: '700'}}>Food/Service</p>
                </div>
                <div className='bannerData'>
                    <p style={{color: '#6D6C65'}}>Role</p>
                    <p style={{fontWeight: '700'}}>UI Designer</p>
                </div>
            </div>}
          </div>,
          content: <ProjectPreview imageSlideProps={[{videoPath: RollWithItVideoCover, imageLink: "/RollWithIt", imageText: 'See full project', tags: figmaProjectTags, background: 'linear-gradient(180deg, #9CEBEB 0%, #FBECB6 100%)'}]}/>,
          
        },
      {
        titleContent:
          <div>
            <h1 style={{marginBottom: '24px'}}>Trader Joe's Case Study</h1>
            {(!isXSmall && !isSmall) && <div className='bannerDataContainer'>
                <div className='bannerData'>
                    <p style={{color: '#6D6C65'}}>Client</p>
                    <p style={{fontWeight: '700'}}>Trader Joe's</p>
                </div>
                <div className='bannerData'>
                    <p style={{color: '#6D6C65'}}>Timeline</p>
                    <p style={{fontWeight: '700'}}>August - December 2025</p>
                </div>
                <div className='bannerData'>
                    <p style={{color: '#6D6C65'}}>Industry</p>
                    <p style={{fontWeight: '700'}}>Food/Service</p>
                </div>
                <div className='bannerData'>
                    <p style={{color: '#6D6C65'}}>Role</p>
                    <p style={{fontWeight: '700'}}>UX Researcher</p>
                </div>
            </div>}
          </div>,
          content: <ProjectPreview imageSlideProps={[{imagePath: TraderJoesCover, imageLink: "/TraderJoesResearch", imageText: 'See full project', tags: traderJoesTags, backgroundColor: '#EAF3FA'}]}/>,
          
        },
      {
        titleContent:
          <div>
            <h1 style={{marginBottom: '24px'}}>Umeko</h1>
            {(!isXSmall && !isSmall) && <div className='bannerDataContainer'>
                <div className='bannerData'>
                    <p style={{color: '#6D6C65'}}>Timeline</p>
                    <p style={{fontWeight: '700'}}>July 2024</p>
                </div>
                <div className='bannerData'>
                    <p style={{color: '#6D6C65'}}>Industry</p>
                    <p style={{fontWeight: '700'}}>Food/Service</p>
                </div>
                <div className='bannerData'>
                    <p style={{color: '#6D6C65'}}>Role</p>
                    <p style={{fontWeight: '700'}}>Brand Designer</p>
                </div>
            </div>}
          </div>,
          content: <ProjectPreview imageSlideProps={[{imagePath: UmekoMockup2, imageLink: "/Umeko", imageText: 'See full project', tags: umekoKaviTags, backgroundColor: '#EAF3FA'}]}/>,
          
        },
      {
        titleContent:
          <div>
            <h1 style={{marginBottom: '24px'}}>Kavi</h1>
            {(!isXSmall && !isSmall) && <div className='bannerDataContainer'>
                <div className='bannerData'>
                    <p style={{color: '#6D6C65'}}>Timeline</p>
                    <p style={{fontWeight: '700'}}>July 2024</p>
                </div>
                <div className='bannerData'>
                    <p style={{color: '#6D6C65'}}>Industry</p>
                    <p style={{fontWeight: '700'}}>Luxury Goods</p>
                </div>
                <div className='bannerData'>
                    <p style={{color: '#6D6C65'}}>Role</p>
                    <p style={{fontWeight: '700'}}>Brand Designer</p>
                </div>
            </div>}
          </div>,
          content: <ProjectPreview imageSlideProps={[{imagePath: KaviMockup4, imageLink: "/Kavi", imageText: 'See full project', tags: umekoKaviTags, backgroundColor: '#EAF3FA'}]}/>,
          
        },
      {title: 'Artwork', content: artworkSlide, },
  ]

  return (
    <div>
      <Grid gridProps={gridArray} maxWidth='none' snap/>
      <SlideIndicator sectionIds={gridArray.map((item, index) => `slide-${index}`)} />
    </div>
  )
}

export default Work;
