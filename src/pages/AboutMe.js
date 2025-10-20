import LargeContent from '../components/LargeContent';
import LargeTextContainer from '../components/LargeTextContainer';
import './Pages.css';

export const AboutMe = ({}) => {
    const education1 = <LargeTextContainer title={'COLUMBUS COLLEGE OF ART & DESIGN'} subtitle={'2025 - 2027'} text={'M.P.S. in User Experience Design'} />;
    const education2 = <LargeTextContainer title={'BUSINESS ANALYST AT UNIVERSITY OF ILLINOIS AT URBANA-CHAMPAIGN'} subtitle={'2016 - 2020'} text={'B.S. in Computer Engineering with a Minor in Art & Design'}/>;
    const skills1 = <LargeTextContainer title={'DESIGN'} text={'Figma, Adobe Illustrator, Adobe InDesign, Adobe XD, Drawing, Painting, Photography'} />;
    const skills2 = <LargeTextContainer title={'SOFTWARE'} text={'JavaScript/TypeScript, HTML/CSS/SCSS, React, Node.js, GitHub, Jira/Confluence, Postman'}/>;

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

    return (
    <div className="largeSectionContainer">
        <LargeContent title={'EDUCATION'} content={allEducation}></LargeContent>
        <hr className='divider'/>
        <LargeContent title={'SKILLS'} content={allSkills}></LargeContent> 
    </div>
  );
}

export default AboutMe;