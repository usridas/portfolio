import './Pages.css';
import ImageSlide from '../components/Images/ImageSlide.js';
import {
    RollWithItMoodBoard,
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
    RollWithItWireframe11,
    RollWithItBanner
} from '../assets/images';
import RollWithItSlideDeck from '../assets/documents/RollWithItSlideDeck.pdf'
import { PlainImage } from '../components/Images/PlainImage.js';
import Button from '../components/Button/Button.js';
import ProjectGrid from '../components/Grid/ProjectGrid.js';
import ColorPalette from '../components/ProjectDetails/ColorPalette.js';

export const RollWithIt = () => {

    const content = <div className='summaryContent'>
        <p>{'This website will be the touchpoint of Roll With It. Roll With It offers Asian baked goods and pastries as well as coffee and tea drinks. They focus on highlighting Asian culture and uplifting the Asian communities and diasporas through food.\n\nThis website’s main features will include:\n• A home page with main features and overview information\n• An “About Us” page\n• A blog page about coffee, tea, baked goods, and Asian culture\n• A menu of in store products with descriptions\n• A checkout system for ordering products online\n• A contact us form'}</p>
        <Button type='Primary' text='SEE FULL SLIDE DECK' link={RollWithItSlideDeck}/>
    </div>

    const sketches = <ImageSlide imageSlideProps={[{title: 'MOODBOARD', imagePath: RollWithItMoodBoard}, {title: 'IDEATION', imagePath: RollWithItSketchbookIdeation}, {title: 'DRAWINGS',imagePath: RollWithItSketchbookDrawing1}, {title: 'DRAWINGS',imagePath: RollWithItSketchbookDrawing2}]}/>;
    const colors = [
        {colorName: 'RUST 300', color: '#E96227', text: 'Hex Code: #E96227\nRGB: 233 98 39\nCMYK: 0% 58% 83% 9%', textColor: 'light'},
        {colorName: 'SUNFLOWER 500', color: '#FFC700', text: 'Hex Code: #FFC700\nRGB: 255 199 0\nCMYK: 0% 22% 100% 0%'},
        {colorName: 'OCEAN 300', color: '#0ACAC9', text: 'Hex Code: #0ACAC9\nRGB: 10 202 201\nCMYK: 95% 0% 0% 21%'},
        {colorName: 'CLOUD 200', color: '#D3D5B9', text: 'Hex Code: #D3D5B9\nRGB: 211 213 185\nCMYK: 1% 0% 13% 16%'},
        {colorName: 'EARTH 300', color: '#A26638', text: 'Hex Code: #A26638\nRGB: 162 102 56\nCMYK: 0% 37% 65% 36%', textColor: 'light'}
    ];
    const design =
            <div className='sectionContainer'>
                {<ColorPalette colors={colors}/>}
                {<PlainImage plainImageProps={{imagePath: RollWithItTypography}}/>}
            </div>;
    const wireframes = <div style={{display: 'flex', width: 'stretch', justifyContent: 'center'}}>
        <ImageSlide imageSlideProps={[
            {title: 'SKETCHED COMPONENTS', imagePath: RollWithItSketchbookComponents},
            {title: 'SKETCHED WIREFRAMES',imagePath: RollWithItSketchbookWireframe1},
            {title: 'SKETCHED WIREFRAMES',imagePath: RollWithItSketchbookWireframe2},
            {title: 'SKETCHED WIREFRAMES', imagePath: RollWithItSketchbookWireframe3},
            {title: 'SKETCHED WIREFRAMES', imagePath: RollWithItSketchbookWireframe4},
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
        ]} imageMaxWidth={true}/>
        </div>;
    const components =
        <div style={{display: 'flex', width: 'stretch', justifyContent: 'center'}}>
            <ImageSlide imageSlideProps={[{title: 'BUTTON SET', imagePath: RollWithItButton}, {title: 'COUNTER SET',imagePath: RollWithItCounter}, {title: 'FILTER SET',imagePath: RollWithItFilter}, {title: 'TEXT INPUT SET', imagePath: RollWithItTextInput}]} imageMaxWidth={true}/>
        </div>;
    const prototype = <div className='columnWith12Gap' style={{alignItems: 'center'}}>
        <div className='desktopMockupContainer'><iframe title='Roll With It Prototype' className='rollWithItPrototype' src="https://embed.figma.com/proto/2AQTimF0QrG3lk8lXFX05C/UXDE5100--Final-Project?node-id=467-223&scaling=scale-down-width&content-scaling=fixed&page-id=467%3A222&starting-point-node-id=467%3A223&embed-host=share&hide-ui=1" allowfullscreen></iframe></div>
        <Button type='Primary' text='SEE PROTOTYPE IN FULL SCREEN' link='https://www.figma.com/proto/2AQTimF0QrG3lk8lXFX05C/UXDE5100--Final-Project?node-id=467-223&t=JzKuZj0eoi342NHi-1&scaling=scale-down-width&content-scaling=fixed&page-id=467%3A222&starting-point-node-id=467%3A223' fullWidth={true}/>
    </div>

    const gridArray = [
        {title: 'OVERVIEW', content: content},
        {title: 'THE VISION', content: sketches},
        {title: 'DESIGN FOUNDATION', content: design},
        {title: 'WIREFRAMES', content: wireframes},
        {title: 'COMPONENTS', content: components},
        {title: 'PROTOTYPE', content: prototype}
    ]

    return (
        <div>
            <div className='bannerWrapper'>
                <img src={RollWithItBanner} alt='Alaska Airlines aircraft'/>
            </div>
            <h1 className='title'>ROLL WITH IT</h1>
            <ProjectGrid gridProps={gridArray} removeBio={true}/>
        </div>
    );
}

export default RollWithIt;
