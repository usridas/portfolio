import './Pages.scss';
import TextContainer from '../components/Text/TextContainer.js';
import {
    TraderJoesBanner2,
    TraderJoesBanner3,
} from '../assets/images';
import TraderJoesSlideDeck from '../assets/documents/TraderJoesSlideDeck.pdf'
import Button from '../components/Button/Button.js';
import { useScreenResolution } from '../utils/ScreenSize.tsx';
import Grid from '../components/Grid/Grid.js';

export const TraderJoesResearch = () => {

    const { isSmall, isXSmall } = useScreenResolution();
    const isMobile = isSmall || isXSmall;

    const summaryContent = <div className='columnWith24Gap'>
        <p>Although grocery shopping is a seemingly simple and regular task, there are ways the in-store and online shopping experience can be improved and optimized for the customer. In this research, we will focus on the experience of Trader Joe's shoppers and develop an understanding of customer needs and pain points during the grocery shopping process in order to define some opportunity spaces.</p>
        <Button type='Primary' text='View full slide deck' link={TraderJoesSlideDeck}/>
        <div className='steps'>
            <div className='step'>
                {!isMobile && <div className='stepNumber'><h1>1</h1></div>}
                <div className='journeyCard'>
                    <h2 style={{textAlign: 'left'}}><span style={{display: isMobile ? 'unset' : 'none'}}>1. </span>Discovery</h2>
                    <p>I held <span style={{fontWeight: 'bold', color: '#2519D2'}}>5 user interviews followed by online and in-person shadowing sessions.</span> During online shadowing sessions, I had each user complete a few tasks on Trader Joe's website and during in-person shadowing sessions, I followed each user during a normal Trader Joe's trip.</p>
                </div>
            </div>
            <div className='step'>
                {!isMobile && <div className='stepNumber'><h1>2</h1></div>}
                <div className='journeyCard'>
                    <h2 style={{textAlign: 'left'}}><span style={{display: isMobile ? 'unset' : 'none'}}>2. </span>Personas & Insights</h2>
                    <p>Customers appreciate Trader Joe's for their unique snacks, frozen food, and seasonal items, but <span style={{fontWeight: 'bold', color: '#2519D2'}}>don't use Trader Joe's as their primary grocery store.</span> Customers also <span style={{fontWeight: 'bold', color: '#2519D2'}}>lament the parking situation</span> at Trader Joe's.</p>
                </div>
            </div>
            <div className='step'>
                {!isMobile && <div className='stepNumber'><h1>3</h1></div>}
                <div className='journeyCard'>
                    <h2 style={{textAlign: 'left'}}><span style={{display: isMobile ? 'unset' : 'none'}}>3. </span>Next Steps</h2>
                    <p>I would prioritize finding a way to <span style={{fontWeight: 'bold', color: '#2519D2'}}>make Trader Joe's people's grocery store, rather than a supplement.</span> By focusing efforts on becoming a primary grocery store, Trader Joe's can increase revenue through more regularly purchased items, like fresh produce. I would also recommend <span style={{fontWeight: 'bold', color: '#2519D2'}}>addressing the insufficient parking.</span>  This would remove an obstacle for potential customers, hopefully increasing the customer base.</p>
                </div>
            </div>
        </div>
    </div>

    const researchPlan1 = <TextContainer text={'First, I conducted some secondary research to understand what made Trader Joe\'s so special. Trader Joe\'s was made for college students who were well educated but did not have a high income. Trader Joe\'s wanted a fair priced option for this demographic and created this space by eliminating a middleman. Trader Joe\'s mostly sells products of its own brand. They do not have an app, nor can you order online, nor can you order through Uber Eats or DoorDash. There is no membership card for Trader Joe\'s.'} />;
    const researchPlan2 = <TextContainer title={'What do I want to learn here?'} text={'• What does Trader Joe\'s offer in terms of products and services?\n• What are some strengths of Trader Joe\'s and what attracts customers?\n• What are some pain points within the shopping experience?\n• Can a digital avenue help increase interest in Trader Joe\'s (such as an app or online ordering)?\n• Can a membership increase interest in Trader Joe\'s?'} />;

    const insightArray = [
        {
            insightTitle: 'Trader Joe\'s doesn\'t have everything',
            insightCaption: 'All 5 participants stated having to supplement it with another grocery store to get all the items they need. Customers go to Trader Joe\'s for novelty items, but how can regular grocery shopping, for every day items, be encouraged as well?',
            recommendationTitle: 'How can Trader Joe\'s encourage customers to shop primarily at their store rather than having it as a secondary store which needs a supplement?',
        },
        {
            insightTitle: 'Lamenting the chaotic parking situation',
            insightCaption: '4/5 participants said parking is not good at most Trader Joe\'s, due to lack of space and/or the huge crowds. This discourages customers from going to Trader Joe\'s or forces them to park far away and walk to the store.',
            recommendationTitle: 'How can Trader Joe\'s make the parking situation less stressful and more accessible?',
        },
        {
            insightTitle: 'Trader Joe\'s recipes: annoying or interesting?',
            insightCaption: 'On the website, 3/5 participants said the recipes are unique and they would take time to explore this, but all participants mentioned that they would like to add ingredients directly from the recipe, rather than re-navigating repeatedly for each ingredient.',
            recommendationTitle: 'How can Trader Joe\'s create a more intuitive ingredient list on their website for customers who are interested in making their recipes?',
        },
        {
            insightTitle: 'People both abroad and at home want the iconic Trader Joe\'s snacks',
            insightCaption: 'Although only 1 participant mentioned interest in an online ordering option, and Trader Joe\'s seems to cater to the in-store experience, this might be an area worth considering. Some populations that may be excluded by the lack of delivery options includes people with disabilities, 8 of the U.S. states, and people outside of the U.S. (1 participant noted that on an international trip, some coworkers asked for Trader Joe\'s snacks, as it was not available to them).',
            recommendationTitle: 'How can Trader Joe\'s cater to customers who may not be able to or would rather not shop in store?',
        },
        {
            insightTitle: 'Raving about snacks, seasonal items, and frozen items',
            insightCaption: 'All 5 participants mentioned the unique frozen food, snacks, and seasonal items that Trader Joe\'s carries, which you can\'t get anywhere else. This is something that makes Trader Joe\'s stand out from other grocery stores and is something they should continue to innovate on.',
            recommendationTitle: 'How can Trader Joe\'s continue to generate excitement around snacks and seasonal items for customers?',
        },
    ];

    const insight1Container =
    <div className='insightRecommendation'>
        <p>{insightArray[0].insightCaption}</p>
        <p style={{width: 'stretch', textAlign: 'left', fontWeight: 'bold', color: '#2519D2'}}>{insightArray[0].recommendationTitle}</p>
        <p>{insightArray[0].recommendationCaption}</p>
    </div>;

    const insight2Container =
    <div className='insightRecommendation'>
        <p>{insightArray[1].insightCaption}</p>
        <p style={{width: 'stretch', textAlign: 'left', fontWeight: 'bold', color: '#2519D2'}}>{insightArray[1].recommendationTitle}</p>
        <p>{insightArray[1].recommendationCaption}</p>
    </div>;
    
    const insight3Container =
    <div className='insightRecommendation'>
        <p>{insightArray[2].insightCaption}</p>
        <p style={{width: 'stretch', textAlign: 'left', fontWeight: 'bold', color: '#2519D2'}}>{insightArray[2].recommendationTitle}</p>
        <p>{insightArray[2].recommendationCaption}</p>
    </div>;

    const insight4Container =
    <div className='insightRecommendation'>
        <p>{insightArray[3].insightCaption}</p>
        <p style={{width: 'stretch', textAlign: 'left', fontWeight: 'bold', color: '#2519D2'}}>{insightArray[3].recommendationTitle}</p>
        <p>{insightArray[3].recommendationCaption}</p>
    </div>;

    const insight5Container =
    <div className='insightRecommendation'>
        <p>{insightArray[4].insightCaption}</p>
        <p style={{width: 'stretch', textAlign: 'left', fontWeight: 'bold', color: '#2519D2'}}>{insightArray[4].recommendationTitle}</p>
        <p>{insightArray[4].recommendationCaption}</p>
    </div>;

    const insightGridArray = [
        {title: 'Insights', content: <p>Using the quotes and notes taken from interviews and shadowing sessions, I created an affinity diagram which lead me a few main insights of what Trader Joe's excels and should continue and where they could improve.<br/><br/>One surprising thing I noted was that there was <span style={{fontWeight: 'bold', color: '#2519D2'}}>not a large appeal for an app or membership program,</span> even if the participants did mention having memberships for other grocery stores.</p>, rowType: 'Column', divider: 'none'},
        {title: insightArray[0].insightTitle, titleType: 'small', content: insight1Container,  rowType: 'Row'},
        {title: insightArray[1].insightTitle, titleType: 'small', content: insight2Container,  rowType: 'Row'},
        {title: insightArray[2].insightTitle, titleType: 'small', content: insight3Container,  rowType: 'Row'},
        {title: insightArray[3].insightTitle, titleType: 'small', content: insight4Container,  rowType: 'Row'},
        {title: insightArray[4].insightTitle, titleType: 'small', content: insight5Container,  rowType: 'Row'}
    ]

    const personaGridArray = [
        {title: 'Personas', content: <p>After interviewing, I created a journey map for each participant. From my 5 journey maps, I was able to extract two distinct personalities: <span style={{fontWeight: 'bold', color: '#2519D2'}}>the Snack Seeker and the Convenience Consumer.</span></p>, rowType: 'Column', divider: 'none'},
        {title: 'Maya AKA The Snack Seeker', titleType: 'small', content: <p>Maya is a pretty planned person.  She is quite busy, but will find time to do her groceries every week on the weekend with the list she has accrued over the week. <span style={{fontWeight: 'bold', color: '#2519D2'}}>She does her main shopping at an alternative store,</span> because it will have all the essentials at a lower price, and then <span style={{fontWeight: 'bold', color: '#2519D2'}}>follows up with a trip to Trader Joe's for snacks, seasonal items, and party gifts. The location and parking of Trader Joe's is Maya's worst complaint.</span></p>,  rowType: 'Row'},
        {title: 'Jess AKA The Convenience Consumer', titleType: 'small', content: <p>Jess is an introvert. She has to interact with people a lot at work and values alone time to do her hobbies. She does a majority of her shopping online, but is <span style={{fontWeight: 'bold', color: '#2519D2'}}>interested in certain Trader Joe's snacks and seasonal items that she sees on social media</span>, so she will go on a day that might be less busy and crowded. Ideally, Jess would stay at home and browse the grocery store website to get her groceries and snacks delivered to her. <span style={{fontWeight: 'bold', color: '#2519D2'}}>She really wishes Trader Joe's had a delivery or online shopping option,</span> because she does love the snacks and seasonal items, but she doesn't like being around people in the store. Sometimes chatting with store employees can be a little tiring.</p>,  rowType: 'Row'},
    ]

    const researchPlan =
        <div className='columnWith24Gap'>
            {researchPlan1}
            {researchPlan2}
        </div>;

    return (
        <div>
            <div className='bannerTraderJoes'>
                <div className='bannerTitle'>
                    <h1 className='title'>Trader Joe's Case Study</h1>
                    <div className='bannerDataContainer'>
                        <div className='bannerData'>
                            <p style={{color: '#6D6C65'}}>Timeline</p>
                            <p style={{fontWeight: '700'}}>August - December 2025</p>
                        </div>
                        <div className='bannerData'>
                            <p style={{color: '#6D6C65'}}>Industry</p>
                            <p style={{fontWeight: '700'}}>Food/Service</p>
                        </div>
                        <div className='bannerData'>
                            <p style={{color: '#6D6C65'}}>Role</p>
                            <p style={{fontWeight: '700'}}>UX Researcher</p>
                        </div>
                    </div>
                </div>
            </div>
            <Grid gridProps={[{title: 'Overview', content: summaryContent, rowType: 'Column'}]} gridMargin='40px 24px'/>
            <div className='bannerWrapper'>
                <img src={TraderJoesBanner2} alt='Notes from interviews'/>
            </div>
            <Grid gridProps={[{title: 'Discovery', content: researchPlan, rowType: 'Column'}]} gridMargin='40px 24px'/>
            <div className='bannerWrapper'>
                <img src={TraderJoesBanner3} alt='Notes from interviews'/>
            </div>
            <Grid gridProps={personaGridArray} gridMargin='40px 24px 0 24px'/>
            <Grid gridProps={insightGridArray} gridMargin='0 24px 40px 24px'/>
            <div className='bannerTraderJoesQuote'>
                <div className='bannerTitle'>
                    <h1 style={{color: '#F8F8F2', fontSize: isMobile ? '24px' : ''}}>"...when I went to the embassy in Bogota [I asked] <span style={{color: '#E3D04F'}}>what is an American food that you want me to bring</span>...? And [they said] we can get kind of everything, but <span style={{color: '#E3D04F'}}>we want Trader Joe's snacks.</span>"</h1>
                </div>
            </div>
            <Grid gridProps={[{title: 'Next Steps', content: <h2 style={{marginBottom: '160px'}}>I would recommend focusing on the two high impact opportunities: <span style={{color: '#2519D2'}}>creating a strong catalog of regularly purchased items, like fresh produce, in order to encourage primary shopping at Trader Joe's</span> and <span style={{color: '#2519D2'}}>improving the parking lot system to decrease stress before entering the store.</span> Addressing these issues should ultimately <span style={{color: '#2519D2'}}>increase current customers' satisfaction and increase revenue,</span> as customers will have a one-stop shop, stress-free grocery trip.<br/><br/>As a secondary priority to <span style={{color: '#2519D2'}}>broaden the customer base, I would recommend an online shopping option</span> for customers who cannot access a Trader Joe's in-person. This will take higher effort, but considering the existing interest in Trader Joe's goods from around the world, this would be an interesting opportunity to <span style={{color: '#2519D2'}}>increase revenue.</span></h2>, rowType: 'Column'}]} gridMargin='40px 24px'/>
        </div>
    );
}

export default TraderJoesResearch;
