import Button from '../components/Button/Button.js';
import Grid from '../components/Grid/Grid.js';
import Tag from '../components/Tag/Tag.js';
import QuoteContainer from '../components/Text/QuoteContainer.js';
import TextContainer from '../components/Text/TextContainer.js';
import Resume from '../assets/documents/Resume.pdf';
import './Pages.scss';
import { useScreenResolution } from '../utils/ScreenSize.tsx';
import SlideIndicator from '../components/SlideIndicator/SlideIndicator.js';

export const AboutMe = () => {

    const { isSmall, isXSmall } = useScreenResolution();
    const isMobile = isSmall || isXSmall;

    const education1 = <TextContainer title={'Columbus College of Art & Design'} subtitle={'2025 - 2027'} text={'M.P.S. in User Experience Design'} />;
    const education2 = <TextContainer title={'University of Illinois at Urbana-Champaign'} subtitle={'2016 - 2020'} text={'B.S. in Computer Engineering with a Minor in Art & Design'}/>;
    const quote4 = <QuoteContainer title={'-Mark Famini, software engineer'} text={'"Uma is our multi-talented/scrum master/software engineer/designer. She was a big asset to our team, she\'s not afraid to wear multiple hats. She started on our team as a fresh graduate, and we saw her blossom into her role, very technical person, prolific with the arts and a lot of leadership potential. She is very easy to work with and very easy to talk to."'}/>
    const quote3 = <QuoteContainer title={'-Rohan Patel, software engineer'} text={'"She was always willing to work together on complicated tickets and was my go to person to ask for any front-end related work. She was always approachable and willing to help. Whatever team that has her next is lucky to have a developer with such a keen eye for designs and the ability to implement them."'}/>
    const quote2 = <QuoteContainer title={'-Madison Matecun, product designer'} text={'"As a developer, Uma has a really incredible design-oriented mindset. When I was partnered with her I could always count on her to fill in the blanks of an early-stage design with sensible and thoughtful interactions. She is reliable and accountable— picking up work when others are out on vacation, or filling in for the scrummaster (and doing a great job at it!). Her versatility is unmatched and she is an invaluable asset to any team."'}/>
    const quote1 = <QuoteContainer title={'-Robert Allen, lead developer'} text={'"While she has worn many hats during our couple of years working together, she shows a particular aptitude for front-end development and design. Her unique skillset allows her to understand the design and development required for any feature. She\'s a CSS master and often mentors even her seniors on best practices for developing UI."'}/>

    const skills1 = 
    <div className='columnWith12Gap'>
        <h3>{'Design'}</h3>
        <div className='skills'>
            <Tag type='Design' text='Figma'/>
            <Tag type='Design' text='Adobe Illustrator'/>
            <Tag type='Design' text='Adobe InDesign'/>
            <Tag type='Design' text='Adobe XD'/>
        </div>
    </div>;
    const skills2 = 
    <div className='columnWith12Gap'>
        <h3>{'Software'}</h3>
        <div className='skills'>
            <Tag type='Software' text='Javascript/Typescript'/>
            <Tag type='Software' text='HTML/CSS/SCSS'/>
            <Tag type='Software' text='React'/>
            <Tag type='Software' text='Node.js'/>
            <Tag  type='Software' text='Github'/>
            <Tag  type='Software' text='Jira/Confluence'/>
            <Tag  type='Software' text='Postman'/>
        </div>
    </div>;
    const skills3 =
    <div className='columnWith12Gap'>
        <h3>{'Research'}</h3>
        <div className='skills'>
            <Tag  type='Research' text='User interviewing'/>
            <Tag  type='Research' text='Usability testing'/>
            <Tag  type='Research' text='Competitive analysis'/>
            <Tag  type='Research' text='Affinity diagramming'/>
            <Tag  type='Research' text='Journey mapping'/>
            <Tag  type='Research' text='Persona development'/>
        </div>
    </div>;

    const experience1 = <TextContainer title={'Brand Designer at SereniMind'} subtitle={'October 2024'} text={'Established full brand identities including logos, color palettes, typefaces, and condensed web development component libraries through iterative design research and development.'} />;
    const experience2 = <TextContainer title={'Business Analyst at Connectbase'} subtitle={'September 2024 - November 2024'} text={'Analyzed serviceability and quoting APIs from telecommunication suppliers and produced product specifications for the Connectbase integration.'}/>;
    const experience3 = <TextContainer title={'Founder of Paper Dosai'} subtitle={'May 2024 - Present'} text={'Created full stack wedding collateral business to assist couples with the aesthetics of their wedding and to provide documents that make the planning process easier and more enjoyable.'}/>;
    const experience4 = <TextContainer title={'Software Engineer and Scrum Master at Viasat Inc.'} subtitle={'June 2021 - November 2023'} text={'Developed full stack components using JavaScript/TypeScript, React, and Redux for the residential “My Viasat” website and mobile application, while serving as team scrum master.'}/>;
    const experience5 = <TextContainer title={'Graphic Design Intern at the University of Illinois at Urbana-Champaign'} subtitle={'September 2019 - May 2020'} text={'Designed event graphics and established a social media presence for ECE ILLINOIS and designed project and research brochures to educate incoming students about possible pathways.'}/>;
    const experience6 = <TextContainer title={'IT Software Engineering and Design Intern at Viasat Inc.'} subtitle={'May 2019 - August 2019'} text={'Designed Viasat 404 error page to reduce unnecessary cost of long customer calls and engineering team infographics to prevent excess cost of testing and rebuilding far into the production process.'}/>;

    const aboutMe = 
        <div className='columnWith48Gap'>
            <p style={{fontSize: isMobile ? '20px' : '36px'}}>I am a UI/UX designer with a software development background aiming to <span style={{color: '#2519D2', fontWeight: '700'}}>bridge the gap between design and engineering</span> in order to empower users through intuitive interfaces.<br/><br/>After graduating with a Bachelor's in Computer Engineering and a minor in Art & Design, I moved to San Diego, California to start work as a software engineer. Through work, I was able to explore my love for development, design, and management. ​I am currently in a Master's program for User Experience Design and am searching for work in the UI/UX field.</p>
            <div className='skills'><Button type='Primary' text='View my resume' link={Resume}/> <Button type='Secondary' text='View my Behance' link={'https://www.behance.net/umaiyalsridas'}/></div>
        </div>;
    const allEducation =
        <div className='columnWith24Gap'>
            {education1}
            {education2}
        </div>;

    const allSkills =
        <div className='columnWith24Gap'>
            {skills1}
            {skills2}
            {skills3}
        </div>;

    const allExperiences =
        <div className='columnWith24Gap'>
            {experience1}
            {experience2}
            {experience3}
            {experience4}
            {experience5}
            {experience6}
        </div>;

    const allQuotes =
        <div className='columnWith24Gap'>
            {quote1}
            {quote2}
            {quote3}
            {quote4}
        </div>;

    const gridArray = [
        {title: 'Education', content: allEducation},
        {title: 'Skills', content: allSkills},
        {title: 'Experience', content: allExperiences},
        {title: 'Quotes', content: allQuotes}
    ]
    const slideArray = ['slide-0'];
    const secondSlideArray = gridArray.map((item, index) => `slide-${index+1}`);
    slideArray.push(...secondSlideArray);

    return (
        <div>
            <div style={{scrollSnapType: 'y proximity'}}>
                <Grid gridProps={[{title: 'Overview', content: aboutMe}]} maxWidth='none' snap/>
                <hr style={{border: 'none', height: '1px', backgroundColor: '#C4C3BD', width: 'stretch', margin: isMobile ? '0 24px' : '0 40px'}}/>
                <Grid gridProps={gridArray} maxWidth='none' gridMargin={isMobile ? '0 24px 24px 24px' : '0 40px 40px 40px'} indexStart={1}/>
            </div>
            <SlideIndicator sectionIds={slideArray} />
        </div>
    )
}

export default AboutMe;