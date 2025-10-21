import ColorBoxSection from '../components/ProjectDetails/ColorBoxSection';
import FontBoxSection from '../components/ProjectDetails/FontBoxSection';
import ImageBoxSection from '../components/ProjectDetails/ImageBoxSection';
import LargeContent from '../components/Content/LargeContent.js';
import { useScreenResolution } from '../utils/ScreenSize.tsx';
import './Pages.css';
import SmallContent from '../components/Content/SmallContent.js';

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
    {fontName: 'CORMORANT GARAMOND MEDIUM', fontSubtitle: 'For primary text', fontFamily: 'Cormorant Garamond Medium', fontSize: '32'},
    {fontName: 'DM SANS REGULAR', fontSubtitle: 'For secondary text', fontFamily: 'dm-sans', fontSize: '16'},
    {fontName: 'CORMORANT GARAMOND SEMIBOLD ITALIC', fontSubtitle: 'For quotes and extra information', fontFamily: 'Cormorant Garamond', fontWeight: '600', fontStyle: 'italic'},
  ];

  return (
        <div className="sectionContainer">
            {titleContent}
            <hr className='divider'/>
            <ColorBoxSection title={'COLORS'} text={'This brand should use bold, tropical colors to imitate bright saree/textile colors. I also took inspiration from colors applied in Pichwai or Mughal art with lotuses and peacocks.'} isLarge={isLarge} colors={colors}/>
            <FontBoxSection title={'TYPEFACES'} text={'These typefaces are mature and elegant. The Cormorant Garamond Medium is the primary typeface while the DM Sans Regular is the secondary typeface. For quotes and extra information, use the Cormorant Garamond Semibold Italic.'} isLarge={isLarge} fonts={fonts}/>
            <ImageBoxSection title={'IMAGES'} text={'These typefaces are bubbly, yet easy to read, to welcome an audience of all ages. The typeface also pairs well with the cute cat logo.'} isLarge={isLarge}/>
        </div>
    );
}

export default Kavi;
