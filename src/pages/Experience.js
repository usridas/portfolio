import LargeContent from '../components/LargeContent';
import LargeTextContainer from '../components/LargeTextContainer';
import './Pages.css';

export const Experience = ({}) => {
    const experience1 = <LargeTextContainer title={'BRAND DESIGNER AT SERENIMIND'} subtitle={'October 2024'} text={'Established full brand identities including logos, color palettes, typefaces, and condensed web development component libraries through iterative design research and development.\nKey contributions:\n• Creating in depth design handoff files which include detailed instructions of how to utilize elements, colors, typefaces, logos, etc. to present a cohesive brand identity\n• Maintaining a line of constant communication to appropriately represent a client’s aesthetic goals'} />;
    const experience2 = <LargeTextContainer title={'BUSINESS ANALYST AT CONNECTBASE'} subtitle={'September 2024 - November 2024'} text={'Analyzed serviceability and quoting APIs from telecommunication suppliers and produced product specifications for the Connectbase integration.\nKey contributions:\n• Created Postman automations and developed a JSON/XML parser using React and JavaScript to quickly extract information from supplier APIs\n• Wrote robust product specification manuals outlining supplier API calls, responses, and mappings to Connectbase products'}/>;
    const experience3 = <LargeTextContainer title={'FOUNDER OF PAPER DOSAI'} subtitle={'May 2024 - Present'} text={'Created full stack wedding collateral business to assist couples with the aesthetics of their wedding and to provide documents that make the planning process easier and more enjoyable.\nKey contributions:\n• Designing custom wedding stationery suites, including invitation and planning logistics\n• Developing a 50+ page wedding planner PDF and 30+ page spreadsheet detailing timeline, aesthetics, vendors, contact lists, legalities, scheduling, and more'}/>;
    const experience4 = <LargeTextContainer title={'SOFTWARE ENGINEER AND SCRUM MASTER AT VIASAT INC.'} subtitle={'June 2021 - November 2023'} text={'Developed full stack components using JavaScript/TypeScript, React, and Redux for the residential “My Viasat” website and mobile application, while serving as team scrum master.\nKey contributions:\n• Developed and designed the “My Viasat” profile page to edit customer personal information\n• Developed “Viasat Stream” (Disney+) advertisement integration and refined purchase flow, resulting in an increase of 10k+ sales\n• Wrote 22 pages of technical documentation of key features and pages on the “My Viasat” website\n• Created an interactive workflow board and documented our deployments to decrease the number of missed tickets, resulting in an increased team velocity of 22.8 points over 9 sprints'}/>;
    const experience5 = <LargeTextContainer title={'GRAPHIC DESIGN INTERN AT THE UNIVERSITY OF ILLINOIS AT URBANA-CHAMPAIGN'} subtitle={'September 2019 - May 2020'} text={'Designed event graphics and established a social media presence for ECE ILLINOIS and designed project and research brochures to educate incoming students about possible pathways.'}/>;
    const experience6 = <LargeTextContainer title={'IT SOFTWARE ENGINEERING AND DESIGN INTERN AT VIASAT INC.'} subtitle={'May 2019 - August 2019'} text={'Designed Viasat 404 error page to reduce unnecessary cost of long customer calls and engineering team infographics to prevent excess cost of testing and rebuilding far into the production process.'}/>;

    const allExperiences =
        <div className='largeSectionContainer'>
            {experience1}
            {experience2}
            {experience3}
            {experience4}
            {experience5}
            {experience6}
        </div>;

    return (
        <LargeContent title={'EXPERIENCE'} content={allExperiences}></LargeContent> 
    );
}

export default Experience;