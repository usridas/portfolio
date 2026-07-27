import './Pages.scss';
import ImageSlide from '../components/Images/ImageSlide.js';
import {
    RollWithItButton,
    RollWithItCounter,
    RollWithItFilter,
    RollWithItTextInput,
    RollWithItSketchbookDrawing1,
    RollWithItSketchbookDrawing2,
    RollWithItSketchbookDrawing3,
    RollWithItSketchbookWireframe1,
    RollWithItSketchbookWireframe2,
    RollWithItSketchbookWireframe3,
    RollWithItSketchbookWireframe4,
    RollWithItBanner2,
    RollWithItSketchbookDrawing4,
    RollWithItBanner3,
    RollWithItBanner4,
    RollWithItInspiration
} from '../assets/images';
import RollWithItSlideDeck from '../assets/documents/RollWithItSlideDeck.pdf'
import Button from '../components/Button/Button.js';
import ColorPalette from '../components/ProjectDetails/ColorPalette.js';
import Grid from '../components/Grid/Grid.js';
import Fonts from '../components/ProjectDetails/Fonts.js';
import { useScreenResolution } from '../utils/ScreenSize.tsx';

export const RollWithIt = () => {
    const { isXSmall, isSmall } = useScreenResolution();
    const isMobile = isSmall || isXSmall;

    const summaryContent =
        <div className='columnWith24Gap'>
            <h2>This website will be the touchpoint of Roll With It, an Asian bakery. Roll With It offers baked goods and pastries as well as coffee and tea drinks. <span style={{color: '#2519D2'}}>They focus on highlighting Asian culture and uplifting the Asian communities and diasporas through food.</span> This website will include a blog page about coffee, tea, baked goods, and Asian culture, a menu of in-store products, and an online product catalog.</h2>
            <p>*This is a fictional company made for design purposes.</p>
            <div style={{marginBottom: '24px'}}><Button type='Primary' text='See full slide deck' link={RollWithItSlideDeck}/></div>
            <div className='steps'>
                <div className='step'>
                    {!isMobile && <div className='stepNumber'><h1>1</h1></div>}
                    <div className='journeyCard'>
                        <h2 style={{textAlign: 'left'}}><span style={{display: isMobile ? 'unset' : 'none'}}>1. </span>Moodboarding</h2>
                        <p>For this project, I wanted to show <span style={{fontWeight: 'bold', color: '#2519D2'}}>my love of baking while bringing Asian culture to the forefront of design.</span> I sifted through existing websites within and outside the cafe industry in order to get design inspiration through <span style={{fontWeight: 'bold', color: '#2519D2'}}>patterns, textures, lines, shapes, and colors.</span></p>
                    </div>
                </div>
                <div className='step'>
                    {!isMobile && <div className='stepNumber'><h1>2</h1></div>}
                    <div className='journeyCard'>
                        <h2 style={{textAlign: 'left'}}><span style={{display: isMobile ? 'unset' : 'none'}}>2. </span>Designing</h2>
                        <p>My mood board consisted of common experiences which emphasized the <span style={{fontWeight: 'bold', color: '#2519D2'}}>beauty of everyday things.</span> I wanted to encourage customers to recognize the cafe as a place they can <span style={{fontWeight: 'bold', color: '#2519D2'}}>feel at home and nurture their inner child.</span><br/><br/>With this in mind, I started fleshing out a color scheme, typographic hierarchy, and interactive UI elements, which were <span style={{fontWeight: 'bold', color: '#2519D2'}}>cute and playful, subdued in color, and rounded.</span></p>
                    </div>
                </div>
                <div className='step'>
                    {!isMobile && <div className='stepNumber'><h1>3</h1></div>}
                    <div className='journeyCard'>
                        <h2 style={{textAlign: 'left'}}><span style={{display: isMobile ? 'unset' : 'none'}}>3. </span>Prototyping</h2>
                        <p>With my completed component set, I created a whole functional prototype, including an About Us, Menu, Products, Blog, and Contact Us page to simulate a full customer experience.<br/><br/>If I were to continue building the Roll With It brand, I'd love to <span style={{fontWeight: 'bold', color: '#2519D2'}}>experiment more with animations and hand-drawn elements and graphics</span> in order to create a visually enticing touchpoint for customers.</p>
                    </div>
                </div>
            </div>
        </div>
    
    const sketches = <ImageSlide imageSlideProps={[
        {title: 'Writing ideas', imagePath: RollWithItSketchbookDrawing1, caption: 'Here, I am laying down the foundation of my website design and extracting the main themes from my mood board in order to continue with a cohesive design.'},
        {title: 'Sketching characters', imagePath: RollWithItSketchbookDrawing2, caption: 'These illustrations would be cute additions to the website, especially if animated. Here I focused on a croissant, bao, onigiri, and dango, common goods at an eastern Asian bakery or cafe.'},
        {title: 'Sketching characters', imagePath: RollWithItSketchbookDrawing3, caption: 'These illustrations would be cute additions to the website, especially if animated. I drew a gulab jamun, bun, baguette, and reiterated on the dango to create the main logo of the brand. Again, I want to focus on Asian culture through iconic Asian desserts.'},
    ]}/>;
    const colors = [
        {colorName: 'Rust 300', color: '#E96227', text: 'Hex Code: #E96227\nRGB: 233 98 39\nCMYK: 0% 58% 83% 9%', textColor: 'light'},
        {colorName: 'Sunflower 500', color: '#FFC700', text: 'Hex Code: #FFC700\nRGB: 255 199 0\nCMYK: 0% 22% 100% 0%'},
        {colorName: 'Ocean 300', color: '#0ACAC9', text: 'Hex Code: #0ACAC9\nRGB: 10 202 201\nCMYK: 95% 0% 0% 21%'},
        {colorName: 'Cloud 200', color: '#D3D5B9', text: 'Hex Code: #D3D5B9\nRGB: 211 213 185\nCMYK: 1% 0% 13% 16%'},
        {colorName: 'Earth 300', color: '#A26638', text: 'Hex Code: #A26638\nRGB: 162 102 56\nCMYK: 0% 37% 65% 36%', textColor: 'light'}
    ];

    const fonts = [
        {fontName: 'Mazzard Soft H', fontSubtitle: 'Title and most body fonts', fontFamily: `"Mazzard Soft H", sans-serif`, fontWeight: '700', fontStyle: 'normal', fontSize: '28'},
        {fontName: 'Chalkboard', fontSubtitle: 'Accent font', fontFamily: `"chalkboard", sans-serif`, fontWeight: '500', fontStyle: 'normal', fontSize: '22'},
    ];

    const ideation =
            <div className='columnWith48Gap'>
                <p>Eastern cafes, grocery stores, laundromats, trains, and electronics from the 2000s were significant parts of my mood board. I really liked getting inspiration from common experiences which really emphasized the beauty of everyday things. I wanted to encourage customers to recognize the cafe as a place they can visit regularly, <span style={{fontWeight: 'bold', color: '#2519D2'}}>somewhere where they can feel joyful and comfy.</span> I also wanted to <span style={{fontWeight: 'bold', color: '#2519D2'}}>invoke a feeling of nostalgia and allow customers to slow down and enjoy their coffee</span> in a world of rapid modernization.</p>
                <ImageSlide imageSlideProps={[{title: 'Gathering inspiration', imagePath: RollWithItInspiration}]}/>
                {sketches}
                <ColorPalette showTitle colors={colors} text={'Bright, natural, warm colors to feel playful but not overwhelming.'}/>   
            </div>;

    const design =
        <div className='columnWith48Gap'>
            <p>With my mood board finalized, I settled on elements that were <span style={{fontWeight: 'bold', color: '#2519D2'}}>cute and playful, subdued in color, and rounded.</span> I also added a 3D effect to interactive components in order to emulate physical buttons, such as ones seen on Nintendo consoles or Tamagotchis, to pay homage to retro tech. For images, I used pebble-like shapes to look visually interesting and organic, rather than formulaic and rigid. Through the design, I want to <span style={{fontWeight: 'bold', color: '#2519D2'}}>cater to a customer's inner child and create a fun, welcoming setting.</span></p>
            <Fonts showTitle fonts={fonts} text={'Soft, playful, rounded sans-serif fonts to create a welcoming environment.'}/>
            <ImageSlide imageSlideProps={[
                {title: 'Sketched components', imagePath: RollWithItSketchbookDrawing4},
                {title: 'Sketched wireframes',imagePath: RollWithItSketchbookWireframe1},
                {title: 'Sketched wireframes',imagePath: RollWithItSketchbookWireframe2},
                {title: 'Sketched wireframes', imagePath: RollWithItSketchbookWireframe3},
                {title: 'Sketched wireframes', imagePath: RollWithItSketchbookWireframe4},
                {title: 'Button set', imagePath: RollWithItButton},
                {title: 'Counter set',imagePath: RollWithItCounter},
                {title: 'Filter set',imagePath: RollWithItFilter},
                {title: 'Text input set', imagePath: RollWithItTextInput}]}/>
        </div>;
    const prototype = <div className='columnWith12Gap' style={{alignItems: 'center'}}>
        <div className='desktopMockupContainer'><iframe title='Roll With It Prototype' className='rollWithItPrototype' src="https://embed.figma.com/proto/2AQTimF0QrG3lk8lXFX05C/UXDE5100--Final-Project?node-id=467-223&scaling=scale-down-width&content-scaling=fixed&page-id=467%3A222&starting-point-node-id=467%3A223&embed-host=share&hide-ui=1" allowfullscreen></iframe></div>
        <Button type='Primary' text='See prototype in full screen' link='https://www.figma.com/proto/2AQTimF0QrG3lk8lXFX05C/UXDE5100--Final-Project?node-id=467-223&t=JzKuZj0eoi342NHi-1&scaling=scale-down-width&content-scaling=fixed&page-id=467%3A222&starting-point-node-id=467%3A223' fullWidth={true}/>
        <h2 style={{margin: '80px 0px 160px 0'}}>When designing websites for companies like Roll With It, I really want to focus on <span style={{color: '#2519D2'}}>creating a unique, cohesive brand identity</span> that emphasizes the company's values, while being accessible. If I were to continue building the Roll With It brand, I'd love to <span style={{color: '#2519D2'}}>experiment more with animations and hand-drawn elements and graphics</span> in order to create a visually enticing touchpoint for customers.</h2>
    </div>

    return (
        <div>
            <div className='bannerRollWithIt'>
                <div className='bannerTitle'>
                    <h1 className='title'>Roll With It</h1>
                </div>
            </div>
            <Grid gridProps={[{title: 'Overview', content: summaryContent, rowType: 'Column'}]} gridMargin='20px 0 40px 0'/>
            <div className='bannerWrapper'>
                <img src={RollWithItBanner2} alt='Different cafe orders in Japanese and English'/>
            </div>
            <Grid gridProps={[{title: 'Moodboarding', content: ideation, rowType: 'Column'}]}/>
            <div className='bannerWrapper'>
                <img src={RollWithItBanner3} alt='Different cafe orders in Japanese and English'/>
            </div>
            <Grid gridProps={[{title: 'Designing', content: design, rowType: 'Column'}]}/>
            <div className='bannerWrapper'>
                <img src={RollWithItBanner4} alt='Different cafe orders in Japanese and English'/>
            </div>
            <Grid gridProps={[{title: 'Prototyping', content: prototype, rowType: 'Column'}]}/>
        </div>
    );
}

export default RollWithIt;
