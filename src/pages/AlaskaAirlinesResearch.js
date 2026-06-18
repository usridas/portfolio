import './Pages.css';
import TextContainer from '../components/Text/TextContainer.js';
import {
    AlaskaAirlinesParticipants,
    AlaskaAirlinesAffinityDiagram,
    AlaskaAirlinesCompetitiveFeatureMatrix,
    AlaskaAirlinesSWOTAnalysis,
    AlaskaAirlinesKanoAnalysis,
} from '../assets/images/index.js';
import AlaskaAirlinesSlideDeck from '../assets/documents/AlaskaAirlinesSlideDeck.pdf'
import PlainImage from '../components/Images/PlainImage.js';
import Button from '../components/Button/Button.js';
import Tag from '../components/Tag/Tag.js';
import ProjectGrid from '../components/Grid/ProjectGrid.js';

export const AlaskaAirlinesResearch = () => {

    const alaskaAirlinesTags = <div className='tags'>
        <Tag type='Research' text='USER INTERVIEWING'/>
        <Tag type='Research' text='AFFINITY DIAGRAMMING'/>
        <Tag type='Research' text='JOURNEY MAPPING'/>
        <Tag type='Research' text='PERSONA DEVELOPMENT'/>
      </div>
    const content = <div className='summaryContent'>
        {alaskaAirlinesTags}
        <p style={{marginBottom: '24px'}}>{'This research was conducted to develop an understanding of the experience of an Alaska Airlines customer and identify pain points of the Alaska Airlines website booking flow. Using this information, we can seek out ways to increase completed bookings, improve attach rate, and reduce confusion when comparing fares and add-ons.'}</p>
        <Button type='Primary' text='SEE FULL SLIDE DECK' link={AlaskaAirlinesSlideDeck}/>
    </div>

    const competitiveAnalysis1 = <TextContainer title={'COMPETITOR SELECTION'} text={'Direct Competitors\n• Delta Airlines\n• American Airlines\n\nAspirational Competitor\n• Qatar Airways'} />;
    const competitiveAnalysis2 = <PlainImage plainImageProps={{title: "COMPETITIVE FEATURE MATRIX", imagePath: AlaskaAirlinesCompetitiveFeatureMatrix}}/>;
    const competitiveAnalysis3 = <PlainImage plainImageProps={{title: "SWOT ANALYSIS", imagePath: AlaskaAirlinesSWOTAnalysis}}/>;
    const competitiveAnalysis4 = <PlainImage plainImageProps={{title: "KANO ANALYSIS", imagePath: AlaskaAirlinesKanoAnalysis}}/>;

    const researchPlan1 = <TextContainer title={'OBJECTIVES'} text={'Learning Goals:\n• What are the experiences of Alaska Airlines customers?\n• What part of the booking flow is most confusing or difficult to complete?\n• What discourages or limits customers from completing a booking?\n• What discourages or limits customers from attaching add-ons?\n• What does the customer like or want to see more of in the booking flow?\n• What does the ideal booking flow look like?'} />;
    const researchPlan2 = <TextContainer title={'METHODOLOGY'} text={'Moderated usability testing:\n• 2 moderated testers, both were recruited through personal connections\n\nUnmoderated usability testing:\n• 4 Userbrain testers\n    • 2 testers were recruited through UserBrain credits\n    • 2 testers were recruited through personal connections'} />;
    const researchPlan3 = <TextContainer title={'TASKS'} text={'1. Choosing flights\n2. Choosing seats\n3. Choosing add-ons'} />;
    const researchPlan4 = <PlainImage plainImageProps={{title: "PARTICIPANTS", imagePath: AlaskaAirlinesParticipants}}/>;

    const affinityDiagram1 = <TextContainer title={'AFFINITY DIAGRAM'} text={'• Users need to expend more effort and go back and forth to see flight details and compare flight information.\n• Lack of clarity and visibility of information about flight tiers leads to confusion and lack of confidence in flight decisions.\n• Users do not want to expend extra mental effort to find unclear or hidden information and tend to overlook details throughout the booking process.\n• Users prioritize price and default to habits when making decisions; they will avoid extra costs unless they are confident they are getting a good deal.'} />;
    const affinityDiagram2 = <PlainImage plainImageProps={{imagePath: AlaskaAirlinesAffinityDiagram}}/>;

    const opportunity1 = <TextContainer subtitle={'P1 (Almost P0): High Priority'} title={'HOW MIGHT WE ENABLE USERS TO VIEW AND COMPARE FLIGHT INFORMATION WITHOUT UNNECESSARY STEPS OR NAVIGATION?'} text={'I recommend providing a clear navigation component in order to address repeated navigation issues during the flight choice step. This will help us reduce frustration and flight choice step duration so we can increase completed bookings.'}/>;
    const opportunity2 = <TextContainer subtitle={'P1: High Priority'} title={'HOW MIGHT WE CREATE CLARITY DURING THE FLIGHT CHOICE STEP IN ORDER TO BOOST CONFIDENCE IN DECISIONS?'} text={'I recommend editing the content of the transitional modal to provide details of the chosen flight tier because users could not find basic tier information when comparing flights. This will help increase customer confidence and lower booking abandonment so we can increase completed bookings and trust among our customer base.'}/>;
    const opportunity3 = <TextContainer subtitle={'P2: Future Roadmap'} title={'HOW MIGHT WE REDUCE COGNITIVE LOAD AND INCREASE VISIBILITY OF ATTACHMENTS SO THEY ARE NOT OVERLOOKED?'} text={'I recommend emphasizing the leg of the flight a user is choosing seats for and adding a seat confirmation component in order to improve visibility and address accidentally missed seat selection. This will help us see an increased rate of completed seat selection so we can increase attachment rate.'}/>;
    const opportunity4 = <TextContainer subtitle={'P2: Future Roadmap'} title={'HOW MIGHT WE HIGHLIGHT ADD-ONS AND SHOW THEIR VALUE CLEARLY SO THAT USERS ARE WILLING TO EXPLORE OPTIONS OUTSIDE OF THEIR HABITUAL CHOICES?'} text={'I recommend moving add-ons like travel insurance (with clear, contextual information such as weather and international travel indicators) and the Atmos Rewards card to a dedicated pre-checkout step, because users overlooked add-ons when it was interspersed with payment details. This will improve add-on visibility and consideration so we can increase attachment rate and Atmos Rewards plan enrollment.'}/>;

    const competitiveAnalysis = 
        <div className='sectionContainer'>
            {competitiveAnalysis1}
            {competitiveAnalysis2}
            {competitiveAnalysis3}
            {competitiveAnalysis4}
        </div>;
    const researchPlan =
        <div className='sectionContainer'>
            {researchPlan1}
            {researchPlan2}
            {researchPlan3}
            {researchPlan4}
        </div>;

    const affinityDiagram = 
        <div className='sectionContainer'>
            {affinityDiagram1}
            {affinityDiagram2}
        </div>;

    const opportunities = 
        <div className='sectionContainer'>
            {opportunity1}
            {opportunity2}
            {opportunity3}
            {opportunity4}
        </div>;

    const gridArray = [
        {title: 'ALASKA AIRLINES RESEARCH', content: content},
        {title: 'COMPETITIVE ANALYSIS', content: competitiveAnalysis},
        {title: 'RESEARCH PLAN', content: researchPlan},
        {title: 'KEY FINDINGS', content: affinityDiagram},
        {title: 'OPPORTUNITIES', content: opportunities}
    ]

    return (
        <ProjectGrid gridProps={gridArray} removeBio={true}/>
    );
}

export default AlaskaAirlinesResearch;
