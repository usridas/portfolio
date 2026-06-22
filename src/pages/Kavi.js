import './Pages.css';
import ImageSlide from '../components/Images/ImageSlide.js';
import Button from '../components/Button/Button.js';
import {
  KaviLogo1,
  KaviLogo2,
  KaviLogo3,
  KaviBrandAsset1,
  KaviBrandAsset2,
  KaviMockup1,
  KaviMockup2,
  KaviMockup3,
  KaviMockup4,
  KaviMockup5
} from '../assets/images'
import { ColorPalette } from '../components/ProjectDetails/ColorPalette.js';
import ProjectGrid from '../components/Grid/ProjectGrid.js';
import Fonts from '../components/ProjectDetails/Fonts.js';

export const Kavi = () => {

  const content = <div className='summaryContent'>
    <p style={{marginBottom: '24px'}}>{'KAVI is a South Asian women owned luxury beauty and self care brand. Rooted in South Asian culture and ayurvedic practices, KAVI strives to make the beauty and self care routine enjoyable and relaxing through all-natural ingredients.'}</p>
    <Button type='Primary' text='SEE FULL PROJECT ON BEHANCE' link={'https://www.behance.net/gallery/242576537/KAVI-Brand-Identity-and-Guidelines'}/>
  </div>

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

  const imageSlideProps = [
    {imagePath: KaviLogo1, title: "PRIMARY LOGO", caption: 'These are some images of logos, brand assets, and mockups to show how this branding can be utilized.'},
    {imagePath: KaviLogo2, title: "SECONDARY LOGO", caption: 'These are some images of logos, brand assets, and mockups to show how this branding can be utilized.'},
    {imagePath: KaviLogo3, title: "TERTIARY LOGO", caption: 'These are some images of logos, brand assets, and mockups to show how this branding can be utilized.'},
    {imagePath: KaviBrandAsset1, title: "BRAND ASSET 1", caption: 'These are some images of logos, brand assets, and mockups to show how this branding can be utilized.'},
    {imagePath: KaviBrandAsset2, title: "BRAND ASSET 2", caption: 'These are some images of logos, brand assets, and mockups to show how this branding can be utilized.'},
    {imagePath: KaviMockup1, title: "MOCKUP", caption: 'These are some images of logos, brand assets, and mockups to show how this branding can be utilized.'},
    {imagePath: KaviMockup2, title: "MOCKUP", caption: 'These are some images of logos, brand assets, and mockups to show how this branding can be utilized.'},
    {imagePath: KaviMockup3, title: "MOCKUP", caption: 'These are some images of logos, brand assets, and mockups to show how this branding can be utilized.'},
    {imagePath: KaviMockup4, title: "MOCKUP", caption: 'These are some images of logos, brand assets, and mockups to show how this branding can be utilized.'},
    {imagePath: KaviMockup5, title: "MOCKUP", caption: 'These are some images of logos, brand assets, and mockups to show how this branding can be utilized.'},
  ];

  const imageSlide = <div style={{display: 'flex', width: 'stretch', justifyContent: 'center'}}><ImageSlide imageSlideProps={imageSlideProps} imageMaxWidth={true}/></div>;

  const gridArray = [
        {title: 'KAVI', content: content},
        {title: 'COLORS', content: <ColorPalette colors={colors} text={'This brand should use bold, tropical colors to imitate bright saree/textile colors. I also took inspiration from colors applied in Pichwai or Mughal art with lotuses and peacocks.'}/>},
        {title: 'FONTS', content: <Fonts fonts={fonts} text={'These typefaces are mature and elegant. The Cormorant Garamond Medium is the primary typeface while the DM Sans Regular is the secondary typeface. For quotes and extra information, use the Cormorant Garamond Semibold Italic.'}/>},
        {title: 'IMAGES', content: imageSlide}
  ]

  return (
      <ProjectGrid gridProps={gridArray} removeBio={true}/>
  );
}

export default Kavi;
