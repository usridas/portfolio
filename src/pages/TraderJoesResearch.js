import LargeContent from '../components/Content/LargeContent.js';
import { useScreenResolution } from '../utils/ScreenSize.tsx';
import './Pages.css';
import SmallContent from '../components/Content/SmallContent.js';
import TextContainer from '../components/Text/TextContainer.js';
import {
    TraderJoesParticipants,
    TraderJoesAffinityDiagram,
    TraderJoesMayaJourneyMap,
    TraderJoesMayaPersonality,
    TraderJoesJessJourneyMap,
    TraderJoesJessPersonality
} from '../assets/images';
import TraderJoesSlideDeck from '../assets/documents/TraderJoesSlideDeck.pdf'
import PlainImage from '../components/Images/PlainImage.js';
import Button from '../components/Button/Button.js';

export const TraderJoesResearch = ({}) => {

    const { isLarge } = useScreenResolution();
    const content = <div>
        <p style={{marginBottom: '24px'}}>Although grocery shopping is a seemingly simple and regular task, there are ways the in-store and online shopping experience can be improved and optimized for the customer. In this research, we will focus on the experience of Trader Joe\'s shoppers and develop an understanding of customer needs and pain points during the grocery shopping process in order to define some opportunity spaces.</p>
        <Button type='Primary' text='SEE FULL SLIDE DECK' link={TraderJoesSlideDeck}/>
    </div>
    const titleContent = isLarge ? <LargeContent title={'TRADER JOE\'S RESEARCH'} content={<p>{content}</p>}/> : <SmallContent title={'TRADER JOE\'S EXPERIENCE RESEARCH'} content={<p>{content}</p>}/>;

    const researchPlan1 = <TextContainer title={'OBJECTIVES'} text={'Learning Goals:\n• What does Trader Joe\'s offer in terms of products and services?\n• What are some strengths of Trader Joe\'s and what attracts customers?\n• What are some pain points within the shopping experience?\n• Can a digital avenue help increase interest in Trader Joe\'s (such as an app or online ordering)?\n• Can a membership increase interest in Trader Joe\'s?'} />;
    const researchPlan2 = <TextContainer title={'SECONDARY RESEARCH'} text={'Trader Joe\'s was made for college students who were well educated but did not have a high income. Trader Joe\'s wanted a fair priced option for this demographic and created this space by eliminating a middleman.\n\nTrader Joe\'s mostly sells products of its own brand. They do not have an app, nor can you order online, nor can you order through Uber Eats or DoorDash. There is no membership card for Trader Joe\'s.'} />;
    const researchPlan3 = <TextContainer title={'METHODOLOGY'} text={'5 participants executed the following:\n• Interviews before shopping\n• Shadowing website navigation\n• Shadowing shopping'} />;
    const researchPlan4 = <TextContainer title={'INTERVIEW GUIDE'} text={'Interview Guide: \n• Shopping habits\n• Trader Joe\'s shopping experience\n• Trader Joe\'s brand\n• Trader Joe\'s membership or app\n• Trader Joe\'s website\n• Wrap up\n\nTasks:\n• Online\n• In-store'} />;
    const researchPlan5 = <PlainImage plainImageProps={{title: "PARTICIPANTS", imagePath: TraderJoesParticipants}}/>;

    const affinityDiagram1 = <TextContainer title={'AFFINITY DIAGRAM'} text={'• Participants need to supplement Trader Joe’s with other grocery stores, because Trader Joe’s doesn’t have all they need. They go to other grocery stores due mainly to proximity and secondarily to lower prices.\n• Most participants say part of the appeal of Trader Joe’s is going in person and exploring the aisles, but one participant wishes they did have a delivery option.\n• There was not a large appeal for an app or membership program.\n• On the website, participants said the recipes are unique and they would take time to explore this. They would like to be able to add ingredients directly from the recipe, rather than re-navigating.\n• The snacks, seasonal items, and frozen items are delicious and iconic, and they have a wide variety.\n• The ingredients seem to have a better quality than other brands and they have a unique flavor profile.\n• Produce doesn’t seem to be the most fresh or doesn’t last as long as other places.\n• Parking is not good at most Trader Joe’s, due to lack of space and/or the huge crowds.\n• Although lines can be long, checkout generally seems fast.\n• Most participants say the cashiers are talkative and friendly, but one participant stated that some days this is okay, but some days she doesn’t have time or energy to chat.'} />;
    const affinityDiagram2 = <PlainImage plainImageProps={{imagePath: TraderJoesAffinityDiagram}}/>;

    const persona1 = <TextContainer title={'MAYA AKA THE \'SNACK SEEKER\''} text={'Age: 25 years old\nEducation level: Master’s degree\nEmployment: Full-time job\nHousehold: Living alone with long distance partner who comes over occasionally\n\nMaya is a pretty planned person.  She is quite busy, but will find time to do her groceries every week on the weekend with the list she has accrued over the week. She does her main shopping at an alternative store, because it will have all the essentials at a lower price, and then follows up with a trip to Trader Joe’s for snacks, seasonal items, and party gifts.'}/>;
    const persona2 = <TextContainer title={'ABOUT MAYA'} text={'Goals:\nMaya goes to Trader Joe’s to get some charcuterie items for parties and some of her favorite/iconic snacks for herself. She might indulge in a frozen meal, if she feels like it, because Trader Joe’s has some good ones.\n\nExpectations:\nMaya’s ideal shopping trip:\nShe is not on a time restraint. She has a list made and will visit one grocery store to grab all her items. She knows the route to take to get all of her items, but allows herself time to browse through the snack or seasonal aisles.\n\nApproach:\nMaya creates a grocery list for her house to go shopping every week. First, she shops at her regular grocery store to get the basic produce and ingredients on her list, but she still wants to get a few fun items. She heads over to Trader Joe’s where she goes aisle by aisle through the whole store and picks out some fun items that catch her eye.\n\nFrustrations:\nThe location and parking of Trader Joe’s is Maya’s worst complaint. Aside from that, she notes that she does almost always need to supplement a Trader Joe’s trip with another grocery store, due to the availability and pricing of basic produce and ingredients.'}/>;
    const persona3 = <PlainImage plainImageProps={{title: 'PERSONALITY TRAITS', imagePath: TraderJoesMayaPersonality}}/>;
    const persona4 = <PlainImage plainImageProps={{title: 'JOURNEY MAP', imagePath: TraderJoesMayaJourneyMap}}/>;
    const persona5 = <TextContainer title={'JESS AKA THE \'CONVENIENCE CONSUMER\''} text={'Age: 32 years old\nEducation level: Master’s degree\nEmployment: Full-time job\nHousehold: Living with spouse\n\nJess is an introvert. She has to interact with people a lot at work and values alone time to do her hobbies. She does a majority of her shopping online, but is interested in certain Trader Joe’s snacks and seasonal items that she sees on social media, so she will go on a day that might be less busy and crowded.'}/>;
    const persona6 = <TextContainer title={'ABOUT JESS'} text={'Goals:\nJess goes to Trader Joe’s for her favorite specialty items and interesting snacks she sees on social media. Her main groceries are delivered to her door, but she can only get certain seasonal items at Trader Joe’s.\n\nExpectations:\nJess’s ideal shopping trip:\nShe stays at home and browses the grocery store website to get her groceries and snacks delivered to her.\nOR\nShe goes to the store during a time where a minimal amount of customers and employees are there. She has a quick checkout with minimal interaction.\n\nApproach:\nJess has a mental list of snacks and specialty items she likes and ones that interested her on social media that she would like to try. She goes aisle by aisle through the whole store, browsing interesting seasonal items, frozen foods, and snacks. Once she gets overwhelmed with the selection, especially without a concrete list, she beelines for the register.\n\nFrustrations:\nJess really wishes Trader Joe’s had a delivery or online shopping option, because she does love the snacks and seasonal items, but she doesn’t like being around people in the store. Sometimes chatting with store employees can be a little tiring.'}/>;
    const persona7 = <PlainImage plainImageProps={{title: 'PERSONALITY TRAITS', imagePath: TraderJoesJessPersonality}}/>;
    const persona8 = <PlainImage plainImageProps={{title: 'JOURNEY MAP', imagePath: TraderJoesJessJourneyMap}}/>;

    const opportunity1 = <TextContainer title={'HOW CAN TRADER JOE\'S CONTINUE TO GENERATE EXCITEMENT AROUND SNACKS AND SEASONAL ITEMS FOR CUSTOMERS?'}/>;
    const opportunity2 = <TextContainer title={'HOW CAN TRADER JOE\'S ENCOURAGE CUSTOMERS TO SHOP PRIMARILY AT THEIR STORE RATHER THAN HAVING IT AS A SECONDARY STORE WHICH NEEDS A SUPPLEMENT?'}/>;
    const opportunity3 = <TextContainer title={'HOW CAN TRADER JOE\'S MAKE THE PARKING SITUATION LESS STRESSFUL AND MORE ACCESSIBLE?'}/>;
    const opportunity4 = <TextContainer title={'HOW CAN TRADER JOE\'S CATER TO CUSTOMERS WHO MAY NOT BE ABLE TO OR WOULD RATHER NOT SHOP IN STORE?'}/>;
    const opportunity5 = <TextContainer title={'HOW CAN TRADER JOE\'S CREATE A MORE INTUITIVE INGREDIENT LIST FOR CUSTOMERS WHO ARE INTERESTED IN MAKING THEIR RECIPES?'}/>;

    const researchPlan =
        <div className='sectionContainer'>
            {researchPlan1}
            {researchPlan2}
            {researchPlan3}
            {researchPlan4}
            {researchPlan5}
        </div>;

    const affinityDiagram = 
        <div className='sectionContainer'>
            {affinityDiagram1}
            {affinityDiagram2}
        </div>;

    const personaMaya = 
        <div className='sectionContainer'>
            {persona1}
            {persona2}
            {persona3}
            {persona4}
        </div>;

    const personaJess = 
        <div className='sectionContainer'>
            {persona5}
            {persona6}
            {persona7}
            {persona8}
        </div>;

    const opportunities = 
        <div className='sectionContainer'>
            {opportunity1}
            {opportunity2}
            {opportunity3}
            {opportunity4}
            {opportunity5}
        </div>;

    return (
        <div className="sectionContainer">
            {titleContent}
            <hr className='divider'/>
            {isLarge ? <LargeContent title={'RESEARCH PLAN'} content={researchPlan}/> : <SmallContent title={'RESEARCH PLAN'} content={researchPlan}/>}
            <hr className='divider'/>
            {isLarge ? <LargeContent title={'DATA & KEY FINDINGS'} content={affinityDiagram}/> : <SmallContent title={'DATA & KEY FINDINGS'} content={affinityDiagram}/>}
            <hr className='divider'/>
            {isLarge ? <LargeContent title={'PERSONA #1: MAYA'} content={personaMaya}/> : <SmallContent title={'PERSONA #1: MAYA'} content={personaMaya}/>}
            <hr className='divider'/>
            {isLarge ? <LargeContent title={'PERSONA #2: JESS'} content={personaJess}/> : <SmallContent title={'PERSONA #2: JESS'} content={personaJess}/>}
            <hr className='divider'/>
            {isLarge ? <LargeContent title={'KEY OPPORTUNITIES'} content={opportunities}/> : <SmallContent title={'KEY OPPORTUNITIES'} content={opportunities}/>}
        </div>
    );
}

export default TraderJoesResearch;
