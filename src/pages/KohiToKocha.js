import { useScreenResolution } from '../utils/ScreenSize.tsx';
import './Pages.css';
import ImageSlide from '../components/Images/ImageSlide.js';
import {
    KohiToKochaMoodboard,
    KohiToKochaColors,
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
} from '../assets/images';
import KohiToKochaSlideDeck from '../assets/documents/KohiToKochaSlideDeck.pdf'
import { PlainImage } from '../components/Images/PlainImage.js';
import Button from '../components/Button/Button.js';
import Tag from '../components/Tag/Tag.js';
import Grid from '../components/Grid/Grid.js';

export const KohiToKocha = ({}) => {

    const { isLarge } = useScreenResolution();
    const kohiToKochaTags = <div className='tags'>
        <Tag type='Design' text='FIGMA'/>
        <Tag type='Design' text='MOBILE APP'/>
        <Tag type='Research' text='FLOW CHARTS'/>
    </div>
    const content =<div className='summaryContent'>
        {kohiToKochaTags}
        <p style={{marginBottom: '24px'}}>{'This app is made for learning about Japanese culture and language through cafe settings. It will cover different types of cafes and their history, vocabulary, phrases and expressions, and etiquette. The explore portion of the app allows you to build up knowledge and confidence of Japanese cafes without the fear of making mistakes; this part of the app will be applicable to anyone all over the world as it will be a fictional setting. The planning portion of the app will help you prepare for real-world interactions; this part of the app is used for planning visits and preparing dialogues for cafes in Japan.'}</p>
        <Button type='Primary' text='SEE FULL SLIDE DECK' link={KohiToKochaSlideDeck}/>
    </div>
    
    const moodboard = <PlainImage plainImageProps={{imagePath: KohiToKochaMoodboard, caption: 'Some of my main inspirations were lush greenery and blue skies, especially how it is portrayed in Studio Ghibli films, and the openness of Nintendo games, like Animal Crossing.'}}/>;
    const flowchart = <PlainImage plainImageProps={{imagePath: KohiToKochaFlowchart, caption: 'There were four basic tabs for the app: Learn, Explore, Notes, and Account. The Notes and Account tab would follow the typical format of other Notes and Account UIs, but the Learn and Explore tabs were new. This is the basic flow I wanted to follow:\n\nLearn:\n1. Choose a café type: Modern, Themed, Kissaten, Bakery\n2. Learn: History, Vocabulary, Phrases/Expressions, Etiquette\n3. Interact\n4. Earn Points\n\nExplore:\n1. Choose a café location\n2. Get a summary of the cafe\n3. See the menu\n4. Plan order/dialogue\n5. Notes on experience'}}/>;
    const colors = <PlainImage plainImageProps={{imagePath: KohiToKochaColors}}/>;
    const typography = <PlainImage plainImageProps={{imagePath: KohiToKochaTypography}}/>;
    const wireframes = <PlainImage plainImageProps={{imagePath: KohiToKochaWireframes}}/>;
    const screens = <ImageSlide imageSlideProps={[
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
    const prototype = <div>
            <iframe className='kohiToKochaPrototype' src="https://embed.figma.com/proto/1krraobhKcrvyfy7U1ljOc/K%C5%8Dh%C4%AB-To-K%C5%8Dcha?node-id=531-19001&scaling=contain&content-scaling=fixed&page-id=72%3A1269&starting-point-node-id=531%3A19001&embed-host=share" allowfullscreen></iframe>
            <Button type='Primary' text='SEE PROTOTYPE IN FULL SCREEN' link='https://www.figma.com/proto/1krraobhKcrvyfy7U1ljOc/K%C5%8Dh%C4%AB-To-K%C5%8Dcha?node-id=531-19001&t=0Lucuy2WHfprI1dN-1&scaling=contain&content-scaling=fixed&page-id=72%3A1269&starting-point-node-id=531%3A19001'/>
        </div>;

    const gridArray = [
        {title: 'KOHI TO KOCHA', content: content},
        {title: 'MOODBOARD', content: moodboard},
        {title: 'FLOWCHART', content: flowchart},
        {title: 'COLORS', content: colors},
        {title: 'TYPOGRAPHY', content: typography},
        {title: 'WIREFRAMES', content: wireframes},
        {title: 'SCREENS', content: screens},
        {title: 'PROTOTYPE', content: prototype}
    ]

    return (
        <Grid gridProps={gridArray} removeBio={true}/>
    );
}

export default KohiToKocha;
