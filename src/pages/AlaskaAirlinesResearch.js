import './Pages.css';
import TextContainer from '../components/Text/TextContainer.js';
import {
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
import ImageSlide from '../components/Images/ImageSlide.js';
import { useScreenResolution } from '../utils/ScreenSize.tsx';

export const AlaskaAirlinesResearch = () => {
    const { isSmall, isXSmall } = useScreenResolution();
    const isMobile = isSmall || isXSmall;

    const summaryContent = <div className='summaryContent'>
        <p>This research was conducted to develop an understanding of the experience of an Alaska Airlines customer and identify pain points of the Alaska Airlines website booking flow. Using this information, we can seek out ways to increase completed bookings, improve attach rate, and reduce confusion when comparing fares and add-ons.</p>
        <div style={{marginBottom: '24px'}}><Button type='Primary' text='VIEW FULL SLIDE DECK' link={AlaskaAirlinesSlideDeck}/></div>
        <div className='steps'>
            <div className='step'>
                {!isMobile && <div className='stepNumber'><h1>1</h1></div>}
                <div className='journeyCard'>
                    <h2 style={{color: '#FF90BE', textAlign: 'left'}}><span style={{display: isMobile ? 'unset' : 'none'}}>1. </span>DISCOVERY</h2>
                    <p>I conducted a <span style={{fontWeight: 'bold', color: '#94003D'}}>competitive analysis against 3 airlines:</span><br/>• Delta Airlines<br/>• American Airlines<br/>• Qatar Airways.<br/><br/>I also held <span style={{fontWeight: 'bold', color: '#94003D'}}>6 usability tests:</span><br/>• 2 moderated<br/>• 4 unmoderated</p>
                </div>
            </div>
            <div className='step'>
                {!isMobile && <div className='stepNumber'><h1>2</h1></div>}
                <div className='journeyCard'>
                    <h2 style={{color: '#FF90BE', textAlign: 'left'}}><span style={{display: isMobile ? 'unset' : 'none'}}>2. </span>INSIGHTS</h2>
                    <p>Users face friction throughout the booking flow due to <span style={{fontWeight: 'bold', color: '#94003D'}}>poor navigation and unclear flight information</span>, often causing them to miss or overlook important details. Users are also reluctant to purchase add-ons unless they feel confident they're getting a good deal.</p>
                </div>
            </div>
            <div className='step'>
                {!isMobile && <div className='stepNumber'><h1>3</h1></div>}
                <div className='journeyCard'>
                    <h2 style={{color: '#FF90BE', textAlign: 'left'}}><span style={{display: isMobile ? 'unset' : 'none'}}>3. </span>NEXT STEPS</h2>
                    <p>I would prioritize providing a <span style={{fontWeight: 'bold', color: '#94003D'}}>clear navigation component to address repeated navigation issues</span> and <span style={{fontWeight: 'bold', color: '#94003D'}}>reconfirming chosen flight details in a transitional modal for transparency.</span> These actions would help increase customer confidence, which will lead to an upturn of completed bookings and boost trust among the customer base.</p>
                </div>
            </div>
        </div>
    </div>

    const problemSlideProps = [
        {imagePath: AlaskaAirlinesCompetitiveFeatureMatrix},
        {imagePath: AlaskaAirlinesSWOTAnalysis},
        {imagePath: AlaskaAirlinesKanoAnalysis},
    ];

    const problem1 = <TextContainer title={'WHAT DO I WANT TO LEARN HERE?'} text={'• What are the experiences of Alaska Airlines customers?\n• What part of the booking flow is most confusing or difficult to complete?\n• What discourages or limits customers from completing a booking or attaching add-ons?\n• What does the customer like or want to see more of in the booking flow?\n• What does the ideal booking flow look like?'} />;
    const problem2 = <TextContainer title={'HOW CAN I GET THIS INFORMATION?'} text={'To start my research, I conducted a competitive analysis against Delta Air Lines, American Airlines, and Qatar Airways. The main factors I decided to hone in one when choosing competitors was price and places the airline serviced. I chose Delta Air Lines and American Airlines to be two direct competitors to Alaska Airlines, as they all seem to serve similar populations. Alaska, Delta, and American are approximately the same price, but Delta and American service a lot more locations than Alaska. I hope to gain some insight as to where Alaska might be falling short and how to ensure they can maintain a large presence over the West Coast. I chose Qatar Airways to be an aspirational competitor to Alaska Airlines, since Qatar is known for its luxury experience and technological excellence and innovation. I hope to gain inspiration from some of Qatar\'s luxury design features and apply them to Alaska.\n\nAfter understanding my competitors, I created a usability test consisting of three task scenarios: choosing flights, choosing seats, and choosing add-ons. These scenarios seemed to be the most relevant areas to hone in on according to my cognitive task analysis, red routes, competitive analysis, and Alaska\'s business priorities. I ended up conducting 6 usability tests, 2 moderated and 4 unmoderated tests via Userbrain. This was my first time conducting unmoderated tests! I got better over time, but making a detailed script without leading users was quite the task.\n'} />;
    const problem3 = <div style={{display: 'flex', width: 'stretch', justifyContent: 'center'}}><ImageSlide imageSlideProps={problemSlideProps} imageMaxWidth={true}/></div>;

    const insight1 = <div className='columnWith12Gap'><Tag type='P0' text='P1 (ALMOST P0): HIGH PRIORITY'/> <TextContainer title={'USERS NEED TO EXPEND MORE EFFORT AND GO BACK AND FORTH TO SEE FLIGHT DETAILS AND COMPARE FLIGHT INFORMATION.'} text={'During flight selection, users used back and forth navigation and trial and error to view and understand all their flight options. The average time was 4 minutes 36 seconds, by far the longest of all tasks. Friction during the flight choice step is causing frustration among users and increases the risk of booking abandonment, leading to lost sales.'}/></div>;
    const insight2 = <div className='columnWith12Gap'><Tag type='P1' text='P1: HIGH PRIORITY'/><TextContainer title={'LACK OF CLARITY AND VISIBILITY OF INFORMATION ABOUT FLIGHT TIERS LEADS TO CONFUSION AND LACK OF CONFIDENCE IN FLIGHT DECISIONS.'} text={'During flight selection, users were not confident in their decision and expressed confusion. Furthermore, some 2/6 users failed the task by choosing non-refundable flights, making this the task with the lowest success rate. This lack of confidence could be the cause of booking abandonment during the flight choice step, leading to lost sales and decreased trust.'}/></div>;
    const insight3 = <div className='columnWith12Gap'><Tag type='P2' text='P2: FUTURE ROADMAP'/><TextContainer title={'USERS DO NOT WANT TO EXPEND EXTRA MENTAL EFFORT TO FIND UNCLEAR OR HIDDEN INFORMATION AND TEND TO OVERLOOK DETAILS THROUGHOUT THE BOOKING PROCESS.'} text={'For seat selection and add-ons, users were confident and quick in decision making, even if they missed or overlooked details. 2/6 users were confident in their seats but missed seat selection for one leg of their flight and 4/6 users overlooked the Atmos Rewards card. Users risk overlooking details throughout the booking process due to the high cognitive load, reducing potential attachments.'}/></div>;
    const insight4 = <div className='columnWith12Gap'><Tag type='P2' text='P2: FUTURE ROADMAP'/><TextContainer title={'USERS PRIORITIZE PRICE AND DEFAULT TO HABITS WHEN MAKING DECISIONS; THEY WILL AVOID EXTRA COSTS UNLESS THEY ARE CONFIDENT THEY ARE GETTING A GOOD DEAL.'} text={'All users stated price as a deciding factor for their decisions, looking for the “best deal”, “cheapest”, or “cost effective” options. Furthermore, users were confident in their seat selection and add-on selection and made quick decisions during these steps. Average time for choosing add-ons was 1 minute 9 seconds, the shortest of all tasks and all 6 users opted “NO” for travel insurance. Without clear benefits of purchasing add-ons, users are less confident and therefore not incentivized to increase attach rate.'}/></div>;
    const insight5 = <div style={{display: 'flex', width: 'stretch', justifyContent: 'center'}}><PlainImage plainImageProps={{imagePath: AlaskaAirlinesAffinityDiagram}} imageMaxWidth={true}/></div>;

    const opportunity1 = <div className='columnWith12Gap'><Tag type='P0' text='P1 (ALMOST P0): HIGH PRIORITY'/><TextContainer title={'HOW MIGHT WE ENABLE USERS TO VIEW AND COMPARE FLIGHT INFORMATION WITHOUT UNNECESSARY STEPS OR NAVIGATION?'} text={'I recommend providing a clear navigation component in order to address repeated navigation issues during the flight choice step. This will help us reduce frustration and flight choice step duration so we can increase completed bookings.'}/></div>;
    const opportunity2 = <div className='columnWith12Gap'><Tag type='P1' text='P1: HIGH PRIORITY'/><TextContainer title={'HOW MIGHT WE CREATE CLARITY DURING THE FLIGHT CHOICE STEP IN ORDER TO BOOST CONFIDENCE IN DECISIONS?'} text={'I recommend editing the content of the transitional modal to provide details of the chosen flight tier because users could not find basic tier information when comparing flights. This will help increase customer confidence and lower booking abandonment so we can increase completed bookings and trust among our customer base.'}/></div>;
    const opportunity3 = <div className='columnWith12Gap'><Tag type='P2' text='P2: FUTURE ROADMAP'/><TextContainer title={'HOW MIGHT WE REDUCE COGNITIVE LOAD AND INCREASE VISIBILITY OF ATTACHMENTS SO THEY ARE NOT OVERLOOKED?'} text={'I recommend emphasizing the leg of the flight a user is choosing seats for and adding a seat confirmation component in order to improve visibility and address accidentally missed seat selection. This will help us see an increased rate of completed seat selection so we can increase attachment rate.'}/></div>;
    const opportunity4 = <div className='columnWith12Gap'><Tag type='P2' text='P2: FUTURE ROADMAP'/><TextContainer title={'HOW MIGHT WE HIGHLIGHT ADD-ONS AND SHOW THEIR VALUE CLEARLY SO THAT USERS ARE WILLING TO EXPLORE OPTIONS OUTSIDE OF THEIR HABITUAL CHOICES?'} text={'I recommend moving add-ons like travel insurance (with clear, contextual information such as weather and international travel indicators) and the Atmos Rewards card to a dedicated pre-checkout step, because users overlooked add-ons when it was interspersed with payment details. This will improve add-on visibility and consideration so we can increase attachment rate and Atmos Rewards plan enrollment.'}/></div>;

    const researchPlan =
        <div className='sectionContainer'>
            {problem1}
            {problem2}
            {problem3}
        </div>;

    const insights = 
        <div className='sectionContainer'>
            {insight1}
            {insight2}
            {insight3}
            {insight4}
            {insight5}
        </div>;            

    const opportunities = 
        <div className='sectionContainer'>
            {opportunity1}
            {opportunity2}
            {opportunity3}
            {opportunity4}
        </div>;

    const gridArray = [
        {title: 'OVERVIEW', content: summaryContent},
        {title: 'DISCOVERY', content: researchPlan},
        {title: 'INSIGHTS', content: insights},
        {title: 'NEXT STEPS', content: opportunities},
    ]

    return (
        <div>
            <h1 className='title'>ALASKA AIRLINES RESEARCH</h1>
            <ProjectGrid gridProps={gridArray} removeBio={true}/>
        </div>
    );
}

export default AlaskaAirlinesResearch;
