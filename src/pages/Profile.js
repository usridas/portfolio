import './Profile.scss';
import skills from '../images/skillsDiagram.svg';
import profile from '../images/profile.jpg';
import resume from '../documents/US_Resume_03-06-24.pdf'

export const Profile = () => {
    return (
    <div className='profileContainer'>
        <h1>
            Hi, I'm Umaiyal!
        </h1>
        <div className='aboutMeContainer'>
            <div style={{display:'flex', flexDirection: 'column'}}>
                <div className='profileText'>
                    <div className='textContainer'><p>After graduating from the University of Illinois at Urbana-Champaign with a Bachelor's degree in Computer Engineering and a minor in Art & Design, I moved to San Diego, California to start work as a software engineer.  Through work, I was able to explore my love for development, design, and management. I love the intersection between art and technology and aim to be a bridge between these two fields.</p></div>
                    <div className='textContainer'><p>In my free time, I like to create art, do home improvement and make DIY projects, and play video games. I am also a mental health advocate and love promoting conversation around this topic. I am currently searching for work in the UI/UX field and am ready to apply my frontend development and design knowledge.</p></div>
                    <div className='textContainer'><p style={{color:'#99871E'}}>I am currently searching for work in the UI/UX field and am ready to apply my frontend development and design knowledge.</p></div>
                </div>
                <div className='buttonContainerProfile'><a className='resumeButton' href={resume}>Click here to view my resume</a></div>
            </div>
            <div className='profilePictureContainer'><img src={profile} className='profilePicture'/></div>
        </div>
        <div className='resumeContentContainer'>
            <div>
                <h2>Education</h2>
                <div className='textContainer'>
                    <p>Bachelor of Science in Computer Engineering, Minor in Art & Design</p>
                    <p style={{color:'#99871E'}}>University of Illinois at Urbana-Champaign: 2016 - 2020</p>
                </div>
                <h2>Experience</h2>
                <div className='textContainer'>
                    <p>Software Engineer and Scrum Master at Viasat</p>
                    <p style={{color:'#99871E'}}>June 2021 - November 2023</p>
                </div>
                <div className='textContainer'>
                    <p>Graphic Design Intern at the University of Illinois Urbana-Champaign</p>
                    <p style={{color:'#99871E'}}>September 2019 - May 2020</p>
                </div>
                <div className='textContainer'>
                    <p>IT Software Engineering and Design Intern at Viasat</p>
                    <p style={{color:'#99871E'}}>May 2019 - August 2020</p>
                </div>
                <div className='textContainer'>
                    <p>Small Cells System Engineering Intern at Nokia</p>
                    <p style={{color:'#99871E'}}>June 2018 - August 2018</p>
                </div>
                <h2>Achievements & Courses</h2>
                <div className='textContainer'><p>Certified ScrumMaster from Scrum Alliance</p></div>
                <div className='textContainer'><p>Grace Hopper Conference 2021 Speaker for Viasat: The Intersection of Art and Technology</p></div>
                <div className='textContainer'><p>Learn UI Design Course (https://www.learnui.design/)</p></div>
            </div>
            <div>
                <h2>Skills</h2>
                <img src={skills}/>
            </div>
        </div>
    </div>
    )
}