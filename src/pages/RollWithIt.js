import { useScreenResolution } from '../utils/ScreenSize.tsx';
import './Pages.css';
import ImageSlide from '../components/Images/ImageSlide.js';
import {
    RollWithItMoodBoard,
    RollWithItColors,
    RollWithItTypography,
    RollWithItButton,
    RollWithItCounter,
    RollWithItFilter,
    RollWithItTextInput,
    RollWithItSketchbookIdeation,
    RollWithItSketchbookDrawing1,
    RollWithItSketchbookDrawing2,
    RollWithItSketchbookComponents,
    RollWithItSketchbookWireframe1,
    RollWithItSketchbookWireframe2,
    RollWithItSketchbookWireframe3,
    RollWithItSketchbookWireframe4,
    RollWithItWireframe1,
    RollWithItWireframe2,
    RollWithItWireframe3,
    RollWithItWireframe4,
    RollWithItWireframe5,
    RollWithItWireframe6,
    RollWithItWireframe7,
    RollWithItWireframe8,
    RollWithItWireframe9,
    RollWithItWireframe10,
    RollWithItWireframe11
} from '../assets/images';
import RollWithItSlideDeck from '../assets/documents/RollWithItSlideDeck.pdf'
import { PlainImage } from '../components/Images/PlainImage.js';
import Button from '../components/Button/Button.js';
import Tag from '../components/Tag/Tag.js';
import Grid from '../components/Grid/Grid.js';

export const RollWithIt = ({}) => {

    const { isLarge } = useScreenResolution();
    const rollWithItTags = <div className='tags'>
        <Tag type='Design' text='FIGMA'/>
        <Tag type='Design' text='WEB APP'/>
      </div>
    const content = <div className='summaryContent'>
        {rollWithItTags}
        <p style={{marginBottom: '24px'}}>{'This website will be the touchpoint of Roll With It. Roll With It offers Asian baked goods and pastries as well as coffee and tea drinks. They focus on highlighting Asian culture and uplifting the Asian communities and diasporas through food.\n\nThis website’s main features will include:\n• A home page with main features and overview information\n• An “About Us” page\n• A blog page about coffee, tea, baked goods, and Asian culture\n• A menu of in store products with descriptions\n• A checkout system for ordering products online\n• A contact us form'}</p>
        <Button type='Primary' text='SEE FULL SLIDE DECK' link={RollWithItSlideDeck}/>
    </div>

    const sketches = <ImageSlide imageSlideProps={[{title: 'IDEATION', imagePath: RollWithItSketchbookIdeation}, {title: 'DRAWINGS',imagePath: RollWithItSketchbookDrawing1}, {title: 'DRAWINGS',imagePath: RollWithItSketchbookDrawing2}]}/>;
    const moodboard = <PlainImage plainImageProps={{imagePath: RollWithItMoodBoard}}/>;
    const colors = <PlainImage plainImageProps={{imagePath: RollWithItColors}}/>;
    const typography = <PlainImage plainImageProps={{imagePath: RollWithItTypography}}/>;
    const wireframes1 = <ImageSlide imageSlideProps={[
        {title: 'COMPONENTS', imagePath: RollWithItSketchbookComponents},
        {title: 'WIREFRAMES',imagePath: RollWithItSketchbookWireframe1},
        {title: 'WIREFRAMES',imagePath: RollWithItSketchbookWireframe2},
        {title: 'WIREFRAMES', imagePath: RollWithItSketchbookWireframe3},
        {title: 'WIREFRAMES', imagePath: RollWithItSketchbookWireframe4}
    ]}/>;
    const wireframes2 = <ImageSlide imageSlideProps={[
        {title: 'HOME', imagePath: RollWithItWireframe1},
        {title: 'ABOUT US', imagePath: RollWithItWireframe2},
        {title: 'PRODUCTS', imagePath: RollWithItWireframe3},
        {title: 'CART: STEP 1', imagePath: RollWithItWireframe4},
        {title: 'CART: STEP 2', imagePath: RollWithItWireframe5},
        {title: 'CART: STEP 3A', imagePath: RollWithItWireframe6},
        {title: 'CART: STEP 3B', imagePath: RollWithItWireframe7},
        {title: 'CART: STEP 4', imagePath: RollWithItWireframe8},
        {title: 'BLOG HOME', imagePath: RollWithItWireframe9},
        {title: 'BLOG', imagePath: RollWithItWireframe10},
        {title: 'CONTACT US', imagePath: RollWithItWireframe11},
    ]}/>;
    const components = <ImageSlide imageSlideProps={[{title: 'BUTTON SET', imagePath: RollWithItButton}, {title: 'COUNTER SET',imagePath: RollWithItCounter}, {title: 'FILTER SET',imagePath: RollWithItFilter}, {title: 'TEXT INPUT SET', imagePath: RollWithItTextInput}]}/>;
    const prototype = <div>
        <iframe className='rollWithItPrototype' src="https://embed.figma.com/proto/2AQTimF0QrG3lk8lXFX05C/UXDE5100--Final-Project?node-id=467-223&scaling=scale-down-width&content-scaling=fixed&page-id=467%3A222&starting-point-node-id=467%3A223&embed-host=share" allowfullscreen></iframe>
        <Button type='Primary' text='SEE PROTOTYPE IN FULL SCREEN' link='https://www.figma.com/proto/2AQTimF0QrG3lk8lXFX05C/UXDE5100--Final-Project?node-id=467-223&t=JzKuZj0eoi342NHi-1&scaling=scale-down-width&content-scaling=fixed&page-id=467%3A222&starting-point-node-id=467%3A223'/>
    </div>

    const gridArray = [
        {title: 'ROLL WITH IT', content: content},
        {title: 'SKETCHES', content: sketches},
        {title: 'MOOD BOARD', content: moodboard},
        {title: 'COLORS', content: colors},
        {title: 'TYPOGRAPHY', content: typography},
        {title: 'SKETCHED WIREFRAMES', content: wireframes1},
        {title: 'DIGITIZED WIREFRAMES', content: wireframes2},
        {title: 'COMPONENTS', content: components},
        {title: 'PROTOTYPE', content: prototype}
    ]

    return (
        <Grid gridProps={gridArray} removeBio={true}/>
    );
}

export default RollWithIt;
