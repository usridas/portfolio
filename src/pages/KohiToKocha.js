import './Pages.scss';
import ImageSlide from '../components/Images/ImageSlide.js';
import {
    KohiToKochaFlowchart,
    KohiToKochaBanner3,
    KohiToKochaBanner4,
    KohiToKochaBanner2,
    KohiToKochaInspiration,
    KohiToKochaComponents1,
    KohiToKochaComponents2,
    KohiToKochaComponents3,
    KohiToKochaComponents4,
} from '../assets/images/index.js';
import KohiToKochaSlideDeck from '../assets/documents/KohiToKochaSlideDeck.pdf'
import Button from '../components/Button/Button.js';
import ColorPalette from '../components/ProjectDetails/ColorPalette.js';
import { useScreenResolution } from '../utils/ScreenSize.tsx';
import Grid from '../components/Grid/Grid.js';
import Fonts from '../components/ProjectDetails/Fonts.js';

export const KohiToKocha = () => {
    const { isXSmall, isSmall } = useScreenResolution();
    const isMobile = isSmall || isXSmall;

    const summaryContent = <div className='columnWith24Gap'>
        <h2>This app is made for <span style={{color: '#2519D2'}}>learning about Japanese culture and language through cafe settings.</span> It will cover different types of cafes and their <span style={{color: '#2519D2'}}>history, vocabulary, phrases and expressions, and etiquette.</span> This app will help users prepare for real-world interactions by preparing dialogues for cafes in Japan and allows users to build up knowledge and confidence without the fear of making mistakes.</h2>
        <div style={{marginBottom: '24px'}}><Button type='Primary' text='See full slide deck' link={KohiToKochaSlideDeck}/></div>
        <div className='steps'>
            <div className='step'>
                {!isMobile && <div className='stepNumber'><h1>1</h1></div>}
                <div className='journeyCard'>
                    <h2 style={{textAlign: 'left'}}><span style={{display: isMobile ? 'unset' : 'none'}}>1. </span>Scoping</h2>
                    <p>For this project, I wanted to address a very specific niche: <span style={{fontWeight: 'bold', color: '#2519D2'}}>Japanese cafes.</span> Through my previous experience with language learning apps and my research of Japanese cafes, I narrowed down my app to contain two main sections:<br/><br/><span style={{fontWeight: 'bold', color: '#2519D2'}}>• Learn: </span>Covers history, vocabulary, phrases and expressions, and etiquette<br/><span style={{fontWeight: 'bold', color: '#2519D2'}}>• Explore: </span>Helps plan dialogues for visiting specific cafes</p>
                </div>
            </div>
            <div className='step'>
                {!isMobile && <div className='stepNumber'><h1>2</h1></div>}
                <div className='journeyCard'>
                    <h2 style={{textAlign: 'left'}}><span style={{display: isMobile ? 'unset' : 'none'}}>2. </span>Design</h2>
                    <p>I collected inspiration from plant, planning, meditation, and language apps as well as Nintendo and Studio Ghibli to extract the aesthetic I wanted to emulate: <span style={{fontWeight: 'bold', color: '#2519D2'}}>organic and whimsical.</span><br/><br/>Then, I created a color scheme, typographic hierarchy, and interactive components.</p>
                </div>
            </div>
            <div className='step'>
                {!isMobile && <div className='stepNumber'><h1>3</h1></div>}
                <div className='journeyCard'>
                    <h2 style={{textAlign: 'left'}}><span style={{display: isMobile ? 'unset' : 'none'}}>3. </span>Prototyping</h2>
                    <p>Finally, I created wireframes and inserted my components, where I used Figma prototyping to make it interactive.<br/><br/>In the future, I would love to add a <span style={{fontWeight: 'bold', color: '#2519D2'}}>collected word bank and expand on the dialogue building feature.</span></p>
                </div>
            </div>
        </div>
    </div>

    const scopingArray = [
        {
            title: 'Learning about culture and language',
            caption: 'Japanese culture and etiquette is very different from that of the U.S. and many other countries. Learning Japanese consists of the written and spoken language, but also the poise and etiquette in order to be respectful.',
        },
        {
            title: 'Building up confidence',
            caption: 'The dialogue builder allows users to create their order and practice words and phrases before entering a cafe. Ordering at a cafe is generally low-stakes, but this should encourage users to use Japanese, rather than English or gestures, to order themselves.',
        },
        {
            title: 'Encouraging practice',
            caption: 'I created a system to earn points, which can be used for character customization, and provided achievement badges. Points and achievements are positive reinforcement to encourage continued practice.',
        },
    ];

    const flowchart = <ImageSlide imageSlideProps={[{title: 'Flowchart', imagePath: KohiToKochaFlowchart, caption: 'There were four basic tabs for the app: Learn, Explore, Notes, and Account. The Notes and Account tab would follow the typical format of other Notes and Account UIs, but the Learn and Explore tabs were new. This is the basic flow I wanted to follow:\n\nLearn:\n1. Choose a café type: Modern, Themed, Kissaten, Bakery\n2. Learn: History, Vocabulary, Phrases/Expressions, Etiquette\n3. Interact\n4. Earn Points\n\nExplore:\n1. Choose a café location\n2. Get a summary of the cafe\n3. See the menu\n4. Plan order/dialogue\n5. Notes on experience'}]}/>;

    const scopingGridArray = [
        {title: 'Scoping', content: <p>For this project, I wanted to improve my mobile design skills while focusing on subjects I am passionate about. I started learning Japanese casually a few years ago to prepare for a vacation to Japan; I ended up really enjoying it and have been studying Japanese during my free time. Simultaneously, I also worked as a barista in a bakery. I became curious about Japanese culture and specifically, cafes, and discovered four main types of cafes: Modern, Kissaten, Themed, and Bakery cafes. Through Kohi To Kocha, I wanted to <span style={{fontWeight: 'bold', color: '#2519D2'}}>help users practice Japanese in low-stakes environments</span>, like these cafes.</p>, rowType: 'Column', divider: 'none'},
        {title: scopingArray[0].title, titleType: 'small', content: <p>{scopingArray[0].caption}</p>,  rowType: 'Row', divider: 'gray'},
        {title: scopingArray[1].title, titleType: 'small', content: <p>{scopingArray[1].caption}</p>,  rowType: 'Row', divider: 'gray'},
        {title: scopingArray[2].title, titleType: 'small', content: <p>{scopingArray[2].caption}</p>,  rowType: 'Row', divider: 'none'},
        {content: flowchart,  rowType: 'Column'},
    ]

    const colors = [
        {colorName: 'Green 100', color: '#DAF39E', text: 'Hex Code: #DAF39E\nRGB: 218 243 158\nCMYK: 10% 0% 35% 5%'},
        {colorName: 'Teal 100', color: '#BAFBD8', text: 'Hex Code: #BAFBD8\nRGB: 186 251 216\nCMYK: 26% 0% 14% 2%'},
        {colorName: 'Blue 100', color: '#C9ECFF', text: 'Hex Code: #C9ECFF\nRGB: 201 236 255\nCMYK: 21% 7% 0% 0%'},
        {colorName: 'Gray 100', color: '#E8E7E3', text: 'Hex Code: #E8E7E3\nRGB: 232 231 227\nCMYK: 0% 0% 2% 9%'},
    ];

    const fonts = [
        {fontName: 'Crimson Pro', fontSubtitle: 'Large font', fontFamily: `"Crimson Pro", serif`, fontWeight: '400', fontStyle: 'normal', fontSize: '28', allCaps: true},
        {fontName: 'Figtree', fontSubtitle: 'Body font', fontFamily: `"figtree", sans-serif`, fontWeight: '500', fontStyle: 'normal', fontSize: '22'},
        {fontName: 'Noto Sans JP', fontSubtitle: 'Japanese body font', fontFamily: `"Noto Sans JP", sans-serif`, fontWeight: '500', fontStyle: 'normal', fontSize: '22'}  
    ];

    const components = <ImageSlide imageSlideProps={[
        {title: 'Basic components', imagePath: KohiToKochaComponents1},
        {title: 'Basic components', imagePath: KohiToKochaComponents2},
        {title: 'Basic components', imagePath: KohiToKochaComponents3},
        {title: 'Basic components', imagePath: KohiToKochaComponents4},
    ]}/>;

    const design =
        <div className='columnWith48Gap'>
            <p>Some of my main inspirations were lush greenery and blue skies, especially how it is portrayed in Studio Ghibli films, and the openness of Nintendo games, like Animal Crossing. I also collected inspiration from plant, planning, meditation, and language apps to arrive to an <span style={{fontWeight: 'bold', color: '#2519D2'}}>organically whimsical</span> aesthetic.</p>
            {<ImageSlide imageSlideProps={[{title: 'Inspiration', imagePath: KohiToKochaInspiration}]}/>}
            <div style={{display: 'flex', flexDirection: 'row', gap: '12px'}}>
                <ColorPalette showTitle colors={colors}/>
                <Fonts showTitle fonts={fonts}/>
            </div>
            {components}
        </div>;  
    

    const prototype =
        <div className='columnWith12Gap' style={{alignItems: 'center'}}>
            <div className='phoneMockupContainer'><iframe title='Kohi To Kocha Prototype' src={"https://embed.figma.com/proto/1krraobhKcrvyfy7U1ljOc/K%C5%8Dh%C4%AB-To-K%C5%8Dcha?node-id=765-9539&p=f&scaling=contain&content-scaling=responsive&page-id=72%3A1269&starting-point-node-id=765%3A9539&show-proto-sidebar=1&embed-host=share&hide-ui=1"} allowfullscreen></iframe></div>
            <div style={{width: 'stretch', maxWidth: '320px'}}><Button type='Primary' text='See prototype in full screen' fullWidth={true} link='https://www.figma.com/proto/1krraobhKcrvyfy7U1ljOc/K%C5%8Dh%C4%AB-To-K%C5%8Dcha?node-id=531-19001&t=0Lucuy2WHfprI1dN-1&scaling=contain&content-scaling=fixed&page-id=72%3A1269&starting-point-node-id=531%3A19001'/></div>
            <h2 style={{margin: '80px 0px 160px 0'}}>As my timeline was limited to a month, I focused on creating a crisp design, but in the future I would love to <span style={{color: '#2519D2'}}>develop the idea to create an Android and/or iOS app.</span> In terms of features, I would love to <span style={{color: '#2519D2'}}>add a collected word bank and expand on the dialogue building feature.</span></h2>
        </div>;

    return (
        <div>
            <div className='bannerKohiToKocha'>
                <div className='bannerTitle'>
                    <h1 className='title'>Kohi To Kocha</h1>
                </div>
            </div>
            <Grid gridProps={[{title: 'Overview', content: summaryContent, rowType: 'Column'}]} gridMargin='20px 0 40px 0'/>
            <div className='bannerWrapper'>
                <img src={KohiToKochaBanner2} alt='Different cafe orders in Japanese and English'/>
            </div>
            <Grid gridProps={scopingGridArray} gridMargin='20px 0 40px 0'/>
            <div className='bannerWrapper'>
                <img src={KohiToKochaBanner3} alt='Inspiration screenshots'/>
            </div>
            <Grid gridProps={[{title: 'Design', content: design, rowType: 'Column'}]}/>
            <div className='bannerWrapper'>
                <img src={KohiToKochaBanner4} alt='Screens of Kohi To Kocha'/>
            </div>
            <Grid gridProps={[{title: 'Prototyping', content: prototype, rowType: 'Column'}]}/>
        </div>
    );
}

export default KohiToKocha;
