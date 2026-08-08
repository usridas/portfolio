import './Pages.scss';
import ImageSlide from '../components/Images/ImageSlide.js';
import Button from '../components/Button/Button.js';
import {
  KaviLogo1,
  KaviLogo2,
  KaviLogo3,
  KaviBrandAsset1,
  KaviBrandAsset2,
  KaviBrandAsset3,
  KaviMockup1,
  KaviMockup2,
  KaviMockup3,
  KaviMockup4,
  KaviBanner2
} from '../assets/images'
import { ColorPalette } from '../components/ProjectDetails/ColorPalette.js';
import Fonts from '../components/ProjectDetails/Fonts.js';
import Grid from '../components/Grid/Grid.js';

export const Kavi = () => {

  const summaryContent =
      <div className='columnWith24Gap'>
          <h2>KAVI is a South Asian women owned luxury beauty and self care brand. Rooted in South Asian culture and ayurvedic practices, KAVI strives to <span style={{color: '#2519D2'}}>make the beauty and self care routine enjoyable and relaxing through all-natural ingredients.</span></h2>
          <p>*This is a fictional company made for design purposes.</p>
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

  const imageSlideProps1 = [
    {imagePath: KaviLogo1, title: "Primary logo"},
    {imagePath: KaviLogo2, title: "Secondary logo"},
    {imagePath: KaviLogo3, title: "Tertiary logo"},
    {imagePath: KaviBrandAsset1, title: "Brand asset 1"},
    {imagePath: KaviBrandAsset2, title: "Brand asset 2"},
    {imagePath: KaviBrandAsset3, title: "Brand asset 3"},
  ];

  const imageSlideProps2 = [
    {imagePath: KaviMockup1, title: "Mockup"},
    {imagePath: KaviMockup2, title: "Mockup"},
    {imagePath: KaviMockup3, title: "Mockup"},
    {imagePath: KaviMockup4, title: "Mockup"},
  ];

  const design =
      <div className='columnWith48Gap'>
          <div className='colorFontContainer'>
              <ColorPalette showTitle colors={colors} text={'This brand should use bold, tropical colors to imitate bright saree/textile colors. I also took inspiration from colors applied in Pichwai or Mughal art with lotuses and peacocks.'}/>
              <Fonts showTitle fonts={fonts} text={'These typefaces are mature and elegant. The Cormorant Garamond Medium is the primary typeface while the DM Sans Regular is the secondary typeface. For quotes and extra information, use the Cormorant Garamond Semibold Italic.'}/>
          </div>
          {<ImageSlide imageSlideProps={imageSlideProps1}/>}
      </div>;

  return (
    <div>
          <div className='bannerKavi'>
              <div className='bannerTitle'>
                  <h1 className='title'>Kavi</h1>
                  <div className='bannerDataContainer'>
                      <div className='bannerData'>
                          <p style={{color: '#6D6C65'}}>Timeline</p>
                          <p style={{fontWeight: '700'}}>July 2024</p>
                      </div>
                      <div className='bannerData'>
                          <p style={{color: '#6D6C65'}}>Industry</p>
                          <p style={{fontWeight: '700'}}>Luxury Goods</p>
                      </div>
                      <div className='bannerData'>
                          <p style={{color: '#6D6C65'}}>Role</p>
                          <p style={{fontWeight: '700'}}>Brand Designer</p>
                      </div>
                  </div>
              </div>
          </div>
          <Grid gridProps={[{title: 'Overview', content: summaryContent, rowType: 'Column'}]} gridMargin='40px 24px'/>
          <Grid gridProps={[{title: 'Colors & Fonts', content: design, rowType: 'Column'}]} gridMargin='40px 24px'/>
          <div className='bannerWrapper'>
            <img src={KaviBanner2} alt='Kavi brand assets'/>
          </div>
          <Grid gridProps={[{title: 'Mockups', content: <ImageSlide imageSlideProps={imageSlideProps2}/>, rowType: 'Column'}]} gridMargin='40px 24px'/>
        </div>
  );
}

export default Kavi;
