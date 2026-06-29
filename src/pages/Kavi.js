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
import Fonts from '../components/ProjectDetails/Fonts.js';
import Grid from '../components/Grid/Grid.js';

export const Kavi = () => {

  const content = <div className='summaryContent'>
    <p style={{marginBottom: '24px'}}>{'KAVI is a South Asian women owned luxury beauty and self care brand. Rooted in South Asian culture and ayurvedic practices, KAVI strives to make the beauty and self care routine enjoyable and relaxing through all-natural ingredients.\n\n*This is a fictional business project made for design purposes.'}</p>
    <Button type='Primary' text='See full project on Behance' link={'https://www.behance.net/gallery/242576537/KAVI-Brand-Identity-and-Guidelines'}/>
  </div>

  const colors = [
    {colorName: 'Rani pink', color: '#E42776', text: 'Hex Code: #E42776\nRGB: 228 39 118\nCMYK: 4% 96% 25% 0%', textColor: 'light'},
    {colorName: 'Falooda', color: '#FFC7EA', text: 'Hex Code: #FFC7EA\nRGB: 255 199 234\nCMYK: 1% 26% 8.67% 0%'},
    {colorName: 'Lotus leaf', color: '#517025', text: 'Hex Code: #517025\nRGB: 81 112 37\nCMYK: 69% 36% 100% 23%', textColor: 'light'},
    {colorName: 'Pista kulfi', color: '#DCE070', text: 'Hex Code: #DCE070\nRGB: 220 224 112\nCMYK: 16% 2% 70% 0%'},
    {colorName: 'Peacock', color: '#00A99D', text: 'Hex Code: #00A99D\nRGB: 0 169 157\nCMYK: 78% 9% 46% 0%', textColor: 'light'}
  ];

  const fonts = [
    {fontName: 'Cormorant Garamond Medium', fontSubtitle: 'For primary text', fontFamily: `"cormorant-garamond", serif`, fontWeight: '500', fontStyle: 'normal', fontSize: '32'},
    {fontName: 'DM Sans Regular', fontSubtitle: 'For secondary text', fontFamily: `"dm-sans", sans-serif`, fontWeight: '400', fontStyle: 'normal', fontSize: '16'},
    {fontName: 'Cormorant Garamond Semibold Italic', fontSubtitle: 'For quotes and extra information', fontFamily: `"cormorant-garamond", serif`, fontWeight: '600', fontStyle: 'italic'},
  ];

  const imageSlideProps = [
    {imagePath: KaviLogo1, title: "Primary logo"},
    {imagePath: KaviLogo2, title: "Secondary logo"},
    {imagePath: KaviLogo3, title: "Tertiary logo"},
    {imagePath: KaviBrandAsset1, title: "Brand asset 1"},
    {imagePath: KaviBrandAsset2, title: "Brand asset 2"},
    {imagePath: KaviMockup1, title: "Mockup"},
    {imagePath: KaviMockup2, title: "Mockup"},
    {imagePath: KaviMockup3, title: "Mockup"},
    {imagePath: KaviMockup4, title: "Mockup"},
    {imagePath: KaviMockup5, title: "Mockup"},
  ];

  const imageSlide = <div style={{display: 'flex', width: 'stretch', justifyContent: 'center'}}><ImageSlide imageSlideProps={imageSlideProps} imageMaxWidth={true}/></div>;

  const gridArray = [
        {title: 'Overview', content: content, rowType: 'Column'},
        {title: 'Colors', content: <ColorPalette colors={colors} text={'This brand should use bold, tropical colors to imitate bright saree/textile colors. I also took inspiration from colors applied in Pichwai or Mughal art with lotuses and peacocks.'}/>},
        {title: 'Fonts', content: <Fonts fonts={fonts} text={'These typefaces are mature and elegant. The Cormorant Garamond Medium is the primary typeface while the DM Sans Regular is the secondary typeface. For quotes and extra information, use the Cormorant Garamond Semibold Italic.'}/>},
        {title: 'Images', content: imageSlide}
  ]

  return (
    <div>
        <h1 className='title'>KAVI</h1>
        <Grid gridProps={gridArray}/>
    </div>
  );
}

export default Kavi;
