import LargeContent from '../components/Content/LargeContent.js';
import SmallContent from '../components/Content/SmallContent.js';
import Tag from '../components/Tag/Tag.js';
import QuoteContainer from '../components/Text/QuoteContainer.js';
import TextContainer from '../components/Text/TextContainer.js';
import { useScreenResolution } from '../utils/ScreenSize.tsx';
import './Pages.css';

export const AboutMe = ({}) => {
    const { isLarge } = useScreenResolution();

    const education1 = <TextContainer title={'COLUMBUS COLLEGE OF ART & DESIGN'} subtitle={'2025 - 2027'} text={'M.P.S. in User Experience Design'} />;
    const education2 = <TextContainer title={'BUSINESS ANALYST AT UNIVERSITY OF ILLINOIS AT URBANA-CHAMPAIGN'} subtitle={'2016 - 2020'} text={'B.S. in Computer Engineering with a Minor in Art & Design'}/>;
    const quote4 = <QuoteContainer title={'-MARK FAMINI, SOFTWARE ENGINEER'} text={'"Uma is our multi-talented/scrum master/software engineer/designer. She was a big asset to our team, she\'s not afraid to wear multiple hats. She started on our team as a fresh graduate, and we saw her blossom into her role, very technical person, prolific with the arts and a lot of leadership potential. She is very easy to work with and very easy to talk to."'}/>
    const quote3 = <QuoteContainer title={'-ROHAN PATEL, SOFTWARE ENGINEER'} text={'"She was always willing to work together on complicated tickets and was my go to person to ask for any front-end related work. She was always approachable and willing to help. Whatever team that has her next is lucky to have a developer with such a keen eye for designs and the ability to implement them."'}/>
    const quote2 = <QuoteContainer title={'-MADISON MATECUN, PRODUCT DESIGNER'} text={'"As a developer, Uma has a really incredible design-oriented mindset. When I was partnered with her I could always count on her to fill in the blanks of an early-stage design with sensible and thoughtful interactions. She is reliable and accountable— picking up work when others are out on vacation, or filling in for the scrummaster (and doing a great job at it!). Her versatility is unmatched and she is an invaluable asset to any team."'}/>
    const quote1 = <QuoteContainer title={'-ROBERT ALLEN, LEAD DEVELOPER'} text={'"While she has worn many hats during our couple of years working together, she shows a particular aptitude for front-end development and design. Her unique skillset allows her to understand the design and development required for any feature. She\'s a CSS master and often mentors even her seniors on best practices for developing UI."'}/>

    const skills1 = <div className='skillsContainer'>
        <Tag iconBool={true} type='Design' text='FIGMA'/> <Tag iconBool={true} type='Design' text='ADOBE ILLUSTRATOR'/> <Tag iconBool={true} type='Design' text='ADOBE INDESIGN'/> <Tag iconBool={true} type='Design' text='ADOBE XD'/> <Tag iconBool={true} type='Design' text='DRAWING'/> <Tag iconBool={true} type='Design' text='PAINTING'/> <Tag iconBool={true} type='Design' text='PHOTOGRAPHY'/>
    </div>;
    const skills2 = <div className='skillsContainer'>
        <Tag iconBool={true} type='Software' text='JAVASCRIPT/TYPESCRIPT'/> <Tag iconBool={true} type='Software' text='HTML/CSS/SCSS'/> <Tag iconBool={true} type='Software' text='REACT'/> <Tag iconBool={true} type='Software' text='NODE.JS'/> <Tag iconBool={true} type='Software' text='GITHUB'/> <Tag iconBool={true} type='Software' text='JIRA/CONFLUENCE'/> <Tag iconBool={true} type='Software' text='POSTMAN'/>
    </div>;
    const skills3 = <div className='skillsContainer'>
        <Tag iconBool={true} type='Research' text='USER INTERVIEWING'/> <Tag iconBool={true} type='Research' text='AFFINITY DIAGRAMMING'/> <Tag iconBool={true} type='Research' text='JOURNEY MAPPING'/> <Tag iconBool={true} type='Research' text='PERSONA DEVELOPMENT'/>
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

    const allQuotes =
        <div className='sectionContainer'>
            {quote1}
            {quote2}
            {quote3}
            {quote4}
        </div>;

    if (isLarge) {
    return (
        <div className="sectionContainer">
            <LargeContent title={'EDUCATION'} content={allEducation}></LargeContent>
            <hr className='divider'/>
            <LargeContent title={'SKILLS'} content={allSkills}></LargeContent>
            <hr className='divider'/>
            <LargeContent title={'RECOMMENDATIONS'} content={allQuotes}></LargeContent> 
        </div>
        );
    }
    else
        return (
        <div className="sectionContainer">
            <SmallContent title={'EDUCATION'} content={allEducation}></SmallContent>
            <hr className='divider'/>
            <SmallContent title={'SKILLS'} content={allSkills}></SmallContent>
            <hr className='divider'/>
            <SmallContent title={'RECOMMENDATIONS'} content={allQuotes}></SmallContent> 
        </div>
        );
}

export default AboutMe;