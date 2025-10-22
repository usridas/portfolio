import ColorBoxSection from '../components/ProjectDetails/ColorBoxSection';
import FontBoxSection from '../components/ProjectDetails/FontBoxSection';
import ImageBoxSection from '../components/ProjectDetails/ImageBoxSection';
import LargeContent from '../components/Content/LargeContent.js';
import { useScreenResolution } from '../utils/ScreenSize.tsx';
import './Pages.css';
import SmallContent from '../components/Content/SmallContent.js';
import ImageSlide from '../components/ImageSlide/ImageSlide.js';
import logo1 from './images/Kavi/logo1.png';
import logo2 from './images/Kavi/logo2.png';
import logo3 from './images/Kavi/logo3.png';
import brandAsset1 from './images/Kavi/brandAsset1.png';
import brandAsset2 from './images/Kavi/brandAsset2.png';
import mockup1 from './images/Kavi/mockup1.png';
import mockup2 from './images/Kavi/mockup2.png';
import mockup3 from './images/Kavi/mockup3.png';
import mockup4 from './images/Kavi/mockup4.png';
import mockup5 from './images/Kavi/mockup5.png';

export const Kavi = ({}) => {

  const { isLarge } = useScreenResolution();
  const content = 'KAVI is a South Asian women owned luxury beauty and self care brand. Rooted in South Asian culture and ayurvedic practices, KAVI strives to make the beauty and self care routine enjoyable and relaxing through all-natural ingredients.';
  const titleContent = isLarge ? <LargeContent title={'KAVI'} content={<p>{content}</p>}/> : <SmallContent title={'KAVI'} content={<p>{content}</p>}/>;

  const colors = [
    {colorName: 'RANI PINK', color: '#E42776', text: 'Hex Code: #E42776\nRGB: 228 39 118\nCMYK: 4% 96% 25% 0%'},
    {colorName: 'FALOODA', color: '#FFC7EA', text: 'Hex Code: #FFC7EA\nRGB: 255 199 234\nCMYK: 1% 26% 8.67% 0%'},
    {colorName: 'LOTUS LEAF', color: '#517025', text: 'Hex Code: #517025\nRGB: 81 112 37\nCMYK: 69% 36% 100% 23%'},
    {colorName: 'PISTA KULFI', color: '#DCE070', text: 'Hex Code: #DCE070\nRGB: 220 224 112\nCMYK: 16% 2% 70% 0%'},
    {colorName: 'PEACOCK', color: '#00A99D', text: 'Hex Code: #00A99D\nRGB: 0 169 157\nCMYK: 78% 9% 46% 0%'}
  ];

  const fonts = [
    {fontName: 'CORMORANT GARAMOND MEDIUM', fontSubtitle: 'For primary text', fontFamily: `"cormorant-garamond", serif`, fontWeight: '500', fontStyle: 'normal', fontSize: '32'},
    {fontName: 'DM SANS REGULAR', fontSubtitle: 'For secondary text', fontFamily: `"dm-sans", sans-serif`, fontWeight: '400', fontStyle: 'normal', fontSize: '16'},
    {fontName: 'CORMORANT GARAMOND SEMIBOLD ITALIC', fontSubtitle: 'For quotes and extra information', fontFamily: `"cormorant-garamond", serif`, fontWeight: '600', fontStyle: 'italic'},
  ];

  const imagePaths = [
    logo1,
    logo2,
    logo3,
    brandAsset1,
    brandAsset2,
    mockup1,
    mockup2,
    mockup3,
    mockup4,
    mockup5
  ];

  const titles = [
    "PRIMARY LOGO",
    "SECONDARY LOGO",
    "TERTIARY LOGO",
    "BRAND ASSET 1",
    "BRAND ASSET 2",
    "MOCKUP",
    "MOCKUP",
    "MOCKUP",
    "MOCKUP",
    "MOCKUP"
  ]

  const imageSlide = <ImageSlide imagePaths={imagePaths} titles={titles}/>;

  return (
        <div className="sectionContainer">
            {titleContent}
            <hr className='divider'/>
            <ColorBoxSection title={'COLORS'} text={'This brand should use bold, tropical colors to imitate bright saree/textile colors. I also took inspiration from colors applied in Pichwai or Mughal art with lotuses and peacocks.'} isLarge={isLarge} colors={colors}/>
            <FontBoxSection title={'TYPEFACES'} text={'These typefaces are mature and elegant. The Cormorant Garamond Medium is the primary typeface while the DM Sans Regular is the secondary typeface. For quotes and extra information, use the Cormorant Garamond Semibold Italic.'} isLarge={isLarge} fonts={fonts}/>
            <ImageBoxSection title={'IMAGES'} text={'These are some images of logos, brand assets, and mockups to show how this branding can be utilized.'} content={imageSlide} isLarge={isLarge}/>
        </div>
    );
}

export default Kavi;
