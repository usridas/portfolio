import viasatNavigation from '../images/ViasatNavigation.png';
import viasatArticle from '../images/ViasatArticle.png';
import viasatCommonQuestions from '../images/ViasatCommonQuestions.png';
import viasatAddOns from '../images/ViasatAddOns.png';
import viasatStream from '../images/ViasatStream.png';
import seniorProjectDesignDoc from '../documents/Senior_Project_Design_Doc.pdf';
import sriLankaTeaPlantations from '../documents/Sri_Lanka_Tea_Plantations.pdf';
import '../pages/Profile.scss';

export const elfsterRedesignInformation = {
    title: 'Elfster Redesign',
    body: [
      {subtitle: 'Objective', bodyText: 'Redesign the Elfster gift exchange mobile app to be more user friendly, intuitive, and versatile. Elfster is an app that allows users to create wishlists and groups with friends to organize gift exchanges. When a group exchange is made, a user can create a wishlist which friends can see and order from. Essentially this app should allow friends to get purposeful gifts and to avoid duplicates.'},
      {subtitle: 'Identify the problem', bodyText: 'This is a collection of feedback I collected from myself and other Elfster users about the pros and cons of the app. A lot of the criticism of the app rose from difficult navigation, the functionality of wishlists, and excess information or advertising.', extraContent: <iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)", marginTop: '20px'}} width="100%" height="450px" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FCLFxd2E4e0SxYfQRtpbrnI%2FElfster-Redesign%3Ftype%3Ddesign%26node-id%3D73%253A538%26mode%3Ddesign%26t%3Dz5wCo3K9qpUFXKEh-1" allowfullscreen></iframe>},
      {subtitle: 'Research and extraction', bodyText: 'Take screenshots and extract essential information, navigation, and interactions in order to optimize the mobile app.', extraContent: <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)', marginTop: '20px'}} width="100%" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FCLFxd2E4e0SxYfQRtpbrnI%2FElfster-Redesign%3Ftype%3Ddesign%26node-id%3D125%253A103%26mode%3Ddesign%26t%3Dz5wCo3K9qpUFXKEh-1" allowfullscreen></iframe>},
      {subtitle: 'Ideate and execute solutions', bodyText: 'Use the existing framework of the app and essential ideas to create a better user experience for customers of Elfster.', extraContent: <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)', marginTop: '20px'}} width="100%" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FCLFxd2E4e0SxYfQRtpbrnI%2FElfster-Redesign%3Ftype%3Ddesign%26node-id%3D54%253A436%26mode%3Ddesign%26t%3Dz5wCo3K9qpUFXKEh-1" allowfullscreen></iframe>},
    ]
};

export const myViasatAppInformation = {
    title: 'My Viasat App',
    body: [
        {subtitle: 'Objective', bodyText: 'Update the My Viasat application user interface to provide the most useful data to clients while simultaneously being intuitive and aesthetic. I worked on both frontend and backend tasks to achieve this, but leaned more into frontend. To name a few, as a team, we used React, TypeScript, and Redux for web and mobile development. This project was done during my time working at Viasat Inc. as a software engineer.'},
        {subtitle: 'Navigation', bodyText: 'One of the most challenging tasks I worked on was developing the new navigation bar for My Viasat. The design itself is fairly simple and intuitive, but incorporating tab animations for accessibility and overlaying dropdowns that contained dynamic information about the customer proved to be difficult tasks. Furthermore, at smaller resolutions, this navigation bar became a hamburger button with a full screen dropdown. This was one of the most satisfying tasks to complete.', extraContent: <img src={viasatNavigation} width={'100%'}/>},
        {subtitle: 'Articles', bodyText: 'This task encouraged me to hone my frontend development skills and create succinct, clean, reusable code. I essentially made this component into a template, allowing other reuse anywhere else on the site with replaceable images, titles, body texts, and links. Creating components that can be personalized and changed quickly proved to be incredibly valuable, since text and images can become outdated and change on a whim.', extraContent: <img src={viasatArticle} width={'100%'}/>},
        {subtitle: 'Common questions', bodyText: 'This was one of my first projects when working with Viasat. Similar to the article component I created, I was able to produce a dynamic frontend component with clean, minimal code. A developer simply needed to add in the questions, answers, and any links into a struct and the component would take care of formatting, design, and animations.', extraContent: <img src={viasatCommonQuestions} width={'50%'}/>},
        {subtitle: 'Viasat Stream', bodyText: 'Although this component was simple for me to develop, it showed me the impermanence of products in business; this advertisement design was constantly shifting under my feet due to changes from both Viasat and Disney. Through developing this, I learned patience and the art of detachment; although I should take pride in my work, I should also understand that some projects may change or even fall through due to the nature of the industry, and I shouldn\'t be heartbroken.', extraContent: <img src={viasatStream} width={'100%'}/>},
        {subtitle: 'Add Ons', bodyText: 'For this add on component, I was required to design both the back and front end. For backend, I had to determine if a customer already had add ons for their account, and I was to only present add on promotions for any they did not have. In terms of frontend, I learned a lot about dynamic sizing and scrolling depending on the resolution of the screen.', extraContent: <img src={viasatAddOns} width={'100%'}/>}
    ]
};

