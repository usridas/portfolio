import './Pages.css';
import ImageSlide from '../components/Images/ImageSlide.js';
import {
    KohiToKochaMoodboard,
    KohiToKochaTypography,
    KohiToKochaFlowchart,
    KohiToKochaPrototype1,
    KohiToKochaPrototype2,
    KohiToKochaPrototype3,
    KohiToKochaPrototype4,
    KohiToKochaPrototype5,
    KohiToKochaPrototype6,
    KohiToKochaPrototype7,
    KohiToKochaPrototype8,
    KohiToKochaPrototype9,
    KohiToKochaWireframes
} from '../assets/images/index.js';
import KohiToKochaSlideDeck from '../assets/documents/KohiToKochaSlideDeck.pdf'
import { PlainImage } from '../components/Images/PlainImage.js';
import Button from '../components/Button/Button.js';
import ProjectGrid from '../components/Grid/ProjectGrid.js';
import ColorPalette from '../components/ProjectDetails/ColorPalette.js';
import { useScreenResolution } from '../utils/ScreenSize.tsx';

export const KohiToKocha = () => {
    const { isXSmall } = useScreenResolution();

    const content =<div className='summaryContent'>
        <p>{'This app is made for learning about Japanese culture and language through cafe settings. It will cover different types of cafes and their history, vocabulary, phrases and expressions, and etiquette. The explore portion of the app allows you to build up knowledge and confidence of Japanese cafes without the fear of making mistakes; this part of the app will be applicable to anyone all over the world as it will be a fictional setting. The planning portion of the app will help you prepare for real-world interactions; this part of the app is used for planning visits and preparing dialogues for cafes in Japan.'}</p>
        <Button type='Primary' text='SEE FULL SLIDE DECK' link={KohiToKochaSlideDeck}/>
    </div>

    const colors = [
        {colorName: 'GREEN 100', color: '#DAF39E', text: 'Hex Code: #DAF39E\nRGB: 218 243 158\nCMYK: 10% 0% 35% 5%'},
        {colorName: 'TEAL 100', color: '#BAFBD8', text: 'Hex Code: #BAFBD8\nRGB: 186 251 216\nCMYK: 26% 0% 14% 2%'},
        {colorName: 'BLUE 100', color: '#C9ECFF', text: 'Hex Code: #C9ECFF\nRGB: 201 236 255\nCMYK: 21% 7% 0% 0%'},
        {colorName: 'GRAY 100', color: '#E8E7E3', text: 'Hex Code: #E8E7E3\nRGB: 232 231 227\nCMYK: 0% 0% 2% 9%'},
    ];
    
    const moodboard = <PlainImage plainImageProps={{title: 'MOODBOARD', imagePath: KohiToKochaMoodboard, caption: 'Some of my main inspirations were lush greenery and blue skies, especially how it is portrayed in Studio Ghibli films, and the openness of Nintendo games, like Animal Crossing.'}}/>;
    const flowchart = <PlainImage plainImageProps={{title: 'FLOW CHART', imagePath: KohiToKochaFlowchart, caption: 'There were four basic tabs for the app: Learn, Explore, Notes, and Account. The Notes and Account tab would follow the typical format of other Notes and Account UIs, but the Learn and Explore tabs were new. This is the basic flow I wanted to follow:\n\nLearn:\n1. Choose a café type: Modern, Themed, Kissaten, Bakery\n2. Learn: History, Vocabulary, Phrases/Expressions, Etiquette\n3. Interact\n4. Earn Points\n\nExplore:\n1. Choose a café location\n2. Get a summary of the cafe\n3. See the menu\n4. Plan order/dialogue\n5. Notes on experience'}}/>;
    const screens = <ImageSlide imageSlideProps={[
        {title: 'WIREFRAMES', imagePath: KohiToKochaWireframes},
        {title: 'HOME', imagePath: KohiToKochaPrototype1},
        {title: 'LEARN', imagePath: KohiToKochaPrototype2},
        {title: 'LEARN', imagePath: KohiToKochaPrototype3},
        {title: 'EXPLORE', imagePath: KohiToKochaPrototype4},
        {title: 'EXPLORE', imagePath: KohiToKochaPrototype5},
        {title: 'EXPLORE', imagePath: KohiToKochaPrototype6},
        {title: 'NOTES', imagePath: KohiToKochaPrototype7},
        {title: 'ACCOUNT', imagePath: KohiToKochaPrototype8},
        {title: 'ACCOUNT', imagePath: KohiToKochaPrototype9},
    ]}/>;

    const vision =
        <div className='sectionContainer'>
            <div style={{display: 'flex', width: 'stretch', justifyContent: 'center'}}>{moodboard}</div>
            <div style={{display: 'flex', width: 'stretch', justifyContent: 'center'}}>{flowchart}</div>
        </div>;  
    
    const design =
        <div className='sectionContainer'>
            {<ColorPalette colors={colors}/>}
            {<PlainImage plainImageProps={{imagePath: KohiToKochaTypography}}/>}
        </div>;

    const construction =
        <div className='sectionContainer'>
            {screens}
        </div>;

    const prototype =
        <div className='columnWith12Gap' style={{alignItems: 'center'}}>
            <div className='phoneMockupContainer'><iframe title='Kohi To Kocha Prototype' src={isXSmall ? "https://embed.figma.com/proto/1krraobhKcrvyfy7U1ljOc/K%C5%8Dh%C4%AB-To-K%C5%8Dcha?node-id=765-9539&p=f&scaling=contain&content-scaling=responsive&page-id=72%3A1269&starting-point-node-id=765%3A9539&show-proto-sidebar=1&embed-host=share&hide-ui=1":"https://embed.figma.com/proto/1krraobhKcrvyfy7U1ljOc/K%C5%8Dh%C4%AB-To-K%C5%8Dcha?node-id=531-19001&scaling=contain&content-scaling=responsive&page-id=72%3A1269&starting-point-node-id=531%3A19001&embed-host=share&hide-ui=1"} allowfullscreen></iframe></div>
            <div style={{width: 'stretch', maxWidth: '422px'}}><Button type='Primary' text='SEE PROTOTYPE IN FULL SCREEN' fullWidth={true} link='https://www.figma.com/proto/1krraobhKcrvyfy7U1ljOc/K%C5%8Dh%C4%AB-To-K%C5%8Dcha?node-id=531-19001&t=0Lucuy2WHfprI1dN-1&scaling=contain&content-scaling=fixed&page-id=72%3A1269&starting-point-node-id=531%3A19001'/></div>
        </div>;

    const gridArray = [
        {title: 'OVERVIEW', content: content},
        {title: 'THE VISION', content: vision},
        {title: 'DESIGN FOUNDATION', content: design},
        {title: 'CONSTRUCTION', content: construction},
        {title: 'PROTOTYPE', content: prototype}
    ]

    return (
        <div>
            <h1 className='title'>KOHI TO KOCHA</h1>
            <ProjectGrid gridProps={gridArray} removeBio={true}/>
        </div>
    );
}

export default KohiToKocha;
