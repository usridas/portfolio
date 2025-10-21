import LargeContent from '../components/LargeContent';
import SmallContent from '../components/SmallContent.js';
import TextContainer from '../components/TextContainer';
import { useScreenResolution } from '../utils/ScreenSize.tsx';
import './Pages.css';

export const AboutMe = ({}) => {
    const { isLarge } = useScreenResolution();

    const education1 = <TextContainer title={'COLUMBUS COLLEGE OF ART & DESIGN'} subtitle={'2025 - 2027'} text={'M.P.S. in User Experience Design'} />;
    const education2 = <TextContainer title={'BUSINESS ANALYST AT UNIVERSITY OF ILLINOIS AT URBANA-CHAMPAIGN'} subtitle={'2016 - 2020'} text={'B.S. in Computer Engineering with a Minor in Art & Design'}/>;
    const skills1 = <TextContainer title={'DESIGN'} text={'Figma, Adobe Illustrator, Adobe InDesign, Adobe XD, Drawing, Painting, Photography'} />;
    const skills2 = <TextContainer title={'SOFTWARE'} text={'JavaScript/TypeScript, HTML/CSS/SCSS, React, Node.js, GitHub, Jira/Confluence, Postman'}/>;

    const allEducation =
        <div className='largeSectionContainer'>
            {education1}
            {education2}
        </div>;

      const allSkills =
        <div className='largeSectionContainer'>
            {skills1}
            {skills2}
        </div>;

    if (isLarge) {
    return (
        <div className="largeSectionContainer">
            <LargeContent title={'EDUCATION'} content={allEducation}></LargeContent>
            <hr className='divider'/>
            <LargeContent title={'SKILLS'} content={allSkills}></LargeContent> 
        </div>
        );
    }
    else
        return (
        <div className="largeSectionContainer">
            <SmallContent title={'EDUCATION'} content={allEducation}></SmallContent>
            <hr className='divider'/>
            <SmallContent title={'SKILLS'} content={allSkills}></SmallContent> 
        </div>
        );
}

export default AboutMe;