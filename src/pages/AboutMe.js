import Button from '../components/Button/Button.js';
import Grid from '../components/Grid/Grid.js';
import Tag from '../components/Tag/Tag.js';
import QuoteContainer from '../components/Text/QuoteContainer.js';
import TextContainer from '../components/Text/TextContainer.js';
import Resume from '../assets/documents/Resume.pdf';

import './Pages.css';

export const AboutMe = () => {

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

    const experience1 = <TextContainer title={'Brand Designer at SereniMind'} subtitle={'October 2024'} text={'Established full brand identities including logos, color palettes, typefaces, and condensed web development component libraries through iterative design research and development.\nKey contributions:\n• Creating in depth design handoff files which include detailed instructions of how to utilize elements, colors, typefaces, logos, etc. to present a cohesive brand identity\n• Maintaining a line of constant communication to appropriately represent a client’s aesthetic goals'} />;
    const experience2 = <TextContainer title={'Business Analyst at Connectbase'} subtitle={'September 2024 - November 2024'} text={'Analyzed serviceability and quoting APIs from telecommunication suppliers and produced product specifications for the Connectbase integration.\nKey contributions:\n• Created Postman automations and developed a JSON/XML parser using React and JavaScript to quickly extract information from supplier APIs\n• Wrote robust product specification manuals outlining supplier API calls, responses, and mappings to Connectbase products'}/>;
    const experience3 = <TextContainer title={'Founder of Paper Dosai'} subtitle={'May 2024 - Present'} text={'Created full stack wedding collateral business to assist couples with the aesthetics of their wedding and to provide documents that make the planning process easier and more enjoyable.\nKey contributions:\n• Designing custom wedding stationery suites, including invitation and planning logistics\n• Developing a 50+ page wedding planner PDF and 30+ page spreadsheet detailing timeline, aesthetics, vendors, contact lists, legalities, scheduling, and more'}/>;
    const experience4 = <TextContainer title={'Software Engineer and Scrum Master at Viasat Inc.'} subtitle={'June 2021 - November 2023'} text={'Developed full stack components using JavaScript/TypeScript, React, and Redux for the residential “My Viasat” website and mobile application, while serving as team scrum master.\nKey contributions:\n• Developed and designed the “My Viasat” profile page to edit customer personal information\n• Developed “Viasat Stream” (Disney+) advertisement integration and refined purchase flow, resulting in an increase of 10k+ sales\n• Wrote 22 pages of technical documentation of key features and pages on the “My Viasat” website\n• Created an interactive workflow board and documented our deployments to decrease the number of missed tickets, resulting in an increased team velocity of 22.8 points over 9 sprints'}/>;
    const experience5 = <TextContainer title={'Graphic Design Intern at the University of Illinois at Urbana-Champaign'} subtitle={'September 2019 - May 2020'} text={'Designed event graphics and established a social media presence for ECE ILLINOIS and designed project and research brochures to educate incoming students about possible pathways.'}/>;
    const experience6 = <TextContainer title={'IT Software Engineering and Design Intern at Viasat Inc.'} subtitle={'May 2019 - August 2019'} text={'Designed Viasat 404 error page to reduce unnecessary cost of long customer calls and engineering team infographics to prevent excess cost of testing and rebuilding far into the production process.'}/>;

    const aboutMe = 
        <div className='sectionContainer'>
            <p>{'I am a UI/UX designer with a software development background aiming to bridge the gap between design and engineering in order to empower users through intuitive interfaces.\n\nAfter graduating with a Bachelor\'s in Computer Engineering and a minor in Art & Design, I moved to San Diego, California to start work as a software engineer. Through work, I was able to explore my love for development, design, and management. ​I am currently in a Master\'s program for User Experience Design and am searching for work in the UI/UX field.'}</p>
            <div className='skills'><Button type='Primary' text='View my resume' link={Resume}/> <Button type='Secondary' text='View my Behance' link={'https://www.behance.net/umaiyalsridas'}/></div>
        </div>;
    const allEducation =
        <div className='sectionContainer'>
            {education1}
            {education2}
        </div>;

    const allSkills =
        <div className='sectionContainer'>
            {skills1}
            {skills2}
            {skills3}
        </div>;

    const allExperiences =
        <div className='sectionContainer'>
            {experience1}
            {experience2}
            {experience3}
            {experience4}
            {experience5}
            {experience6}
        </div>;

    const allQuotes =
        <div className='sectionContainer'>
            {quote1}
            {quote2}
            {quote3}
            {quote4}
        </div>;

    const gridArray = [
        {title: 'About Me', content: aboutMe},
        {title: 'Education', content: allEducation},
        {title: 'Skills', content: allSkills},
        {title: 'Experience', content: allExperiences},
        {title: 'Quotes', content: allQuotes}
    ]

    return (
        <Grid gridProps={gridArray}/>
    )
}

export default AboutMe;