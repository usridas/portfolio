import './Pages.css';
import TextContainer from '../components/Text/TextContainer.js';
import {
    AlaskaAirlinesBanner,
    AlaskaAirlinesCompetitiveFeatureMatrix,
    AlaskaAirlinesSWOTAnalysis,
    AlaskaAirlinesCTA,
    AlaskaAirlinesOriginal2,
    AlaskaAirlinesSolution2,
    AlaskaAirlinesOriginal3,
    AlaskaAirlinesSolution3,
} from '../assets/images/index.js';
import AlaskaAirlinesSlideDeck from '../assets/documents/AlaskaAirlinesSlideDeck.pdf'
import Button from '../components/Button/Button.js';
import Grid from '../components/Grid/Grid.js';
import ImageSlide from '../components/Images/ImageSlide.js';
import { useScreenResolution } from '../utils/ScreenSize.tsx';
import { useState } from 'react';
import FlippingImageSlide from '../components/Images/FlippingImageSlide.js';

export const AlaskaAirlinesResearch = () => {
    const { isSmall, isXSmall } = useScreenResolution();
    const [isFlipped1, setIsFlipped1] = useState(false);
    const [isFlipped2, setIsFlipped2] = useState(false);
    const [isFlipped3, setIsFlipped3] = useState(false);
    const isMobile = isSmall || isXSmall;

    const insightRecommendationArray = [
        {
            insightTitle: '4 minutes 36 seconds to make a decision on flights',
            insightCaption: 'During flight selection, participants used back and forth navigation and trial and error to view and understand all their flight options. The average time was 4 minutes 36 seconds, by far the longest of all tasks within the usability test.',
            recommendationTitle: 'How might we enable users to view and compare flight information without unnecessary steps or navigation?',
            recommendationCaption: 'I recommend providing a clear navigation component in order to address repeated navigation issues during the flight choice step. This will help us reduce frustration and flight choice step duration so we can increase completed bookings.'
        },
        {
            insightTitle: '2/6 participants failed to choose refundable flights',
            insightCaption: 'During flight selection, participants were not confident in their decision and expressed confusion and 2/6 participants failed the task by choosing non-refundable flights, making this the task with the lowest success rate. Furthermore, none of the participants clicked on the "Compare fare" button, which would describe the differences in flight tiers.',
            recommendationTitle: 'How might we create clarity during the flight choice step in order to boost confidence in decisions?',
            recommendationCaption: 'I recommend highlighting the "Compare fare" button and also editing the content of the modal to provide details of their chosen flights, because participants had difficulty finding flight tier information. This will help increase customer confidence and lower booking abandonment so we can increase completed bookings and trust among our customer base.'
        },
        {
            insightTitle: '2/6 participants missed seat selection for one leg of their flight',
            insightCaption: 'For seat selection and add-ons, participants were confident and quick in decision making, even if they missed or overlooked details. 2/6 participants were confident in their seats but missed seat selection for one leg of their flight and 4/6 participants overlooked the Atmos Rewards card.',
            recommendationTitle: 'How might we reduce cognitive load and increase visibility of attachments so they are not overlooked?',
            recommendationCaption: 'I recommend emphasizing the leg of the flight a user is choosing seats for and adding a seat confirmation component in order to improve visibility and address accidentally missed seat selection. This will help us see an increased rate of completed seat selection so we can increase attachment rate.'
        },
        {
            insightTitle: 'All participants opted "NO" for travel insurance',
            insightCaption: 'All participants stated price as a deciding factor for their decisions, looking for the “best deal”, “cheapest”, or “cost effective” options. The average time for choosing add-ons was 1 minute 9 seconds, the shortest of all tasks and all 6 participants opted “NO” for travel insurance. Without clear benefits of purchasing add-ons, users are less confident and therefore not incentivized to increase attach rate.',
            recommendationTitle: 'How might we highlight add-ons and show their value clearly so that users are willing to explore options outside of their habitual choices?',
            recommendationCaption: 'I recommend moving add-ons like travel insurance (with clear, contextual information such as weather and international travel indicators) and the Atmos Rewards card to a dedicated pre-checkout step, because users overlooked add-ons when it was interspersed with payment details. This will improve add-on visibility and consideration so we can increase attachment rate and Atmos Rewards plan enrollment.'
        },
    ]

    const summaryContent = <div className='summaryContent'>
        <p>This research was conducted to develop an understanding of the experience of an Alaska Airlines customer and identify pain points of the Alaska Airlines website booking flow. Using this information, we can seek out ways to increase completed bookings, improve attach rate, and reduce confusion when comparing fares and add-ons.</p>
        <div style={{marginBottom: '24px'}}><Button type='Primary' text='View full slide deck' link={AlaskaAirlinesSlideDeck}/></div>
        <div className='steps'>
            <div className='step'>
                {!isMobile && <div className='stepNumber'><h1>1</h1></div>}
                <div className='journeyCard'>
                    <h2 style={{textAlign: 'left'}}><span style={{display: isMobile ? 'unset' : 'none'}}>1. </span>Identifying The Problem</h2>
                    <p>I conducted a <span style={{fontWeight: 'bold', color: '#2519D2'}}>competitive analysis against 3 airlines:</span><br/>• Delta Airlines<br/>• American Airlines<br/>• Qatar Airways<br/><br/>I also used a <span style={{fontWeight: 'bold', color: '#2519D2'}}>SWOT analysis and cognitive task analysis</span> to understand pain points of Alaska Airlines as a company and which tasks within the booking flow may have the heaviest cognitive load.</p>
                </div>
            </div>
            <div className='step'>
                {!isMobile && <div className='stepNumber'><h1>2</h1></div>}
                <div className='journeyCard'>
                    <h2 style={{textAlign: 'left'}}><span style={{display: isMobile ? 'unset' : 'none'}}>2. </span>Insights & Recommendations</h2>
                    <p>Users face friction throughout the booking flow due to <span style={{fontWeight: 'bold', color: '#2519D2'}}>poor navigation and unclear flight information</span>, often causing them to miss or overlook important details. Users are also <span style={{fontWeight: 'bold', color: '#2519D2'}}>reluctant to purchase add-ons</span> unless they feel confident they're getting a good deal.</p>
                </div>
            </div>
            <div className='step'>
                {!isMobile && <div className='stepNumber'><h1>3</h1></div>}
                <div className='journeyCard'>
                    <h2 style={{textAlign: 'left'}}><span style={{display: isMobile ? 'unset' : 'none'}}>3. </span>Next Steps</h2>
                    <p>I would prioritize <span style={{fontWeight: 'bold', color: '#2519D2'}}>providing a clear navigation component</span> and <span style={{fontWeight: 'bold', color: '#2519D2'}}>clarifying flight tier options</span> in order to increase customer confidence. This will lead to an upturn of completed bookings and boosted trust among the customer base.</p>
                </div>
            </div>
        </div>
    </div>

    const problemSlideProps = [
        {title: 'Competitive feature matrix', imagePath: AlaskaAirlinesCompetitiveFeatureMatrix, caption: 'One glaring issue with Alaska\'s booking flow was its flight choice step: tier comparison was barely visible and navigation was subpar. Qatar on the other hand, had a clean, spacious layout which was easy to sift through.'},
        {title: 'SWOT analysis', imagePath: AlaskaAirlinesSWOTAnalysis, caption: 'Some big opportunities for Alaska included clearer flight options, clearer error messaging, more language capabilities, highlighting add-ons, and leveraging their acquirement of Hawaiian Airlines.'},
        {title: 'Cognitive task analysis', imagePath: AlaskaAirlinesCTA, caption: 'Tasks within the booking flow with the highest cognitive load included choosing flights, choosing seats, and reviewing payment, which included add-on options.'},
    ];

    const problem1 = <TextContainer title={'What did my competitive analysis and task analysis tell me?'} insert={<p>• <span style={{fontWeight: 'bold', color: '#2519D2'}}>Intuitive flight tier options</span> was a big pain point among direct competitors. Creating a clearer comparison of flight tier options through coherent messaging, spacious design, and intuitive navigation will reduce confusion and increase confidence when choosing flights.<br/>• <span style={{fontWeight: 'bold', color: '#2519D2'}}>Higlighting add-ons and upgrades</span> through its own page will allow users to focus on all add-ons at once without distractions and will remove clutter from other pages. This will also allow a clear comparison of all add-on options.<br/>• <span style={{fontWeight: 'bold', color: '#2519D2'}}>Choosing flights, seats, and add-ons</span> are the tasks with the heaviest cognitive load within the booking flow.</p>} />;
    const problem2 = <ImageSlide imageSlideProps={problemSlideProps}/>;

    const insightOverview = <TextContainer insert={<p>After understanding my competitors, I created a usability test consisting of three task scenarios: choosing flights, choosing seats, and choosing add-ons. I ended up conducting <span style={{fontWeight: 'bold', color: '#2519D2'}}>6 usability tests, 2 moderated and 4 unmoderated tests via Userbrain.</span></p>} />;

    const flippingSlideProps = [
        {title1: 'Redesigned Saver modal', imagePath1: AlaskaAirlinesSolution2, title2: 'Original Saver modal', imagePath2: AlaskaAirlinesOriginal2, flipButtonFunction: setIsFlipped2, flipButtonState: isFlipped2, caption1: 'While the original modal gave no details about your chosen flight tier, my redesign reiterates what a customer selected while also offering an upgrade if available.', caption2: 'While the original modal gave no details about your chosen flight tier, my redesign reiterates what a customer selected while also offering an upgrade if available.'},
        {title1: 'Redesigned Main modal', imagePath1: AlaskaAirlinesSolution3, title2: 'Original Main modal', imagePath2: AlaskaAirlinesOriginal3, flipButtonFunction: setIsFlipped3, flipButtonState: isFlipped3, caption1: 'While the original modal gave no details about your chosen flight tier, my redesign reiterates what a customer selected while also offering an upgrade if available.', caption2: 'While the original modal gave no details about your chosen flight tier, my redesign reiterates what a customer selected while also offering an upgrade if available.'},
    ];
    const nextStepsOverview = <TextContainer title={'What should we prioritize?'} insert={<p>Out of the three tasks provided in the usability test, choosing flights seemed to stand out as a particularly difficult task; participants had low confidence, taking a long time to review options and constantly expressing confusion or frustration. With this in mind, I would prioritize providing a clear navigation component and editing the content of the modal to provide details of their chosen flights. This will lead to an upturn of completed bookings and boosted trust among the customer base.</p>}/>;

    const researchPlan =
        <div className='sectionContainer'>
            {problem1}
            {problem2}
        </div>;

    const insight1Container =
    <div className='insightRecommendation2'>
        <p>{insightRecommendationArray[0].insightCaption}</p>
        <p style={{width: 'stretch', textAlign: 'left', fontWeight: 'bold', color: '#2519D2'}}>{insightRecommendationArray[0].recommendationTitle}</p>
        <p>{insightRecommendationArray[0].recommendationCaption}</p>
    </div>;

    const insight2Container =
    <div className='insightRecommendation2'>
        <p>{insightRecommendationArray[1].insightCaption}</p>
        <p style={{width: 'stretch', textAlign: 'left', fontWeight: 'bold', color: '#2519D2'}}>{insightRecommendationArray[1].recommendationTitle}</p>
        <p>{insightRecommendationArray[1].recommendationCaption}</p>
        <FlippingImageSlide imageSlideProps={flippingSlideProps}/>
    </div>;
    
    const insight3Container =
    <div className='insightRecommendation2'>
        <p>{insightRecommendationArray[2].insightCaption}</p>
        <p style={{width: 'stretch', textAlign: 'left', fontWeight: 'bold', color: '#2519D2'}}>{insightRecommendationArray[2].recommendationTitle}</p>
        <p>{insightRecommendationArray[2].recommendationCaption}</p>
    </div>;

    const insight4Container =
    <div className='insightRecommendation2'>
        <p>{insightRecommendationArray[3].insightCaption}</p>
        <p style={{width: 'stretch', textAlign: 'left', fontWeight: 'bold', color: '#2519D2'}}>{insightRecommendationArray[3].recommendationTitle}</p>
        <p>{insightRecommendationArray[3].recommendationCaption}</p>
    </div>;         

    const nextSteps = 
        <div className='sectionContainer'>
            {nextStepsOverview}
        </div>;

    const gridArray = [
        {title: 'Overview', content: summaryContent, rowType: 'Column'},
        {title: 'Identifying The Problem', content: researchPlan, rowType: 'Column'},
        {title: 'Insights & Recommendations', content: insightOverview, rowType: 'Column', divider: 'none'},
        {title: insightRecommendationArray[0].insightTitle, titleType: 'small', content: insight1Container,  rowType: 'Row', divider: 'gray'},
        {title: insightRecommendationArray[1].insightTitle, titleType: 'small', content: insight2Container,  rowType: 'Row', divider: 'gray'},
        {title: insightRecommendationArray[2].insightTitle, titleType: 'small', content: insight3Container,  rowType: 'Row', divider: 'gray'},
        {title: insightRecommendationArray[3].insightTitle, titleType: 'small', content: insight4Container,  rowType: 'Row'},
        {title: 'Next Steps', content: nextSteps, rowType: 'Column'},
    ]

    return (
        <div>
            <div className='bannerWrapper'>
                <img src={AlaskaAirlinesBanner} alt='Alaska Airlines aircraft'/>
            </div>
            <h1 className='title'>Alaska Airlines Case Study</h1>
            <Grid gridProps={gridArray}/>
        </div>
    );
}

export default AlaskaAirlinesResearch;
