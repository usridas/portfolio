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
import ColorPalette from '../components/ProjectDetails/ColorPalette.js';
import Grid from '../components/Grid/Grid.js';

export const RollWithIt = () => {

    const content = <div className='summaryContent'>
        <p>{'This website will be the touchpoint of Roll With It. Roll With It offers Asian baked goods and pastries as well as coffee and tea drinks. They focus on highlighting Asian culture and uplifting the Asian communities and diasporas through food.\n\nThis website’s main features will include:\n• A home page with main features and overview information\n• An “About Us” page\n• A blog page about coffee, tea, baked goods, and Asian culture\n• A menu of in store products with descriptions\n• A checkout system for ordering products online\n• A contact us form'}</p>
        <Button type='Primary' text='See full slide deck' link={RollWithItSlideDeck}/>
    </div>

    const sketches = <ImageSlide imageSlideProps={[{title: 'Mood board', imagePath: RollWithItMoodBoard}, {title: 'Ideation', imagePath: RollWithItSketchbookIdeation}, {title: 'Drawings',imagePath: RollWithItSketchbookDrawing1}, {title: 'Drawings',imagePath: RollWithItSketchbookDrawing2}]}/>;
    const colors = [
        {colorName: 'Rust 300', color: '#E96227', text: 'Hex Code: #E96227\nRGB: 233 98 39\nCMYK: 0% 58% 83% 9%', textColor: 'light'},
        {colorName: 'Sunflower 500', color: '#FFC700', text: 'Hex Code: #FFC700\nRGB: 255 199 0\nCMYK: 0% 22% 100% 0%'},
        {colorName: 'Ocean 300', color: '#0ACAC9', text: 'Hex Code: #0ACAC9\nRGB: 10 202 201\nCMYK: 95% 0% 0% 21%'},
        {colorName: 'Cloud 200', color: '#D3D5B9', text: 'Hex Code: #D3D5B9\nRGB: 211 213 185\nCMYK: 1% 0% 13% 16%'},
        {colorName: 'Earth 300', color: '#A26638', text: 'Hex Code: #A26638\nRGB: 162 102 56\nCMYK: 0% 37% 65% 36%', textColor: 'light'}
    ];
    const design =
            <div className='sectionContainer'>
                {<ColorPalette colors={colors}/>}
                {<PlainImage plainImageProps={{imagePath: RollWithItTypography}}/>}
            </div>;
    const wireframes = <div style={{display: 'flex', width: 'stretch', justifyContent: 'center'}}>
        <ImageSlide imageSlideProps={[
            {title: 'Sketched components', imagePath: RollWithItSketchbookComponents},
            {title: 'Sketched wireframes',imagePath: RollWithItSketchbookWireframe1},
            {title: 'Sketched wireframes',imagePath: RollWithItSketchbookWireframe2},
            {title: 'Sketched wireframes', imagePath: RollWithItSketchbookWireframe3},
            {title: 'Sketched wireframes', imagePath: RollWithItSketchbookWireframe4},
            {title: 'Home', imagePath: RollWithItWireframe1},
            {title: 'About Us', imagePath: RollWithItWireframe2},
            {title: 'Products', imagePath: RollWithItWireframe3},
            {title: 'Cart: Step 1', imagePath: RollWithItWireframe4},
            {title: 'Cart: Step 2', imagePath: RollWithItWireframe5},
            {title: 'Cart: Step 3A', imagePath: RollWithItWireframe6},
            {title: 'Cart: Step 3B', imagePath: RollWithItWireframe7},
            {title: 'Cart: Step 4', imagePath: RollWithItWireframe8},
            {title: 'Blog home', imagePath: RollWithItWireframe9},
            {title: 'Blog', imagePath: RollWithItWireframe10},
            {title: 'Contact us', imagePath: RollWithItWireframe11},
        ]} imageMaxWidth={true}/>
        </div>;
    const components =
        <div style={{display: 'flex', width: 'stretch', justifyContent: 'center'}}>
            <ImageSlide imageSlideProps={[
                {title: 'Button set', imagePath: RollWithItButton},
                {title: 'Counter set',imagePath: RollWithItCounter},
                {title: 'Filter set',imagePath: RollWithItFilter},
                {title: 'Text input set', imagePath: RollWithItTextInput}]} imageMaxWidth={true}/>
        </div>;
    const prototype = <div className='columnWith12Gap' style={{alignItems: 'center'}}>
        <div className='desktopMockupContainer'><iframe title='Roll With It Prototype' className='rollWithItPrototype' src="https://embed.figma.com/proto/2AQTimF0QrG3lk8lXFX05C/UXDE5100--Final-Project?node-id=467-223&scaling=scale-down-width&content-scaling=fixed&page-id=467%3A222&starting-point-node-id=467%3A223&embed-host=share&hide-ui=1" allowfullscreen></iframe></div>
        <Button type='Primary' text='See prototype in full screen' link='https://www.figma.com/proto/2AQTimF0QrG3lk8lXFX05C/UXDE5100--Final-Project?node-id=467-223&t=JzKuZj0eoi342NHi-1&scaling=scale-down-width&content-scaling=fixed&page-id=467%3A222&starting-point-node-id=467%3A223' fullWidth={true}/>
    </div>

    const gridArray = [
        {title: 'Overview', content: content, rowType: 'Column'},
        {title: 'The Vision', content: sketches},
        {title: 'Design Foundation', content: design},
        {title: 'Wireframes', content: wireframes},
        {title: 'Components', content: components},
        {title: 'Prototype', content: prototype, rowType: 'Column'}
    ]

    return (
        <div>
            <div className='bannerWrapper'>
                <img src={RollWithItBanner} alt='Alaska Airlines aircraft'/>
            </div>
            <h1 className='title'>Roll With It</h1>
            <Grid gridProps={gridArray}/>
        </div>
    );
}

export default RollWithIt;
