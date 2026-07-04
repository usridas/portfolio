import './Pages.scss';
import TextContainer from '../components/Text/TextContainer.js';
import {
    AlaskaAirlinesOriginal2,
    AlaskaAirlinesSolution2,
    AlaskaAirlinesOriginal3,
    AlaskaAirlinesSolution3,
    AlaskaAirlinesBanner2,
    AlaskaAirlinesBanner3,
    AlaskaAirlinesBanner4,
    AlaskaAirlinesSolution1,
    AlaskaAirlinesOriginal1,
} from '../assets/images/index.js';
import AlaskaAirlinesSlideDeck from '../assets/documents/AlaskaAirlinesSlideDeck.pdf'
import Button from '../components/Button/Button.js';
import Grid from '../components/Grid/Grid.js';
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
    ];
    const problemArray = [
        {
            title: 'Intuitive flight tier options',
            caption: 'Providing clear flight tier options was a big pain point among direct competitors. Creating a clearer comparison of options through coherent messaging, spacious design, and intuitive navigation will reduce confusion and increase confidence when choosing flights.',
        },
        {
            title: 'Highlighting add-ons and upgrades',
            caption: 'Giving add-ons and upgrades their own page will allow users to focus on all add-ons at once without distractions and will remove clutter from other pages. This will also allow a clear comparison of all add-on options.',
        },
        {
            title: 'Choosing flights, seats, and add-ons',
            caption: 'These are the tasks with the heaviest cognitive load within the booking flow. It will be beneficial to focus the usability tests around these three sections.',
        },
    ]

    const summaryContent = <div className='columnWith24Gap'>
        <h2>This research was conducted to develop an understanding of the experience of an Alaska Airlines customer and <span style={{color: '#2519D2'}}>identify pain points of the Alaska Airlines website booking flow.</span> Using this information, we can seek out ways to increase completed bookings, improve attach rate, and reduce confusion when comparing fares and add-ons.</h2>
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

    const insightOverview = <TextContainer insert={<p>After understanding my competitors, I created a usability test consisting of three task scenarios: choosing flights, choosing seats, and choosing add-ons. I ended up conducting <span style={{fontWeight: 'bold', color: '#2519D2'}}>6 usability tests, 2 moderated and 4 unmoderated tests via Userbrain.</span></p>} />;

    const insight1Container =
    <div className='insightRecommendation'>
        <p>{insightRecommendationArray[0].insightCaption}</p>
        <p style={{width: 'stretch', textAlign: 'left', fontWeight: 'bold', color: '#2519D2'}}>{insightRecommendationArray[0].recommendationTitle}</p>
        <p>{insightRecommendationArray[0].recommendationCaption}</p>
    </div>;

    const insight2Container =
    <div className='insightRecommendation'>
        <p>{insightRecommendationArray[1].insightCaption}</p>
        <p style={{width: 'stretch', textAlign: 'left', fontWeight: 'bold', color: '#2519D2'}}>{insightRecommendationArray[1].recommendationTitle}</p>
        <p>{insightRecommendationArray[1].recommendationCaption}</p>
    </div>;
    
    const insight3Container =
    <div className='insightRecommendation'>
        <p>{insightRecommendationArray[2].insightCaption}</p>
        <p style={{width: 'stretch', textAlign: 'left', fontWeight: 'bold', color: '#2519D2'}}>{insightRecommendationArray[2].recommendationTitle}</p>
        <p>{insightRecommendationArray[2].recommendationCaption}</p>
    </div>;

    const insight4Container =
    <div className='insightRecommendation'>
        <p>{insightRecommendationArray[3].insightCaption}</p>
        <p style={{width: 'stretch', textAlign: 'left', fontWeight: 'bold', color: '#2519D2'}}>{insightRecommendationArray[3].recommendationTitle}</p>
        <p>{insightRecommendationArray[3].recommendationCaption}</p>
    </div>;  
    
    const flippingSlideProps = [
        {title1: 'Redesigned Saver modal', imagePath1: AlaskaAirlinesSolution1, title2: 'Original Saver modal', imagePath2: AlaskaAirlinesOriginal1, flipButtonFunction: setIsFlipped1, flipButtonState: isFlipped1, caption1: 'While the original modal gave no details about your chosen flight tier, my redesign reiterates what a customer selected while also offering an upgrade if available.', caption2: 'While the original modal gave no details about your chosen flight tier, my redesign reiterates what a customer selected while also offering an upgrade if available.'},
        {title1: 'Redesigned Main modal', imagePath1: AlaskaAirlinesSolution2, title2: 'Original Main modal', imagePath2: AlaskaAirlinesOriginal2, flipButtonFunction: setIsFlipped2, flipButtonState: isFlipped2, caption1: 'While the original modal gave no details about your chosen flight tier, my redesign reiterates what a customer selected while also offering an upgrade if available.', caption2: 'While the original modal gave no details about your chosen flight tier, my redesign reiterates what a customer selected while also offering an upgrade if available.'},
        {title1: 'Redesigned flight comparison', imagePath1: AlaskaAirlinesSolution3, title2: 'Original flight comparison', imagePath2: AlaskaAirlinesOriginal3, flipButtonFunction: setIsFlipped3, flipButtonState: isFlipped3, caption1: 'All participants missed the \'Compare fares\' button, so I turned it into an outlined secondary button for more visual prominence. I also made each flight tier title a hyperlink so users could also click on the tier titles to understand what benefits they will be receiving.', caption2: 'All participants missed the \'Compare fares\' button, so I turned it into an outlined secondary button for more visual prominence. I also made each flight tier title a hyperlink so users could also click on the tier titles to understand what benefits they will be receiving.'},
    ];
    
    const nextStepsOverview = <TextContainer title={'What should we prioritize?'} insert={<p>Out of the three tasks provided in the usability test, <span style={{fontWeight: 'bold', color: '#2519D2'}}>choosing flights seemed to stand out as a particularly difficult task</span>; participants had low confidence, taking a long time to review options and constantly expressing confusion or frustration. With this in mind, <span style={{fontWeight: 'bold', color: '#2519D2'}}>I would prioritize providing a clear navigation component and editing the content of the modal to provide details of their chosen flights.</span></p>}/>;

    const nextSteps = 
        <div className='columnWith24Gap'>
            {nextStepsOverview}
            <FlippingImageSlide imageSlideProps={flippingSlideProps}/>
            <h2 style={{margin: '80px 0px 160px 0'}}>By providing clear flight details and smoothing out navigation, Alaska Airlines will reach their goal of <span style={{color: '#2519D2'}}>increased completed bookings</span>, while <span style={{color: '#2519D2'}}>boosting customer trust.</span></h2>
        </div>;

    const problemGridArray = [
        {title: 'Identifying the problem', content: <p>To start my research, I conducted a competitive analysis against <span style={{fontWeight: 'bold', color: '#2519D2'}}>Delta Air Lines, American Airlines, and Qatar Airways.</span> I chose Delta Air Lines and American Airlines to be two direct competitors to Alaska Airlines, as they all seem to serve similar populations and I chose Qatar Airways to be an aspirational competitor to Alaska Airlines, since Qatar is known for its luxury experience and technological excellence and innovation.<br/><br/>I also conducted a <span style={{fontWeight: 'bold', color: '#2519D2'}}>SWOT analysis and cognitive task analysis</span> in order to understand the pain points of Alaska Airlines and which tasks within the booking flow may have the heaviest cognitive load.</p>, rowType: 'Column', divider: 'none'},
        {title: problemArray[0].title, titleType: 'small', content: <p>{problemArray[0].caption}</p>,  rowType: 'Row', divider: 'gray'},
        {title: problemArray[1].title, titleType: 'small', content: <p>{problemArray[1].caption}</p>,  rowType: 'Row', divider: 'gray'},
        {title: problemArray[2].title, titleType: 'small', content: <p>{problemArray[2].caption}</p>,  rowType: 'Row', divider: 'none'},
    ]

    const insightGridArray = [
        {title: 'Insights & Recommendations', content: insightOverview, rowType: 'Column', divider: 'none'},
        {title: insightRecommendationArray[0].insightTitle, titleType: 'small', content: insight1Container,  rowType: 'Row', divider: 'gray'},
        {title: insightRecommendationArray[1].insightTitle, titleType: 'small', content: insight2Container,  rowType: 'Row', divider: 'gray'},
        {title: insightRecommendationArray[2].insightTitle, titleType: 'small', content: insight3Container,  rowType: 'Row', divider: 'gray'},
        {title: insightRecommendationArray[3].insightTitle, titleType: 'small', content: insight4Container,  rowType: 'Row'},
    ]

    return (
        <div>
            <div className='bannerAlaska'>
                <div className='bannerTitle'>
                    <h1 className='title'>Alaska Airlines<br/>Case Study</h1>
                </div>
            </div>
            <Grid gridProps={[{title: 'Overview', content: summaryContent, rowType: 'Column'}]} gridMargin='20px 0 40px 0'/>
            <div className='bannerWrapper'>
                <img src={AlaskaAirlinesBanner2} alt='SWOT analysis, competitive analysis, CTA, and red routes'/>
            </div>
            <Grid gridProps={problemGridArray} gridMargin='20px 0 40px 0'/>
            <div className='bannerWrapper'>
                <img src={AlaskaAirlinesBanner3} alt='Quotes from usability tests' />
            </div>
            <Grid gridProps={insightGridArray}/>
            <div className='bannerWrapper'>
                <img src={AlaskaAirlinesBanner4} alt='Redesign mockups'/>
            </div>
            <Grid gridProps={[{title: 'Next Steps', content: nextSteps, rowType: 'Column'}]}/>
        </div>
    );
}

export default AlaskaAirlinesResearch;
