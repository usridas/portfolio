import './Pages.css';
import TextContainer from '../components/Text/TextContainer.js';
import {
    TraderJoesAffinityDiagram,
    TraderJoesMayaJourneyMap,
    TraderJoesJessJourneyMap,
    TraderJoesBanner,
} from '../assets/images';
import TraderJoesSlideDeck from '../assets/documents/TraderJoesSlideDeck.pdf'
import PlainImage from '../components/Images/PlainImage.js';
import Button from '../components/Button/Button.js';
import ProjectGrid from '../components/Grid/ProjectGrid.js';
import { useScreenResolution } from '../utils/ScreenSize.tsx';
import Tag from '../components/Tag/Tag.js';

export const TraderJoesResearch = () => {

    const { isSmall, isXSmall } = useScreenResolution();
    const isMobile = isSmall || isXSmall;

    const summaryContent = <div className='summaryContent'>
        <p>Although grocery shopping is a seemingly simple and regular task, there are ways the in-store and online shopping experience can be improved and optimized for the customer. In this research, we will focus on the experience of Trader Joe's shoppers and develop an understanding of customer needs and pain points during the grocery shopping process in order to define some opportunity spaces.</p>
        <Button type='Primary' text='VIEW FULL SLIDE DECK' link={TraderJoesSlideDeck}/>
        <div className='steps'>
            <div className='step'>
                {!isMobile && <div className='stepNumber'><h1>1</h1></div>}
                <div className='journeyCard'>
                    <h2 style={{color: '#EC2B7A', textAlign: 'left'}}><span style={{display: isMobile ? 'unset' : 'none'}}>1. </span>DISCOVERY</h2>
                    <p>I held <span style={{fontWeight: 'bold', color: '#94003D'}}>5 user interviews followed by online and in-person shadowing sessions.</span> During online shadowing sessions, I had each user complete a few tasks on Trader Joe's website and during in-person shadowing sessions, I followed each user during a normal Trader Joe's trip.</p>
                </div>
            </div>
            <div className='step'>
                {!isMobile && <div className='stepNumber'><h1>2</h1></div>}
                <div className='journeyCard'>
                    <h2 style={{color: '#EC2B7A', textAlign: 'left'}}><span style={{display: isMobile ? 'unset' : 'none'}}>2. </span>INSIGHTS</h2>
                    <p>Customers appreciate Trader Joe's for their unique snacks, frozen food, and seasonal items, but <span style={{fontWeight: 'bold', color: '#94003D'}}>don't use Trader Joe's as their primary grocery store.</span> Customers also <span style={{fontWeight: 'bold', color: '#94003D'}}>lament the parking situation</span> at Trader Joe's.</p>
                </div>
            </div>
            <div className='step'>
                {!isMobile && <div className='stepNumber'><h1>3</h1></div>}
                <div className='journeyCard'>
                    <h2 style={{color: '#EC2B7A', textAlign: 'left'}}><span style={{display: isMobile ? 'unset' : 'none'}}>3. </span>NEXT STEPS</h2>
                    <p>I would prioritize finding a way to <span style={{fontWeight: 'bold', color: '#94003D'}}>make Trader Joe's people's grocery store, rather than a supplement.</span> By focusing efforts on becoming a primary grocery store, Trader Joe's can increase revenue through more regularly purchased items, like fresh produce. I would also recommend <span style={{fontWeight: 'bold', color: '#94003D'}}>addressing the insufficient parking.</span>  This would remove an obstacle for potential customers, hopefully increasing the customer base.</p>
                </div>
            </div>
        </div>
    </div>

    const researchPlan1 = <TextContainer title={'WHAT DO I WANT TO LEARN HERE?'} text={'• What does Trader Joe\'s offer in terms of products and services?\n• What are some strengths of Trader Joe\'s and what attracts customers?\n• What are some pain points within the shopping experience?\n• Can a digital avenue help increase interest in Trader Joe\'s (such as an app or online ordering)?\n• Can a membership increase interest in Trader Joe\'s?'} />;
    const researchPlan2 = <TextContainer title={'HOW CAN I GET THIS INFORMATION?'} text={'First, I conducted some secondary research to understand what made Trader Joe\'s so special. Trader Joe\'s was made for college students who were well educated but did not have a high income. Trader Joe\'s wanted a fair priced option for this demographic and created this space by eliminating a middleman. Trader Joe\'s mostly sells products of its own brand. They do not have an app, nor can you order online, nor can you order through Uber Eats or DoorDash. There is no membership card for Trader Joe\'s.\n\nUsing this information, I created a user interview guide to discuss shopping habits, the Trader Joe\'s shopping experience, the Trader Joe\'s brand, the Trader Joe\'s website, and finally, a possible membership or app.'} />;

    const affinityDiagram1 = <TextContainer title={'HIGHLIGHTS'} text={'• Participants need to supplement Trader Joe\'s with other grocery stores, because Trader Joe\'s doesn\'t have all they need.\n• Parking is not good at most Trader Joe’s, due to lack of space and/or the huge crowds.\n• On the website, participants said the recipes are unique and they would take time to explore this. They would like to be able to add ingredients directly from the recipe, rather than re-navigating.\n• The snacks, seasonal items, and frozen items are delicious and iconic, and they have a wide variety.'} />;
    const affinityDiagram2 = <TextContainer title={'SURPRISING NOTES'} text={'• Most participants say part of the appeal of Trader Joe\'s is going in person and exploring the aisles, but one participant wishes they did have a delivery option. I was expecting more participants to advocate for online ordering options!\n• There was not a large appeal for an app or membership program, even if the participants did mention having memberships for other grocery stores.'} />;
    const affinityDiagram3 = <div style={{display: 'flex', width: 'stretch', justifyContent: 'center'}}><PlainImage plainImageProps={{imagePath: TraderJoesAffinityDiagram}} imageMaxWidth={true}/></div>;

    const persona1 = <TextContainer text={'Maya is a pretty planned person.  She is quite busy, but will find time to do her groceries every week on the weekend with the list she has accrued over the week. She does her main shopping at an alternative store, because it will have all the essentials at a lower price, and then follows up with a trip to Trader Joe’s for snacks, seasonal items, and party gifts. The location and parking of Trader Joe\'s is Maya\'s worst complaint.'}/>;
    const persona2 = <PlainImage plainImageProps={{imagePath: TraderJoesMayaJourneyMap}}/>;
    const persona3 = <TextContainer text={'Jess is an introvert. She has to interact with people a lot at work and values alone time to do her hobbies. She does a majority of her shopping online, but is interested in certain Trader Joe\'s snacks and seasonal items that she sees on social media, so she will go on a day that might be less busy and crowded. Ideally, Jess would stay at home and browse the grocery store website to get her groceries and snacks delivered to her. She really wishes Trader Joe\'s had a delivery or online shopping option, because she does love the snacks and seasonal items, but she doesn\'t like being around people in the store. Sometimes chatting with store employees can be a little tiring.'}/>;
    const persona4 = <PlainImage plainImageProps={{imagePath: TraderJoesJessJourneyMap}}/>;

    const opportunity1 = <div className='columnWith12Gap'><Tag type='P0' text='P1: HIGH PRIORITY'/><TextContainer title={'HOW CAN TRADER JOE\'S ENCOURAGE CUSTOMERS TO SHOP PRIMARILY AT THEIR STORE RATHER THAN HAVING IT AS A SECONDARY STORE WHICH NEEDS A SUPPLEMENT?'} text={'All 5 participants said that they supplement Trader Joe\'s with another grocery store. Customers go to Trader Joe\'s for novelty items, but how can regular grocery shopping be encouraged as well?'}/></div>;
    const opportunity2 = <div className='columnWith12Gap'><Tag type='P0' text='P1: HIGH PRIORITY'/><TextContainer title={'HOW CAN TRADER JOE\'S MAKE THE PARKING SITUATION LESS STRESSFUL AND MORE ACCESSIBLE?'} text={'4/5 participants commented on the insufficient parking at Trader Joe\'s. Parking is not good at most locations, due to lack of space and/or the huge crowds. Essentially, there is not a big enough parking lot for the size of their customer base.'}/></div>;
    const opportunity3 = <div className='columnWith12Gap'><Tag type='P1' text='P2: MEDIUM PRIORITY'/><TextContainer title={'HOW CAN TRADER JOE\'S CREATE A MORE INTUITIVE INGREDIENT LIST ON THEIR WEBSITE FOR CUSTOMERS WHO ARE INTERESTED IN MAKING THEIR RECIPES?'} text={'All 5 participants wanted to be able to add ingredients directly from the recipe, rather than re-navigating between each ingredient and the recipe.'}/></div>;
    const opportunity4 = <div className='columnWith12Gap'><Tag type='P2' text='P3: FUTURE ROADMAP'/><TextContainer title={'HOW CAN TRADER JOE\'S CATER TO CUSTOMERS WHO MAY NOT BE ABLE TO OR WOULD RATHER NOT SHOP IN STORE?'} text={'Although only 1 participant mentioned interest in an online ordering option, and Trader Joe\'s seems to cater to the in-store experience, this might be an area worth considering. Some populations that may be excluded by the lack of delivery options includes people with disabilities, 8 of the U.S. states, and people outside of the U.S. (1 participant noted that on an international trip, some coworkers asked for Trader Joe\'s snacks, as it was not available to them).'}/></div>;
    const opportunity5 = <div className='columnWith12Gap'><Tag type='P2' text='P3: FUTURE ROADMAP'/><TextContainer title={'HOW CAN TRADER JOE\'S CONTINUE TO GENERATE EXCITEMENT AROUND SNACKS AND SEASONAL ITEMS FOR CUSTOMERS?'} text={'All 5 participants mentioned the unique frozen food, snacks, and seasonal items that Trader Joe\'s carries, which you can\'t get anywhere else. This is something that makes Trader Joe\'s stand out from other grocery stores and is something they should continue to innovate on.'}/></div>;

    const researchPlan =
        <div className='sectionContainer'>
            {researchPlan1}
            {researchPlan2}
        </div>;

    const affinityDiagram = 
        <div className='sectionContainer'>
            {affinityDiagram1}
            {affinityDiagram2}
            {affinityDiagram3}
            <div className='columnWith12Gap'>
                <h2 style={{color: '#EC2B7A', textAlign: 'left'}}>PERSONA #1: MAYA AKA THE 'SNACK SEEKER'</h2>
                {persona1}
                {persona2}
            </div>
            <div className='columnWith12Gap'>
                <h2 style={{color: '#EC2B7A', textAlign: 'left'}}>PERSONA #2: JESS AKA THE 'CONVENIENCE CONSUMER'</h2>
                {persona3}
                {persona4}
            </div>
        </div>;

    const opportunities = 
        <div className='sectionContainer'>
            {opportunity1}
            {opportunity2}
            {opportunity3}
            {opportunity4}
            {opportunity5}
        </div>;

    const gridArray = [
        {title: 'OVERVIEW', content: summaryContent},
        {title: 'DISCOVERY', content: researchPlan},
        {title: 'INSIGHTS', content: affinityDiagram},
        {title: 'NEXT STEPS', content: opportunities}
    ]

    return (
        <div>
            <div className='bannerWrapper'>
                <img src={TraderJoesBanner} alt='Alaska Airlines aircraft'/>
            </div>
            <h1 className='title'>TRADER JOE'S RESEARCH</h1>
            <ProjectGrid gridProps={gridArray} removeBio={true}/>
        </div>
    );
}

export default TraderJoesResearch;
