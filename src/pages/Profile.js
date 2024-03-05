import './Profile.scss';
import skills from '../images/skillsDiagram.svg';
import profile from '../images/profile.jpg';
import resume from '../documents/US_Resume_11-07-23.pdf'

export const Profile = () => {
    return (
    <div className='profileContainer'>
        <h1>
            Hi, I'm Umaiyal!
        </h1>
        <div className='aboutMeContainer'>
            <div style={{display:'flex', flexDirection: 'column'}}>
                <p>After graduating from the University of Illinois at Urbana-Champaign with a Bachelor's degree in Computer Engineering and a minor in Art & Design, I moved to San Diego, California to start work as a software engineer.  Through work, I was able to explore my love for development, design, and management. I love the intersection between art and technology and aim to be a bridge between these two fields. In my free time, I like to create art, do home improvement and make DIY projects, and play video games. I am also a mental health advocate and love promoting conversation around this topic. I am currently searching for work in the UI/UX field and am ready to apply my frontend development and design knowledge.</p>
                <div className='buttonContainerProfile'><button href={resume}>Click here to view my resume</button></div>
            </div>
            <img src={profile} style={{width: '469px'}}/>
        </div>
        <div className='resumeContentContainer'>
        <div>
            <h2>Education</h2>
            <p>Bachelor of Science in Computer Engineering, Minor in Art & Design</p>
            <p style={{color:'#99871E'}}>University of Illinois at Urbana-Champaign: 2016 - 2020</p>
            <h2>Experience</h2>
            <p>Software Engineer and Scrum Master at Viasat</p>
            <p style={{color:'#99871E'}}>June 2021 - November 2023</p>
            <p>Graphic Design Intern at the University of Illinois Urbana-Champaign</p>
            <p style={{color:'#99871E'}}>September 2019 - May 2020</p>
            <p>IT Software Engineering and Design Intern at Viasat</p>
            <p style={{color:'#99871E'}}>May 2019 - August 2020</p>
            <p>Small Cells System Engineering Intern at Nokia</p>
            <p style={{color:'#99871E'}}>June 2018 - August 2018</p>
            <h2>Achievements & Courses</h2>
            <p>Certified ScrumMaster from Scrum Alliance</p>
            <p>Grace Hopper Conference 2021 Speaker for Viasat: The Intersection of Art and Technology</p>
            <p>Learn UI Design Course (https://www.learnui.design/)</p>
        </div>
        <div>
            <h2>Skills</h2>
            <img src={skills}/>
        </div>
        </div>
    </div>
    )
}