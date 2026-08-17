import './Pages.scss';
import ImageSlide from '../components/Images/ImageSlide.js';
import Button from '../components/Button/Button.js';
import {
  UmekoLogo1,
  UmekoLogo2,
  UmekoLogo3,
  UmekoBrandAsset1,
  UmekoBrandAsset2,
  UmekoMockup1,
  UmekoMockup2,
  UmekoMockup3,
  UmekoMockup4,
  UmekoMockup5,
  UmekoBanner2
} from '../assets/images';
import ColorPalette from '../components/ProjectDetails/ColorPalette.js';
import Fonts from '../components/ProjectDetails/Fonts.js';
import Grid from '../components/Grid/Grid.js';

export const Umeko = () => {

  requestAnimationFrame(() => {
        window.scrollTo(0,0);
    });


  const summaryContent =
    <div className='columnWith24Gap'>
        <h2>Umeko is a fun, light-hearted Japanese style cafe which sources tea from Japan. <span style={{color: '#2519D2'}}>They serve classic teas, as well as unique blends, and boba to cater to both younger and older aficionados.</span> The pastel, calm aesthetic is inspired by the Japanese plum (ume) and blossom. Umeko means "plum child" in Japanese and plum blossoms are associated with good fortune and health.</h2>
        <p>*This is a fictional company made for design purposes.</p>
        <Button type='Primary' text='See full project on Behance' link={'https://www.behance.net/gallery/242576285/Umeko-Brand-Identity-and-Guidelines'}/>
    </div>

  const colors = [
    {colorName: 'Cherry blossom', color: '#FDDBDA', text: 'Hex Code: #FDDBDA\nRGB: 253 219 218\nCMYK: 0% 16.29% 7.55% 0%'},
    {colorName: 'Kirby', color: '#F693B0', text: 'Hex Code: #F693B0\nRGB: 246 17 176\nCMYK: 0% 53.08% 8.67% 0%'},
    {colorName: 'Rising sun', color: '#F53A31', text: 'Hex Code: #F53A31\nRGB: 245 58 49\nCMYK: 0% 91.28% 86.97% 0%', textColor: 'light'},
    {colorName: 'Plum', color: '#5440AC', text: 'Hex Code: #5440AC\nRGB: 84 64 172\nCMYK: 79.3% 84.8% 0% 0%', textColor: 'light'},
  ];

  const fonts = [
    {fontName: 'Rampart One Regular', fontSubtitle: 'Primary font', fontFamily: `"rampart-one", sans-serif`, fontWeight: '400', fontStyle: 'normal', fontSize: '32'},
    {fontName: 'Rounded M+ 1C Medium', fontSubtitle: 'Secondary font', fontFamily: `"m-plus-rounded-1c", sans-serif`, fontWeight: '500', fontStyle: 'normal', fontSize: '32'}  
  ];
  
  const imageSlideProps1 = [
    {imagePath: UmekoLogo1, title: "Primary logo"},
    {imagePath: UmekoLogo2, title: "Secondary logo"},
    {imagePath: UmekoLogo3, title: "Tertiary logo"},
    {imagePath: UmekoBrandAsset1, title: "Brand asset 1"},
    {imagePath: UmekoBrandAsset2, title: "Brand asset 2"},
  ];

  const imageSlideProps2 = [
    {imagePath: UmekoMockup1, title: "Mockup"},
    {imagePath: UmekoMockup2, title: "Mockup"},
    {imagePath: UmekoMockup3, title: "Mockup"},
    {imagePath: UmekoMockup4, title: "Mockup"},
    {imagePath: UmekoMockup5, title: "Mockup"},
  ];

  const design =
    <div className='columnWith48Gap'>
        <div className='colorFontContainer'>
            <ColorPalette showTitle colors={colors} text={'Used cute, romantic pastels to create an inviting aesthetic. Pinks and purples will pay homage to the plum and plum blossom and give almost a 90s anime/vaporwave feel.'}/>
            <Fonts showTitle fonts={fonts} text={'These typefaces are bubbly, yet easy to read, to welcome an audience of all ages. The typeface also pairs well with the cute cat logo.'}/>
        </div>
        {<ImageSlide imageSlideProps={imageSlideProps1}/>}
    </div>;

  return (
    <div>
      <div className='bannerUmeko'>
          <div className='bannerTitle'>
              <h1 className='title'>Umeko</h1>
              <div className='bannerDataContainer'>
                  <div className='bannerData'>
                      <p style={{color: '#6D6C65'}}>Timeline</p>
                      <p style={{fontWeight: '700'}}>July 2024</p>
                  </div>
                  <div className='bannerData'>
                      <p style={{color: '#6D6C65'}}>Industry</p>
                      <p style={{fontWeight: '700'}}>Food/Service</p>
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
        <img src={UmekoBanner2} alt='Umeko illustrations'/>
      </div>
      <Grid gridProps={[{title: 'Mockups', content: <ImageSlide imageSlideProps={imageSlideProps2}/>, rowType: 'Column'}]} gridMargin='40px 24px'/>
    </div>
  );
}

export default Umeko;
