import LargeContent from '../components/Content/LargeContent.js';
import SmallContent from '../components/Content/SmallContent.js';
import TextContainer from '../components/Text/TextContainer.js';
import { useScreenResolution } from '../utils/ScreenSize.tsx';
import './Pages.css';

export const AboutMe = ({}) => {
    const { isLarge } = useScreenResolution();

    const education1 = <TextContainer title={'COLUMBUS COLLEGE OF ART & DESIGN'} subtitle={'2025 - 2027'} text={'M.P.S. in User Experience Design'} />;
    const education2 = <TextContainer title={'BUSINESS ANALYST AT UNIVERSITY OF ILLINOIS AT URBANA-CHAMPAIGN'} subtitle={'2016 - 2020'} text={'B.S. in Computer Engineering with a Minor in Art & Design'}/>;
    const skills1 = <TextContainer title={'DESIGN'} text={'Figma, Adobe Illustrator, Adobe InDesign, Adobe XD, Drawing, Painting, Photography'} />;
    const skills2 = <TextContainer title={'SOFTWARE'} text={'JavaScript/TypeScript, HTML/CSS/SCSS, React, Node.js, GitHub, Jira/Confluence, Postman'}/>;

    const allEducation =
        <div className='sectionContainer'>
            {education1}
            {education2}
        </div>;

      const allSkills =
        <div className='sectionContainer'>
            {skills1}
            {skills2}
        </div>;

    if (isLarge) {
    return (
        <div className="sectionContainer">
            <LargeContent title={'EDUCATION'} content={allEducation}></LargeContent>
            <hr className='divider'/>
            <LargeContent title={'SKILLS'} content={allSkills}></LargeContent> 
        </div>
        );
    }
    else
        return (
        <div className="sectionContainer">
            <SmallContent title={'EDUCATION'} content={allEducation}></SmallContent>
            <hr className='divider'/>
            <SmallContent title={'SKILLS'} content={allSkills}></SmallContent> 
        </div>
        );
}

export default AboutMe;