export const serotoninVideoGameInformation = {
    title: 'Serotonin Video Game',
    body: [
        {subtitle: 'Objective', bodyText: 'Creating a video game that highlights the importance of mental health, how it affects you, and how to make decisions based on your own desires, rather than based on the influence of others.'},
        {subtitle: 'Brainstorm', bodyText: 'Here is my brainstorm session within my design sketchbook. I had some ideas of what I wanted the video game to entail and how I wanted to express it via design.  Since I am a mental health advocate, I thought a game would be an interesting and immersive way to open up conversation.'},
        {subtitle: 'Mockup', bodyText: 'These are some designs and mockups I made via Pixilart, a free online tool to create pixelated artwork and Adobe Illustrator. I really enjoyed experimenting with pixel art which was eye-catching and intricate.  I wanted the game to capture the emotions and hardships of growing up and finding your own path, so I emphasized it with a nostalgic, retro style.'},
    ]
};

export const sriLankaTeaProjectInformation = {
    title: 'Sri Lanka Tea Project',
    body: [
        {subtitle: 'Objective', bodyText: 'Creating a website that allows consumers to buy ethical tea from Sri Lanka. Also allows consumers to volunteer or donate in order to support tea plantation workers in Sri Lanka.  This project should encourage fair treatment of tea plantation workers.', extraContent: <a href={sriLankaTeaPlantations} className='resumeButton' style={{marginTop: '20px'}}>Research slide deck</a>},
        {subtitle: 'Mockups', bodyText: 'These are my mockups for this project. I wanted to include calm, soothing colors, and I associated greens with tea plants.  I made these with Adobe XD.'}
    ]
};

export const seniorDesignInformation = {
    title: 'Senior Design: COVID-19 Project by Tyler Schuldt, Isha Sharma, and Umaiyal Sridas',
    body: [
        {subtitle: 'Objective', bodyText: 'COVID-19 refers to the respiratory illness caused by the SARS-CoV-2 Virus. This basic Android app allows users to quickly record symptoms and contact emergency if necessary. This is an easy way to stay cognizant of your own health during the COVID-19 pandemic and promotes CDC social distancing guidelines.  Within my group, I was responsible for project ideation, diagram creation, and software development and also assisted with general research.'},
        {subtitle: 'Android app', bodyText: 'These are the pages of my Android application. I wanted to include pastel colors, so as to not induce panic. The blues are associated with the medical field/medical terms, while the yellow serves as a caution, and red shows an alert.  I made these with Android Studio.', extraContent: <div style={{display: 'flex', flexDirection: 'row', gap: '20px', marginTop: '20px'}}><a href='https://github.com/usridas/covid-19-app' className='resumeButton'> Android Studio Java code</a><a href={seniorProjectDesignDoc} className='resumeButton'>Design document</a></div>}
    ]
};

export const visualAudioAmalgamationsInformation = {
    title: 'Visual-Audio Amalgamations',
    body: [
        {subtitle: 'Objective', bodyText: 'Designing a multi-sensory artistic experience for an audience to enjoy. These are some different ways people can interact with the art and listen to music simultaneously.  By combining art and music elements, the audience can fully immerse themselves in an audiovisual experience.'},
        {subtitle: 'Final product', bodyText: 'For the two images above, you can use Spotify to scan the codes and listen to songs I enjoy.  These are meant to be printed onto a square sheet of paper to act as sort of a "paper disk", each with a different song or playlist. For the two images below, you can use your phone camera to scan the QR codes and listen to songs I associate with the photos I have taken.  These are double-sided cards (approximately the size of a playing card) that include the photo in the front and the QR code in the back.  Each card is made for a different song.'}
    ]
}