import LargeContent from '../components/Content/LargeContent.js';
import { useScreenResolution } from '../utils/ScreenSize.tsx';
import './Pages.css';
import SmallContent from '../components/Content/SmallContent.js';
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
import { PlainImage } from '../components/Images/PlainImage.js';
import Button from '../components/Button/Button.js';

export const KohiToKocha = ({}) => {

    const { isLarge } = useScreenResolution();
    const content = 'This app is made for learning about Japanese culture and language through cafe settings. It will cover different types of cafes and their history, vocabulary, phrases and expressions, and etiquette. The explore portion of the app allows you to build up knowledge and confidence of Japanese cafes without the fear of making mistakes; this part of the app will be applicable to anyone all over the world as it will be a fictional setting. The planning portion of the app will help you prepare for real-world interactions; this part of the app is used for planning visits and preparing dialogues for cafes in Japan.';
    const titleContent = isLarge ? <LargeContent title={'KŌHĪ TO KŌCHA DESIGN'} content={<p>{content}</p>}/> : <SmallContent title={'KŌHĪ TO KŌCHA DESIGN'} content={<p>{content}</p>}/>;

    const moodboard = <PlainImage plainImageProps={{imagePath: KohiToKochaMoodboard}}/>;
    const flowchart = <PlainImage plainImageProps={{imagePath: KohiToKochaFlowchart}}/>;
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

    return (
        <div className="sectionContainer">
            {titleContent}
            <hr className='divider'/>
            {isLarge ? <LargeContent title={'MOOD BOARD'} content={moodboard}/> : <SmallContent title={'MOOD BOARD'} content={moodboard}/>}
            <hr className='divider'/>
            {isLarge ? <LargeContent title={'FLOW CHART'} content={flowchart}/> : <SmallContent title={'MOOD BOARD'} content={flowchart}/>}
            <hr className='divider'/>
            {isLarge ? <LargeContent title={'COLORS'} content={colors}/> : <SmallContent title={'COLORS'} content={colors}/>}
            <hr className='divider'/>
            {isLarge ? <LargeContent title={'TYPOGRAPHY'} content={typography}/> : <SmallContent title={'TYPOGRAPHY'} content={typography}/>}
            <hr className='divider'/>
            {isLarge ? <LargeContent title={'WIREFRAMES'} content={wireframes}/> : <SmallContent title={'WIREFRAMES'} content={wireframes}/>}
            <hr className='divider'/>
            {isLarge ? <LargeContent title={'SCREENS'} content={screens}/> : <SmallContent title={'SCREENS'} content={screens}/>}
            <hr className='divider'/>
            {isLarge ? <LargeContent title={'PROTOTYPE'} content={prototype}/> : <SmallContent title={'PROTOTYPE'} content={prototype}/>}
        </div>
    );
}

export default KohiToKocha;
